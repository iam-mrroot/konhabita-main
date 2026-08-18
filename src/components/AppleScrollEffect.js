"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AppleScrollEffect() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Kill any prior triggers from earlier routes
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.id?.startsWith("circle-dice-3d-")) {
        st.kill();
      }
    });

    // ONLY apply multi-section 3D dice tumbler on the Home page ("/home")
    // On all content-rich subpages (/expertise/*, /projects/*, /studio, /news, /contact),
    // ensure text and images are 100% razor sharp with zero blur!
    if (pathname !== "/home") {
      document.querySelectorAll("main section, main > div, section").forEach((sec) => {
        gsap.set(sec, {
          opacity: 1,
          scale: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          filter: "none",
          clearProps: "transform,filter,opacity",
        });
      });
      return;
    }

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const sections = document.querySelectorAll("main > section, main > div > section");

        sections.forEach((section, index) => {
          if (section.closest(".kShape") || section.classList.contains("no-apple-scroll")) {
            return;
          }

          const isFirstSection = index === 0;

          // 3D Circular Dice spatial configuration on Home
          gsap.set(section, {
            transformPerspective: 1600,
            transformOrigin: "50% 50% -150px",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          });

          if (isFirstSection) {
            // TOP HERO SECTION: Starts fully active, curves forward in 3D depth as user scrolls down
            gsap.fromTo(
              section,
              {
                opacity: 1,
                scale: 1,
                z: 0,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
              },
              {
                opacity: 0.2,
                scale: 0.94,
                z: -160,
                rotateX: 18,
                y: -30,
                filter: "blur(4px)",
                ease: "none",
                scrollTrigger: {
                  id: `circle-dice-3d-${index}`,
                  trigger: section,
                  start: "top top",
                  end: "bottom 20%",
                  scrub: 0.5,
                  invalidateOnRefresh: true,
                },
              }
            );
          } else {
            // ALL OTHER SECTIONS ON HOME: FULL 3D CYLINDRICAL DICE REVOLUTION
            const tl = gsap.timeline({
              scrollTrigger: {
                id: `circle-dice-3d-${index}`,
                trigger: section,
                start: "top 95%",
                end: "bottom 5%",
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            });

            // 1. Enter from bottom 3D curve
            tl.fromTo(
              section,
              {
                opacity: 0.25,
                scale: 0.93,
                z: -160,
                rotateX: -18,
                y: 30,
                filter: "blur(4px)",
              },
              {
                opacity: 1,
                scale: 1,
                z: 0,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
                duration: 0.35,
                ease: "power1.out",
              }
            )
              // 2. Center reading view (100% crisp)
              .to(section, {
                opacity: 1,
                scale: 1,
                z: 0,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
                duration: 0.35,
                ease: "none",
              })
              // 3. Rolls over top 3D curve
              .to(section, {
                opacity: 0.25,
                scale: 0.93,
                z: -160,
                rotateX: 18,
                y: -30,
                filter: "blur(4px)",
                duration: 0.3,
                ease: "power1.in",
              });
          }
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 120);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id?.startsWith("circle-dice-3d-")) {
          st.kill();
        }
      });
    };
  }, [pathname]);

  return null;
}
