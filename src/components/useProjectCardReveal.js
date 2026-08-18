"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll-in reveal for ".project-card" elements: cards fade/rise/scale up, and their
// image starts slightly zoomed in and settles to 1x — shared by every project showcase page.
const CARD_START_OPACITY = 0.15;
const CARD_START_Y = 75;
const CARD_START_SCALE = 0.96;
const CARD_REVEAL_DURATION = 1.4;
const CARD_REVEAL_EASE = "power2.out";
const CARD_SCROLL_START = "top 90%";
const CARD_SCROLL_END = "top 35%";
const CARD_SCRUB = 0.6;
const IMAGE_START_SCALE = 1.12;
const IMAGE_SCROLL_START = "top 95%";
const IMAGE_SCROLL_END = "bottom 15%";

export function useProjectCardReveal(sectionRef, listRef) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = listRef.current?.querySelectorAll(".project-card");
      if (!cards) return;

      cards.forEach((card) => {
        const img = card.querySelector("img");

        gsap.fromTo(
          card,
          {
            opacity: CARD_START_OPACITY,
            y: CARD_START_Y,
            scale: CARD_START_SCALE,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: CARD_REVEAL_DURATION,
            ease: CARD_REVEAL_EASE,
            scrollTrigger: {
              trigger: card,
              start: CARD_SCROLL_START,
              end: CARD_SCROLL_END,
              scrub: CARD_SCRUB,
            },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: IMAGE_START_SCALE },
            {
              scale: 1.0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: IMAGE_SCROLL_START,
                end: IMAGE_SCROLL_END,
                scrub: CARD_SCRUB,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, listRef]);
}
