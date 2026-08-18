"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Expertisepage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#0d4969] selection:text-white">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <Image
          src="/projects-bg.jpg"
          alt="Projects"
          fill
          priority
          className="object-cover object-center"
        />

        {/* LIGHT WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          min-h-screen
          w-full
          px-5
          sm:px-7
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            grid
            min-h-screen
            grid-cols-1
            gap-10
            pb-28
            pt-28
            sm:gap-12
            sm:pt-32
            md:pt-36
            lg:grid-cols-12
            lg:gap-0
            lg:pb-0
            lg:pt-0
          "
        >
          {/* ================= LEFT TITLE ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              lg:col-span-4
              lg:min-h-screen
            "
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
              <Sparkles size={13} />
              <span>02 • Portfolio</span>
            </div>

            <h1
              className="
                font-light
                tracking-tight
                text-[#0d4969]
                text-5xl
                leading-none
                sm:text-6xl
                md:text-7xl
                lg:text-[64px]
                xl:text-[68px]
              "
            >
              Projects
            </h1>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className="
              relative
              flex
              items-center
              lg:col-span-8
              lg:min-h-screen
            "
          >
            {/* ORANGE VERTICAL LINE */}
            <div
              className="
                absolute
                right-0
                top-[16%]
                hidden
                h-[52%]
                w-px
                bg-orange-400
                md:block
              "
            />

            {/* TEXT CONTENT */}
            <div
              className="
                w-full
                max-w-[850px]
                text-[#0d4969]
                space-y-6
                sm:space-y-7
                md:space-y-8
                lg:ml-auto
                lg:mr-8
                lg:space-y-10
                lg:text-center
                xl:mr-16
              "
            >
              {/* PARAGRAPH 1 */}
              <p
                className="
                  text-base
                  font-normal
                  leading-7
                  sm:text-lg
                  sm:leading-8
                  md:text-xl
                  md:leading-9
                  lg:text-[23px]
                  lg:leading-relaxed
                  transition-all
                  duration-300
                  hover:text-[#072638]
                  hover:translate-x-1
                "
              >
                Our projects commit to innovation, sustainability, and
                design excellence across all verticals.
              </p>

              {/* PARAGRAPH 2 */}
              <p
                className="
                  text-base
                  font-normal
                  leading-7
                  sm:text-lg
                  sm:leading-8
                  md:text-xl
                  md:leading-9
                  lg:text-[23px]
                  lg:leading-relaxed
                  transition-all
                  duration-300
                  hover:text-[#072638]
                  hover:translate-x-1
                "
              >
                We create thoughtful, context-responsive solutions that
                enrich communities, strengthen the environment, and
                contribute to the sustainable growth of cities and regions.
              </p>

              {/* PARAGRAPH 3 */}
              <p
                className="
                  text-base
                  font-normal
                  leading-7
                  sm:text-lg
                  sm:leading-8
                  md:text-xl
                  md:leading-9
                  lg:text-[23px]
                  lg:leading-relaxed
                  transition-all
                  duration-300
                  hover:text-[#072638]
                  hover:translate-x-1
                "
              >
                Every project reflects our collaborative approach and
                vision for creating places that are resilient, inclusive,
                and enduring.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM RIGHT PROJECT LINK ================= */}
        <div
          className="
            absolute
            bottom-6
            left-5
            sm:left-auto
            sm:right-7
            md:right-10
            lg:bottom-8
            lg:right-12
            flex
            items-end
          "
        >
          <Link
            href="/projects"
            className="
              group
              relative
              flex
              h-11
              w-[190px]
              items-center
              justify-between
              rounded-full
              border-2
              border-[#0d4969]
              px-5
              transition-all
              duration-300
              hover:bg-[#0d4969]
              hover:shadow-lg
            "
          >
            {/* TEXT */}
            <span
              className="
                text-sm
                font-medium
                text-[#0d4969]
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              View Projects
            </span>

            {/* ARROW LINE */}
            <span
              className="
                absolute
                right-10
                h-px
                w-7
                bg-[#0d4969]
                transition-all
                duration-300
                group-hover:w-9
                group-hover:bg-white
              "
            />

            {/* ARROW */}
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              className="
                text-[#0d4969]
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-white
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}