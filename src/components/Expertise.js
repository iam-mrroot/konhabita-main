"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    name: "Landscape",
    link: "/projects/landscape",
    expertiseLink: "/expertise/landscape-expertise",
    tagline: "Ecological stewardship & resilient outdoor living environments",
    tags: ["Civic Parks", "Waterfronts", "Urban Forestry", "Sponge Cities"],
  },
  {
    name: "Planning + Urban Design",
    link: "/projects/planning-urban-design",
    expertiseLink: "/expertise/planning-expertise",
    tagline: "Territorial masterplans & transit-oriented metropolitan frameworks",
    tags: ["Masterplanning", "Transit Corridors", "Smart Habitats", "Zoning Codes"],
  },
  {
    name: "Architecture",
    link: "/projects/architecture",
    expertiseLink: "/expertise/architecture-expertise",
    tagline: "Biophilic, climate-responsive structures of enduring permanence",
    tags: ["Institutional", "Mixed-Use", "Cultural Centers", "Private Villas"],
  },
  {
    name: "Interiors",
    link: "/projects/interiors",
    expertiseLink: "/expertise/interiors-expertise",
    tagline: "Tactile, light-driven interior architecture tuned to human wellbeing",
    tags: ["Workplaces", "Hospitality", "Living Spaces", "Acoustic Craft"],
  },
  {
    name: "Sustainability",
    link: "/projects/sustainability",
    expertiseLink: "/expertise/sustainability-expertise",
    tagline: "Quantitative carbon reduction, passive solar, & circular research",
    tags: ["Passive Solar", "Rainwater Harvesting", "Circular Materials", "Microclimate CFD"],
  },
];

export default function Expertise() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const rowsRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = rowsRef.current?.querySelectorAll(".service-row");

      gsap.set(bgRef.current, {
        opacity: 0,
        scale: 1.05,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(paragraphRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(rows, {
        opacity: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        delay: 0.1,
      });

      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.1
      )
        .to(
          paragraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0.25
        )
        .to(
          rows,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
          },
          0.35
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#0d4969] selection:text-white"
    >
      {/* Clean Minimalist Background Grid */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          pb-16
          pt-32
          sm:px-7
          sm:pt-36
          md:px-10
          md:pt-40
          lg:px-8
          lg:pb-24
          lg:pt-44
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:gap-16
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              lg:col-span-4
            "
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
              <Sparkles size={13} />
              <span>01 • Disciplines</span>
            </div>

            <h2
              ref={headingRef}
              className="
                mb-5
                text-4xl
                font-light
                leading-tight
                text-[#0d4969]
                sm:text-5xl
                md:mb-6
                lg:text-5xl
              "
            >
              Expertise
            </h2>

            <p
              ref={paragraphRef}
              className="
                max-w-xl
                text-base
                font-normal
                leading-7
                text-[#0d4969]
                sm:text-lg
                sm:leading-8
                md:text-xl
                md:leading-9
                lg:max-w-md
                lg:text-xl
                lg:leading-10
              "
            >
              Our practice brings together landscape architecture,
              urban planning, urban design, and architecture to deliver
              integrated solutions for the built environment.
            </p>

            {/* Interactive Capability Pill */}
            <div className="mt-8 hidden lg:flex items-center gap-3 rounded-2xl border border-[#0d4969]/15 bg-white/70 p-4 backdrop-blur-sm shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d4969] text-white">
                <span className="text-xs font-mono">05</span>
              </div>
              <div className="text-xs text-[#0d4969]">
                <p className="font-medium uppercase tracking-wider">Integrated Disciplines</p>
                <p className="text-gray-500">From territorial planning to tactile interiors.</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SERVICES ================= */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div
              ref={rowsRef}
              className="border-t border-[#8aa8bb]/40"
            >
              {services.map((service, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="
                      service-row
                      group
                      relative
                      border-b
                      border-[#8aa8bb]/40
                      py-4
                      sm:py-5
                      md:py-6
                      lg:py-5
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex min-w-0 items-center justify-between gap-4">
                      {/* SERVICE NAME & TAGLINE */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#d97736] opacity-60 group-hover:opacity-100 transition-opacity">
                            0{index + 1}
                          </span>
                          <h3
                            className="
                              text-lg
                              font-light
                              leading-tight
                              text-[#0d4969]
                              transition-transform
                              duration-300
                              group-hover:translate-x-2
                              sm:text-xl
                              md:text-2xl
                            "
                          >
                            {service.name}
                          </h3>
                        </div>

                        {/* Interactive Expanding Tagline on Hover */}
                        <p
                          className={`mt-1.5 text-xs text-[#0d4969]/75 transition-all duration-300 ${
                            isHovered ? "max-h-12 opacity-100 pl-7" : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {service.tagline}
                        </p>
                      </div>

                      {/* OVAL ARROW BUTTON */}
                      <Link
                        href={service.link}
                        aria-label={`Explore ${service.name}`}
                        className="shrink-0"
                      >
                        <span
                          className="
                            relative
                            flex
                            h-9
                            w-16
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            border-2
                            border-[#0d4969]
                            transition-all
                            duration-500
                            sm:h-11
                            sm:w-20
                            md:h-12
                            md:w-24
                            group-hover:shadow-md
                            hover:scale-105
                          "
                        >
                          {/* Sliding background */}
                          <span
                            className="
                              absolute
                              inset-0
                              origin-left
                              scale-x-0
                              bg-[#0d4969]
                              transition-transform
                              duration-500
                              ease-out
                              group-hover:scale-x-100
                            "
                          />

                          {/* Arrow inside oval */}
                          <ArrowRightIcon
                            className="
                              relative
                              z-10
                              h-5
                              w-5
                              text-[#0d4969]
                              transition-all
                              duration-500
                              sm:h-5
                              sm:w-5
                              md:h-6
                              md:w-6
                              group-hover:translate-x-1.5
                              group-hover:text-white
                            "
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}