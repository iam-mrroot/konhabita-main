"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRouter } from "next/navigation";
import { ArrowUp, ArrowRight, Compass, Sparkles, MoveUp } from "lucide-react";
import KShape from "./KShape";

gsap.registerPlugin(Draggable);

export default function Hero() {
  const hero = useRef(null);
  const swipeRef = useRef(null);
  const handleRef = useRef(null);
  const trackRef = useRef(null);
  const manifestoRef = useRef(null);
  const router = useRouter();

  // Distinct Entity Level Stages: 1 = 'K_GATEWAY' (1500px scroll), 2 = 'MANIFESTO' (500px scroll)
  const [activeStage, setActiveStage] = useState(1);
  const [stage1Progress, setStage1Progress] = useState(0); // 0 to 100%
  const [stage2Progress, setStage2Progress] = useState(0); // 0 to 100%
  const isEnteringRef = useRef(false);

  // Exact Scroll Distances
  const K_SCROLL_MAX = 1000; // 1000px scroll on K
  const MANIFESTO_SCROLL_MAX = 750; // 750px scroll on drag button / manifesto

  // Interpolated scroll targets
  const targetKScroll = useRef(0);
  const currentKScroll = useRef(0);

  const targetManifestoScroll = useRef(0);
  const currentManifestoScroll = useRef(0);

  const navigateToHome = () => {
    if (isEnteringRef.current) return;
    isEnteringRef.current = true;

    gsap.to(manifestoRef.current, {
      y: "-100%",
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.7,
      ease: "power2.inOut",
    });

    gsap.to(hero.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
        router.push("/home");
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal
      gsap.from(".hero-meta", {
        opacity: 0,
        y: -20,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".logo-container", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(swipeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  // 60FPS / 120FPS SILKY SMOOTH LERP PHYSICS LOOP
  useEffect(() => {
    let animId;

    const render = () => {
      if (!isEnteringRef.current) {
        // ENTITY LEVEL 1: K-GATEWAY OPENING (0 to 1500px)
        currentKScroll.current += (targetKScroll.current - currentKScroll.current) * 0.08;
        const curK = currentKScroll.current;
        const kProg = Math.max(0, Math.min(1, curK / K_SCROLL_MAX));

        gsap.set(".kLeft", {
          x: -kProg * 950,
          y: kProg * 360,
        });
        gsap.set(".kRight", {
          x: kProg * 1050,
          y: -kProg * 390,
        });
        gsap.set(".logo-container", {
          opacity: Math.max(0, 1 - kProg * 1.15),
          scale: 1 + kProg * 0.1,
        });
        gsap.set(".bg-layer", {
          scale: 1 + kProg * 0.08,
        });

        setStage1Progress(Math.round(kProg * 100));

        // When Stage 1 (1500px) completes, switch to Stage 2
        if (curK >= K_SCROLL_MAX - 10 && activeStage === 1) {
          setActiveStage(2);
          gsap.to(manifestoRef.current, {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          });
        } else if (curK < K_SCROLL_MAX - 50 && activeStage === 2) {
          setActiveStage(1);
          gsap.to(manifestoRef.current, {
            y: "100%",
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          });
        }

        // ENTITY LEVEL 2: MANIFESTO & DRAG BUTTON SCROLL (0 to 500px)
        if (activeStage === 2) {
          currentManifestoScroll.current +=
            (targetManifestoScroll.current - currentManifestoScroll.current) * 0.08;
          const curM = currentManifestoScroll.current;
          const mProg = Math.max(0, Math.min(1, curM / MANIFESTO_SCROLL_MAX));
          setStage2Progress(Math.round(mProg * 100));

          if (curM >= MANIFESTO_SCROLL_MAX - 10 && !isEnteringRef.current) {
            navigateToHome();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [activeStage]);

  // Wheel listener: routes scroll to Stage 1 (1500px) or Stage 2 (500px)
  useEffect(() => {
    const handleWheel = (e) => {
      if (isEnteringRef.current) return;

      if (activeStage === 1) {
        // Stage 1: K-Gateway (1500px)
        targetKScroll.current += e.deltaY * 0.9;
        targetKScroll.current = Math.max(0, Math.min(K_SCROLL_MAX, targetKScroll.current));
      } else if (activeStage === 2) {
        // Stage 2: Bridging Environment section (500px scroll)
        if (e.deltaY < 0 && targetManifestoScroll.current <= 0) {
          // Scroll back up to Stage 1
          targetKScroll.current -= Math.abs(e.deltaY) * 0.9;
        } else {
          targetManifestoScroll.current += e.deltaY * 0.85;
          targetManifestoScroll.current = Math.max(
            0,
            Math.min(MANIFESTO_SCROLL_MAX, targetManifestoScroll.current)
          );
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeStage]);

  // Draggable handle logic on Stage 2 (500px drag equivalent)
  useLayoutEffect(() => {
    if (!handleRef.current || !trackRef.current) return;

    const trackHeight = trackRef.current.offsetHeight;
    const handleHeight = handleRef.current.offsetHeight;
    const maxDrag = trackHeight - handleHeight;

    const idlePulse = gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(handleRef.current, {
        y: -6,
        duration: 1.2,
        ease: "sine.inOut",
      });

    const draggable = Draggable.create(handleRef.current, {
      type: "y",
      bounds: { minY: -maxDrag, maxY: 0 },
      cursor: "grab",
      activeCursor: "grabbing",

      onPressInit() {
        idlePulse.pause();
      },

      onDrag() {
        const progress = Math.abs(this.y) / maxDrag;
        if (activeStage === 1) {
          targetKScroll.current = progress * K_SCROLL_MAX;
        } else {
          targetManifestoScroll.current = progress * MANIFESTO_SCROLL_MAX;
        }
      },

      onDragEnd() {
        const progress = Math.abs(this.y) / maxDrag;

        if (progress > 0.55) {
          if (activeStage === 1) {
            targetKScroll.current = K_SCROLL_MAX;
            gsap.to(handleRef.current, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => idlePulse.restart(),
            });
          } else {
            targetManifestoScroll.current = MANIFESTO_SCROLL_MAX;
            navigateToHome();
          }
        } else {
          gsap.to(handleRef.current, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            onComplete: () => idlePulse.restart(),
          });
        }
      },
    });

    return () => {
      draggable[0]?.kill();
      idlePulse.kill();
    };
  }, [activeStage]);

  return (
    <section
      ref={hero}
      className="fixed inset-0 h-screen w-full overflow-hidden bg-[#072638] select-none z-50"
    >
      {/* Background Architectural Canvas */}
      <div className="relative h-screen w-full">
        <img
          src="/background.gif"
          className="bg-layer absolute inset-0 h-full w-full object-cover opacity-90"
          alt="Architectural Motion Canvas"
        />
        <div className="overlay-layer absolute inset-0 bg-[#072638]/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-20" />
      </div>

      {/* TOP HEADER BAR */}
      <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 md:px-14">
        <div className="hero-meta flex items-center gap-3 text-[11px] font-mono tracking-widest text-white/80 uppercase">
          <Compass size={14} className="text-[#16648e]" />
          <span>8.5241° N, 76.9366° E • {activeStage === 1 ? "STAGE 01: K-GATEWAY" : "STAGE 02: ATELIER"}</span>
        </div>

        {/* Enter Studio Skip Button */}
        <button
          type="button"
          onClick={navigateToHome}
          className="hero-meta group flex items-center gap-2 rounded-full border border-white/25 bg-[#0d4969]/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#16648e] hover:bg-[#0d4969] shadow-lg cursor-pointer"
        >
          <span>Enter Studio</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* =========================================================================
          ENTITY LEVEL 1: 1500PX SCROLL K-SHAPE GATEWAY
      ========================================================================= */}
      <div className="kShape absolute inset-0 z-20 origin-center pointer-events-none">
        <KShape />
      </div>

      {/* CENTRAL LOGO (STAGE 1) */}
      <div className="logo-container absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none text-center">
        <div className="relative h-[120px] w-[260px] sm:h-[160px] sm:w-[360px] md:h-[200px] md:w-[480px] lg:h-[240px] lg:w-[600px] drop-shadow-2xl">
          <Image
            src="/logo.webp"
            fill
            priority
            alt="Konhabita Logo"
            className="object-contain"
          />
        </div>

        <p className="mt-3 text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-white/90 drop-shadow">
          Architecture • Landscape • Urban Design • Sustainability
        </p>

        <div className="mt-8 flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/60">
          <span>Scroll to Open Gateway (1000px)</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>

      {/* =========================================================================
          ENTITY LEVEL 2: "BRIDGING ENVIRONMENT" SECTION (750PX SCROLL / DRAG BUTTON)
      ========================================================================= */}
      <div
        ref={manifestoRef}
        style={{ transform: "translateY(100%)", opacity: 0 }}
        className="
          absolute
          inset-0
          z-35
          flex
          flex-col
          justify-between
          bg-[#072638]/92
          px-6
          py-20
          sm:px-12
          sm:py-24
          lg:px-24
          backdrop-blur-2xl
          text-white
        "
      >
        <div className="mx-auto w-full max-w-5xl my-auto space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
            <Sparkles size={14} />
            <span>Konhabita Design Atelier • Stage 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
            Bridging environmental intelligence and tectonic permanence.
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-white/15 pt-8">
            <div className="space-y-1">
              <p className="text-[11px] font-mono uppercase text-[#d97736]">Discipline 01</p>
              <p className="text-sm font-light text-white/90">Landscape Ecology</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-mono uppercase text-[#d97736]">Discipline 02</p>
              <p className="text-sm font-light text-white/90">Urban Masterplanning</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-mono uppercase text-[#d97736]">Discipline 03</p>
              <p className="text-sm font-light text-white/90">Climate Architecture</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-mono uppercase text-[#d97736]">Discipline 04</p>
              <p className="text-sm font-light text-white/90">Interior Architecture</p>
            </div>
          </div>
        </div>

        {/* 750PX SCROLL / DRAG PROMPT */}
        <div className="mx-auto flex flex-col items-center gap-3 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
            <MoveUp size={14} className="animate-bounce" />
            <span>Scroll 750px or Drag Handle to Enter Studio</span>
          </div>

          <button
            type="button"
            onClick={navigateToHome}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#d97736] hover:border-[#d97736] transition-colors cursor-pointer"
          >
            <span>Enter Studio Workspace</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* DRAG-TO-SWIPE DEDICATED TRACK CONTROLLER */}
      <div
        ref={swipeRef}
        data-cursor="drag"
        className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-white opacity-0"
      >
        <div
          ref={trackRef}
          className="relative h-20 w-9 flex justify-center items-end rounded-full border border-white/30 bg-[#072638]/70 backdrop-blur-md p-1 cursor-pointer transition-colors hover:border-[#16648e]"
        >
          {/* Active Stage Progress Fill */}
          <div className="absolute top-2 bottom-2 w-[2px] bg-white/20 rounded-full overflow-hidden">
            <div
              className="w-full bg-[#d97736] transition-all"
              style={{ height: `${activeStage === 1 ? stage1Progress : stage2Progress}%` }}
            />
          </div>

          {/* Draggable Ball */}
          <div
            ref={handleRef}
            className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0d4969] shadow-[0_0_20px_rgba(255,255,255,0.8)] touch-none cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
          >
            <ArrowUp size={14} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}