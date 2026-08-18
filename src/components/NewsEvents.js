"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NewsEvents() {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        w-full
        overflow-hidden
        bg-white
        sm:min-h-[65vh]
        md:h-[60vh]
        md:min-h-0
        selection:bg-[#0d4969]
        selection:text-white
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src="/news-events.gif"
          alt="News and Events"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-20
          flex
          min-h-[70vh]
          w-full
          flex-col
          px-5
          pb-24
          pt-28
          sm:min-h-[65vh]
          sm:px-7
          md:min-h-0
          md:h-[60vh]
          md:block
          md:px-10
          md:pb-0
          md:pt-0
        "
      >
        {/* ================= RIGHT CONTENT ================= */}
        <div
          className="
            relative
            w-full
            max-w-none
            md:absolute
            md:right-12
            md:top-1/2
            md:w-[45%]
            md:max-w-[460px]
            md:-translate-y-1/2
            lg:right-16
          "
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
            <Sparkles size={13} />
            <span>03 • Interactions</span>
          </div>

          <p
            className="
              text-[#0d4969]
              text-[17px]
              font-normal
              leading-[1.45]
              sm:text-lg
              sm:leading-[1.5]
              md:text-lg
              lg:text-[22px]
              lg:leading-[1.38]
              transition-all
              duration-300
              hover:text-[#072638]
            "
          >
            Our practice brings together landscape architecture,
            urban planning, urban design, and architecture to deliver
            integrated solutions for the built environment.
          </p>
        </div>

        {/* ================= BUTTON ================= */}
        <div
          className="
            absolute
            bottom-6
            left-5
            right-5
            flex
            justify-end
            sm:left-7
            sm:right-7
            md:bottom-6
            md:left-auto
            md:right-10
            lg:right-12
          "
        >
          <Link
            href="/news"
            className="
              group
              relative
              flex
              h-11
              w-full
              max-w-[220px]
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
            <span
              className="
                text-[13px]
                font-medium
                text-[#0d4969]
                transition-colors
                duration-300
                sm:text-sm
                group-hover:text-white
              "
            >
              View Interactions
            </span>

            <span
              className="
                text-xl
                font-light
                text-[#0d4969]
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-white
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}