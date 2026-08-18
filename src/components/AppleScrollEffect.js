"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger ids for the Home-only "3D dice" section animation, used so
// prior triggers can be found and killed on route change / cleanup.
const CIRCLE_DICE_ID_PREFIX = "circle-dice-3d-";

// Wait for layout to settle before measuring section positions.
const CIRCLE_DICE_INIT_DELAY_MS = 120;

const CIRCLE_DICE_PERSPECTIVE = 1600;
const CIRCLE_DICE_SCRUB = 0.5;

// Depth/tilt/shift shared by the 3D roll in and out of view.
const DICE_Z_DEPTH = 160;
const DICE_ROTATE_X = 18;
const DICE_Y_SHIFT = 30;
const DICE_BLUR_ACTIVE = "blur(4px)";
const DICE_BLUR_NONE = "blur(0px)";

// The hero (first) section fades/scales less aggressively than the rest.
const HERO_EXIT_OPACITY = 0.2;
const HERO_EXIT_SCALE = 0.94;

// Every other section enters/exits at this opacity + scale.
const SECTION_EDGE_OPACITY = 0.25;
const SECTION_EDGE_SCALE = 0.93;

const SECTION_ENTER_DURATION = 0.35;
const SECTION_CENTER_DURATION = 0.35;
const SECTION_EXIT_DURATION = 0.3;

export default function AppleScrollEffect() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Kill any prior triggers from earlier routes
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.id?.startsWith(CIRCLE_DICE_ID_PREFIX)) {
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
            transformPerspective: CIRCLE_DICE_PERSPECTIVE,
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
                filter: DICE_BLUR_NONE,
              },
              {
                opacity: HERO_EXIT_OPACITY,
                scale: HERO_EXIT_SCALE,
                z: -DICE_Z_DEPTH,
                rotateX: DICE_ROTATE_X,
                y: -DICE_Y_SHIFT,
                filter: DICE_BLUR_ACTIVE,
                ease: "none",
                scrollTrigger: {
                  id: `${CIRCLE_DICE_ID_PREFIX}${index}`,
                  trigger: section,
                  start: "top top",
                  end: "bottom 20%",
                  scrub: CIRCLE_DICE_SCRUB,
                  invalidateOnRefresh: true,
                },
              }
            );
          } else {
            // ALL OTHER SECTIONS ON HOME: FULL 3D CYLINDRICAL DICE REVOLUTION
            const tl = gsap.timeline({
              scrollTrigger: {
                id: `${CIRCLE_DICE_ID_PREFIX}${index}`,
                trigger: section,
                start: "top 95%",
                end: "bottom 5%",
                scrub: CIRCLE_DICE_SCRUB,
                invalidateOnRefresh: true,
              },
            });

            // 1. Enter from bottom 3D curve
            tl.fromTo(
              section,
              {
                opacity: SECTION_EDGE_OPACITY,
                scale: SECTION_EDGE_SCALE,
                z: -DICE_Z_DEPTH,
                rotateX: -DICE_ROTATE_X,
                y: DICE_Y_SHIFT,
                filter: DICE_BLUR_ACTIVE,
              },
              {
                opacity: 1,
                scale: 1,
                z: 0,
                rotateX: 0,
                y: 0,
                filter: DICE_BLUR_NONE,
                duration: SECTION_ENTER_DURATION,
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
                filter: DICE_BLUR_NONE,
                duration: SECTION_CENTER_DURATION,
                ease: "none",
              })
              // 3. Rolls over top 3D curve
              .to(section, {
                opacity: SECTION_EDGE_OPACITY,
                scale: SECTION_EDGE_SCALE,
                z: -DICE_Z_DEPTH,
                rotateX: DICE_ROTATE_X,
                y: -DICE_Y_SHIFT,
                filter: DICE_BLUR_ACTIVE,
                duration: SECTION_EXIT_DURATION,
                ease: "power1.in",
              });
          }
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, CIRCLE_DICE_INIT_DELAY_MS);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id?.startsWith(CIRCLE_DICE_ID_PREFIX)) {
          st.kill();
        }
      });
    };
  }, [pathname]);

  return null;
}
