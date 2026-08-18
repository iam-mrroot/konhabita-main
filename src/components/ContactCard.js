"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ContactCard() {
  return (
    <section
      className="
        relative
        h-auto
        min-h-[430px]
        w-full
        overflow-hidden
        bg-white
        sm:min-h-[400px]
        md:h-[40vh]
        md:min-h-[280px]
        selection:bg-[#0d4969]
        selection:text-white
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <Image
          src="/contact-bg.jpg"
          alt="Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* SOFT WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[430px]
          w-full
          flex-col
          items-center
          px-5
          pb-10
          pt-7
          sm:min-h-[400px]
          sm:px-7
          md:min-h-0
          md:h-full
          md:block
          md:px-0
          md:pb-0
          md:pt-0
        "
      >
        {/* ================= TOP TITLE ================= */}
        <div
          className="
            relative
            z-20
            text-center
            md:absolute
            md:left-1/2
            md:top-6
            md:-translate-x-1/2
          "
        >
          <h2
            className="
              whitespace-nowrap
              text-[19px]
              font-normal
              tracking-tight
              text-[#0d4969]
              sm:text-[21px]
              md:text-[22px]
              lg:text-[24px]
            "
          >
            Let’s Design Together
          </h2>

          {/* SMALL DECORATIVE LINE */}
          <div
            className="
              mx-auto
              mt-2
              h-px
              w-8
              bg-[#0d4969]/30
              sm:w-10
            "
          />
        </div>

        {/* ================= CENTER DIVIDER ================= */}
        <div
          className="
            hidden
            md:absolute
            md:left-1/2
            md:top-0
            md:block
            md:h-full
            md:w-px
            md:-translate-x-1/2
            md:border-l
            md:border-dashed
            md:border-[#e9a996]/50
          "
        />

        {/* ================= MOBILE BUTTON AREA ================= */}
        <div
          className="
            mt-20
            flex
            w-full
            max-w-[320px]
            flex-col
            items-center
            gap-6
            sm:mt-16
            sm:max-w-[350px]
            sm:gap-7
            md:hidden
          "
        >
          {/* CAREER */}
          <Link
            href="/join-us"
            className="
              group
              relative
              flex
              h-12
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#0d4969]
              bg-white/10
              text-[17px]
              font-normal
              tracking-tight
              text-[#0d4969]
              backdrop-blur-[1px]
              transition-all
              duration-500
              hover:bg-[#0d4969]
              hover:text-white
              hover:shadow-md
            "
          >
            <span className="relative z-10">Career</span>
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-white/20
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="
              group
              relative
              flex
              h-12
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#0d4969]
              bg-white/10
              text-[17px]
              font-normal
              tracking-tight
              text-[#0d4969]
              backdrop-blur-[1px]
              transition-all
              duration-500
              hover:bg-[#0d4969]
              hover:text-white
              hover:shadow-md
            "
          >
            <span className="relative z-10">Contact Us</span>
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-white/20
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </Link>
        </div>

        {/* ================= DESKTOP CAREER ================= */}
        <div
          className="
            hidden
            md:absolute
            md:left-0
            md:top-[55%]
            md:flex
            md:w-1/2
            md:-translate-y-1/2
            md:flex-col
            md:items-center
          "
        >
          <Link
            href="/join-us"
            className="
              group
              relative
              flex
              h-11
              w-[210px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#0d4969]
              bg-white/10
              text-[19px]
              font-normal
              tracking-tight
              text-[#0d4969]
              backdrop-blur-[1px]
              transition-all
              duration-500
              hover:bg-[#0d4969]
              hover:text-white
              hover:shadow-lg
              hover:scale-105
            "
          >
            <span className="relative z-10">Career</span>
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-white/20
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </Link>
        </div>

        {/* ================= DESKTOP CONTACT ================= */}
        <div
          className="
            hidden
            md:absolute
            md:right-0
            md:top-[55%]
            md:flex
            md:w-1/2
            md:-translate-y-1/2
            md:flex-col
            md:items-center
          "
        >
          <Link
            href="/contact"
            className="
              group
              relative
              flex
              h-11
              w-[215px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#0d4969]
              bg-white/10
              text-[19px]
              font-normal
              tracking-tight
              text-[#0d4969]
              backdrop-blur-[1px]
              transition-all
              duration-500
              hover:bg-[#0d4969]
              hover:text-white
              hover:shadow-lg
              hover:scale-105
            "
          >
            <span className="relative z-10">Contact Us</span>
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-white/20
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}