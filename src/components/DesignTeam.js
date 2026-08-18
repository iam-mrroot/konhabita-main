"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Ar. Anagha",
    role: "AGM - Lead Architect",
    image: "/team/anagha.jpg",
    bio: "Lead architect overseeing institutional masterplans, biophilic material systems, and complex architectural detailing.",
  },
  {
    name: "Ar. Koushik Varma",
    role: "Lead - Landscape Architect",
    image: "/team/koushik.jpg",
    bio: "Specializing in civic parklands, sponge-city stormwater networks, and arid-climate botanical restoration.",
  },
  {
    name: "Ar. Shruthi Laxmi",
    role: "DM - Sustainable Architect",
    image: "/team/shruthi.jpg",
    bio: "Pioneering passive computational CFD modeling, thermal comfort simulations, and net-zero energy design frameworks.",
  },
  {
    name: "Ar. Indrajit Koner",
    role: "Urban Planner",
    image: "/team/indrajit.jpg",
    bio: "Specializing in regional GIS territorial zoning, transit-oriented development corridors, and smart city infrastructure.",
  },
  {
    name: "Ar. Anand Raj",
    role: "Senior Architect",
    image: "/team/anand.jpg",
    bio: "Directing architectural site execution, tectonic joinery detailing, and high-performance commercial envelopes.",
  },
  {
    name: "Ar. Swetha S",
    role: "Architect",
    image: "/team/swetha.jpg",
    bio: "Focusing on tropical residential architecture, daylighting studies, and biophilic interior spaces.",
  },
  {
    name: "Ar. Balaji M",
    role: "Architect",
    image: "/team/balaji.jpg",
    bio: "Expert in parametric modeling, BIM documentation, and modular prefabricated construction systems.",
  },
  {
    name: "Godwin Leo",
    role: "Senior 3D Visualiser",
    image: "/team/godwin.jpg",
    bio: "Creating hyper-realistic architectural CGI visuals, computational light simulations, and cinematic studio animations.",
  },
];

export default function DesignTeam() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
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
          y: 35,
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 85%",
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

      {/* ================= MEMBER BIO MODAL ================= */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl text-[#0d4969]">
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#0d4969] hover:bg-[#0d4969] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d97736]">
                  Design Team
                </span>
                <h3 className="text-2xl font-light text-[#0d4969]">{selectedMember.name}</h3>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {selectedMember.role}
                </p>
                <p className="pt-3 text-sm font-light leading-relaxed text-gray-700">
                  {selectedMember.bio}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#0d4969]/10 pt-6">
              <Link
                href="/join-us"
                className="rounded-full bg-[#0d4969] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#d97736] transition-colors"
              >
                Join Design Atelier
              </Link>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="text-xs uppercase tracking-wider text-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}