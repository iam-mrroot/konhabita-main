"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { team } from "./DesignTeam.data";
import DesignTeamMemberModal from "./DesignTeamMemberModal";

gsap.registerPlugin(ScrollTrigger);

// Team card entrance animation, triggered as the grid scrolls into view
const CARD_ENTRANCE_Y_OFFSET = 35;
const CARD_ENTRANCE_DURATION = 0.8;
const CARD_ENTRANCE_STAGGER = 0.1;
const CARD_SCROLL_TRIGGER_START = "top 85%";

export default function DesignTeam() {
  const sectionRef = useRef(null);
  const teamRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         TEAM ANIMATION
      ========================= */
      const cards = teamRef.current?.querySelectorAll(".team-card");

      if (cards?.length) {
        gsap.set(cards, {
          opacity: 0,
          y: CARD_ENTRANCE_Y_OFFSET,
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: CARD_ENTRANCE_DURATION,
          stagger: CARD_ENTRANCE_STAGGER,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: CARD_SCROLL_TRIGGER_START,
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="w-full overflow-hidden bg-white text-[#0d4969] selection:bg-[#0d4969] selection:text-white"
    >
      {/* =====================================================
          02 — DESIGN TEAM
      ===================================================== */}
      <section
        ref={teamRef}
        className="relative border-t border-[#0d4969]/15"
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5
            py-14
            sm:px-6
            sm:py-20
            md:px-10
            md:py-28
            lg:px-16
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-[90px_1fr_70px]">
            {/* ===============================================
                LEFT TEAM LABEL
            =============================================== */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <div className="flex items-center gap-5">
                  <div className="h-px w-8 bg-[#0d4969]" />
                  <span className="text-sm tracking-[0.1em] text-[#0d4969]">
                    Team
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                TEAM GRID
            =============================================== */}
            <div>
              {/* MOBILE TITLE */}
              <div className="mb-8 sm:mb-10 lg:hidden">
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-[#0d4969]" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#0d4969]">
                    Design Team
                  </p>
                </div>
              </div>

              {/* TEAM CARDS */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-x-6
                  gap-y-14
                  sm:grid-cols-2
                  sm:gap-x-8
                  sm:gap-y-16
                  lg:grid-cols-3
                  lg:gap-x-10
                  lg:gap-y-20
                "
              >
                {team.map((member, index) => (
                  <article
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    data-cursor="view"
                    className="team-card group w-full cursor-pointer"
                  >
                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        mx-auto
                        aspect-square
                        w-full
                        max-w-[320px]
                        overflow-hidden
                        bg-[#e5e5e5]
                        sm:max-w-[300px]
                      "
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="
                          (max-width: 639px) 100vw,
                          (max-width: 1024px) 45vw,
                          300px
                        "
                        className="
                          object-cover
                          grayscale
                          transition-all
                          duration-700
                          ease-out
                          sm:group-hover:scale-[1.04]
                          sm:group-hover:grayscale-0
                        "
                      />

                      {/* BLUE WASH */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-[#0d4969]/10
                          transition-opacity
                          duration-500
                          sm:group-hover:opacity-0
                        "
                      />

                      {/* NUMBER */}
                      <span
                        className="
                          absolute
                          left-3
                          top-3
                          text-[9px]
                          tracking-[0.25em]
                          text-white
                          sm:left-4
                          sm:top-4
                          sm:text-[10px]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* MEMBER INFO */}
                    <div
                      className="
                        mx-auto
                        mt-4
                        w-full
                        max-w-[320px]
                        sm:mt-5
                        sm:max-w-[300px]
                      "
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3
                            className="
                              text-[17px]
                              font-normal
                              leading-tight
                              tracking-[-0.02em]
                              text-[#0d4969]
                              sm:text-[20px]
                              transition-colors
                              group-hover:text-[#d97736]
                            "
                          >
                            {member.name}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              leading-5
                              text-gray-500
                              sm:mt-1.5
                              sm:text-[14px]
                            "
                          >
                            {member.role}
                          </p>
                        </div>

                        {/* DESKTOP HOVER ARROW */}
                        <span
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#0d4969]/20
                            text-sm
                            transition-all
                            duration-300
                            group-hover:border-[#0d4969]
                            group-hover:bg-[#0d4969]
                            group-hover:text-white
                          "
                        >
                          ↗
                        </span>
                      </div>

                      {/* UNDERLINE */}
                      <div
                        className="
                          mt-4
                          h-px
                          w-full
                          bg-[#0d4969]/10
                          transition-all
                          duration-500
                          sm:mt-5
                          sm:group-hover:bg-[#0d4969]/40
                        "
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ===============================================
                RIGHT VERTICAL LABEL
            =============================================== */}
            <div className="hidden lg:flex justify-end">
              <div className="sticky top-32 flex h-[500px] items-center">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-[#0d4969]
                      [writing-mode:vertical-rl]
                      rotate-180
                    "
                  >
                    Design Team
                  </span>

                  <div className="h-[390px] w-px bg-[#0d4969]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DesignTeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}