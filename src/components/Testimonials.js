"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Star, ArrowRight, ArrowLeft, CheckCircle2, Building, MoveHorizontal } from "lucide-react";
import { testimonials } from "./Testimonials.data";

// Mouse-wheel vertical scroll is redirected into horizontal scroll at this multiplier
const WHEEL_SCROLL_MULTIPLIER = 2.2;
// Drag-to-pan speed relative to raw pointer movement
const DRAG_SCROLL_MULTIPLIER = 1.8;
// Distance (px) the arrow buttons scroll per click
const ARROW_SCROLL_DISTANCE = 460;

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Update progress bar on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  // Enable Mouse Wheel Horizontal Scrolling
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If user scrolls vertically inside this container, smoothly scroll horizontally!
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY * WHEEL_SCROLL_MULTIPLIER,
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Mouse Drag Panning
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * DRAG_SCROLL_MULTIPLIER;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Button Steppers
  const scrollStep = (direction) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -ARROW_SCROLL_DISTANCE : ARROW_SCROLL_DISTANCE,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 selection:bg-[#0d4969] selection:text-white border-t border-[#0d4969]/10">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#0d4969]/15 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
              <Sparkles size={13} />
              <span>05 • Client Testimonials & Impact</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
              Endorsements from Visionary Patrons & Institutions
            </h2>

            <p className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2">
              <MoveHorizontal size={14} className="text-[#d97736]" />
              <span>Scroll with mouse wheel or drag horizontally to browse reviews</span>
            </p>
          </div>

          {/* ARROW CONTROLS & PROGRESS */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <button
              type="button"
              onClick={() => scrollStep("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0d4969]/20 bg-white text-[#0d4969] transition-all hover:border-[#0d4969] hover:bg-[#0d4969] hover:text-white shadow-sm cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollStep("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0d4969]/20 bg-white text-[#0d4969] transition-all hover:border-[#0d4969] hover:bg-[#0d4969] hover:text-white shadow-sm cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= HORIZONTAL SCROLLABLE SHOWCASE (DRAG & MOUSE WHEEL) ================= */}
      <div className="relative mt-10 w-full">
        {/* Soft edge masks */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`
            flex
            gap-6
            overflow-x-auto
            px-6
            sm:px-12
            lg:px-16
            pb-6
            pt-2
            scroll-smooth
            no-scrollbar
            select-none
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="
                group
                relative
                flex
                w-[340px]
                sm:w-[440px]
                lg:w-[480px]
                shrink-0
                flex-col
                justify-between
                rounded-3xl
                border
                border-[#0d4969]/15
                bg-[#fafafa]
                p-6
                sm:p-8
                shadow-sm
                transition-all
                duration-500
                hover:border-[#0d4969]
                hover:bg-white
                hover:shadow-xl
                hover:-translate-y-1.5
              "
            >
              {/* TOP HEADER: RATING & PROJECT BADGE */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#d97736]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#d97736" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d4969]/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#0d4969]">
                    <CheckCircle2 size={11} className="text-[#d97736]" />
                    <span>{t.category}</span>
                  </span>
                </div>

                {/* QUOTE BODY */}
                <p className="text-sm sm:text-base font-light text-[#0d4969] leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  “{t.quote}”
                </p>
              </div>

              {/* IMPACT METRIC PILL */}
              <div className="my-5 flex items-center gap-2.5 rounded-2xl bg-white border border-[#0d4969]/10 p-3 shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0d4969] text-white">
                  <Building size={14} />
                </div>
                <div className="text-xs">
                  <p className="font-mono text-[10px] uppercase text-gray-400">Validated Impact</p>
                  <p className="font-medium text-[#0d4969]">{t.impactMetric}</p>
                </div>
              </div>

              {/* FOOTER: CLIENT AVATAR, PROJECT & LOCATION */}
              <div className="flex items-center gap-4 border-t border-[#0d4969]/10 pt-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-[#0d4969]/15 shadow-sm">
                  <Image
                    src={t.image}
                    alt={t.project}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-medium text-[#0d4969] truncate">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate font-mono">
                    {t.role} • <strong className="text-[#0d4969] font-normal">{t.organization}</strong>
                  </p>
                  <p className="text-[10px] text-[#d97736] font-mono truncate">
                    {t.project} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM PROGRESS TRACK */}
        <div className="mx-auto mt-6 w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16 flex items-center justify-between">
          <div className="h-1.5 w-48 sm:w-64 rounded-full bg-[#0d4969]/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0d4969] to-[#d97736] rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <span className="text-[10px] font-mono text-gray-400">
            Drag or wheel to explore commissions
          </span>
        </div>
      </div>
    </section>
  );
}
