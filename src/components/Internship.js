"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { careersNavLinks } from "./careersNavLinks.data";
import InternshipApplicationForm from "./InternshipApplicationForm";

const EASE_OUT = [0.22, 1, 0.36, 1];
const NAV_STAGGER_BASE_DELAY = 0.15;
const NAV_STAGGER_STEP = 0.12;

export default function Internship() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/career.jpg"
          alt="Internship"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[center_55%]
            md:object-[center_55%]
          "
        />

        {/* DESKTOP LEFT WHITE FADE */}
        <div
          className="
            absolute
            inset-0
            hidden
            lg:block
            bg-gradient-to-r
            from-white
            from-[0%]
            via-white/95
            via-[38%]
            via-white/75
            via-[50%]
            to-transparent
            to-[72%]
          "
        />

        {/* MOBILE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-white/90
            lg:hidden
          "
        />

        {/* DESKTOP LIGHT WASH */}
        <div className="absolute inset-0 hidden bg-white/10 lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          min-h-screen
          lg:grid
          lg:grid-cols-12
          lg:translate-y-[60px]
        "
      >
        {/* =====================================================
            LEFT MENU
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: EASE_OUT,
          }}
          className="
            flex
            items-center
            lg:col-span-2
            px-5
            pt-28
            pb-8
            sm:px-7
            sm:pt-32
            md:px-10
            md:pt-36
            lg:px-6
            lg:py-12
            xl:px-8
          "
        >
          <nav
            className="
              w-full
              max-w-[220px]
              lg:max-w-[220px]
            "
          >
            {careersNavLinks.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: NAV_STAGGER_BASE_DELAY + index * NAV_STAGGER_STEP,
                  ease: EASE_OUT,
                }}
              >
                <Link
                  href={item.link}
                  className="
                    group
                    block
                    border-b
                    border-[#0d4969]/25
                    py-3
                    sm:py-4
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className={`
                      block
                      text-[17px]
                      sm:text-[19px]
                      lg:text-[20px]
                      font-normal
                      tracking-[-0.01em]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      ${
                        item.name === "Internship"
                          ? "text-[#0d4969]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: EASE_OUT,
          }}
          className="
            flex
            items-start
            lg:items-center
            lg:col-span-5
            px-5
            pb-20
            sm:px-7
            sm:pb-24
            md:px-12
            md:pb-28
            lg:px-5
            lg:py-14
            xl:px-8
          "
        >
          <div
            className="
              w-full
              max-w-[470px]
            "
          >
            {/* FIRST PARAGRAPH */}
            <p
              className="
                text-[17px]
                sm:text-[18px]
                md:text-[20px]
                lg:text-[21px]
                font-normal
                leading-[1.55]
                tracking-[-0.01em]
                text-[#0d4969]
              "
            >
              We offer internship programme which provides aspiring
              professionals an opportunity to gain practical experience
              and exposure in a collaborative and multidisciplinary
              design environment.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
                mt-6
                sm:mt-7
                text-[17px]
                sm:text-[18px]
                md:text-[20px]
                lg:text-[21px]
                font-normal
                leading-[1.55]
                tracking-[-0.01em]
                text-[#0d4969]
              "
            >
              Interns work alongside experienced{" "}
              <strong className="font-semibold">
                Planners, Landscape architects, Urban designers,
                Architects, and Researchers,
              </strong>{" "}
              contributing to live projects across a variety of scales
              and sectors.
            </p>

            {/* =================================================
                APPLY BUTTON
            ================================================== */}
            <div
              className="
                mt-8
                flex
                justify-start
                sm:mt-10
                sm:justify-end
                sm:pr-2
              "
            >
              <motion.button
                type="button"
                onClick={() => setShowForm(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: EASE_OUT,
                }}
                className="
                  group
                  relative
                  flex
                  h-[50px]
                  w-full
                  max-w-[215px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#0d4969]
                  text-[#0d4969]
                  transition-all
                  duration-500
                  hover:text-white
                "
              >
                {/* Hover background */}
                <span
                  className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-[#0d4969]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Text */}
                <span className="relative z-10 text-[15px] tracking-wide">
                  Apply Now
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT IMAGE SPACE
        ====================================================== */}
        <div className="hidden lg:col-span-5 lg:block" />
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-[#0d4969]/20
        "
      />

      {/* =====================================================
          APPLICATION MODAL
      ====================================================== */}
      <InternshipApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </section>
  );
}
