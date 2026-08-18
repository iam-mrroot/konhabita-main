"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { careersNavLinks } from "./careersNavLinks.data";
import CareerOpportunityApplicationForm from "./CareerOpportunityApplicationForm";

const EASE_OUT = [0.22, 1, 0.36, 1];
const NAV_STAGGER_BASE_DELAY = 0.15;
const NAV_STAGGER_STEP = 0.12;

export default function CareerOpportunity() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/career.jpg"
          alt="Career Opportunity"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            lg:object-[center_55%]
          "
        />

        {/* Desktop gradient */}
        <div
          className="
            absolute inset-0
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

        {/* Mobile overlay */}
        <div
          className="
            absolute inset-0
            bg-white/85
            sm:bg-white/75
            lg:hidden
          "
        />

        {/* Desktop wash */}
        <div className="absolute inset-0 hidden bg-white/10 lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[100svh]
          max-w-[1500px]
          px-5
          py-24
          sm:px-8
          sm:py-28
          md:px-10
          lg:grid
          lg:min-h-screen
          lg:grid-cols-12
          lg:px-0
          lg:py-0
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
            items-start
            lg:items-center
            lg:col-span-2
            px-0
            lg:px-6
            xl:px-8
          "
        >
          <nav className="w-full max-w-[320px] lg:max-w-[220px]">
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
                    relative
                    block
                    border-b
                    border-[#0d4969]/25
                    py-4
                    transition-all
                    duration-300
                    sm:py-5
                    lg:py-3
                  "
                >
                  {/* Hover indicator */}
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      origin-top
                      scale-y-0
                      bg-[#0d4969]
                      transition-transform
                      duration-500
                      group-hover:scale-y-100
                    "
                  />

                  <span
                    className={`
                      block
                      pl-2
                      text-[18px]
                      sm:text-[20px]
                      font-normal
                      tracking-[-0.01em]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      ${
                        item.name === "Career Opportunity"
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
            mt-14
            sm:mt-16
            lg:mt-0
            px-0
            lg:px-5
            xl:px-8
          "
        >
          <div className="w-full max-w-[470px]">
            {/* FIRST PARAGRAPH */}
            <p
              className="
                text-[18px]
                font-normal
                leading-[1.5]
                tracking-[-0.01em]
                text-[#0d4969]
                sm:text-[19px]
                md:text-[20px]
                lg:text-[21px]
              "
            >
              We are always on a look out for enthusiastic and energetic
              professionals who bring in there valuable contribution to our
              multidisciplinary teams of Landscape Architecture, Urban Design,
              Architecture, Interiors, Research, 3D Visualizers, and Project
              Managers.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
                mt-6
                text-[18px]
                font-normal
                leading-[1.5]
                tracking-[-0.01em]
                text-[#0d4969]
                sm:text-[19px]
                md:text-[20px]
                lg:text-[21px]
              "
            >
              We welcome professionals who are eager to contribute innovative
              ideas and work on projects that create lasting value for
              communities and the built environment.
            </p>

            {/* APPLY BUTTON */}
            <div className="mt-9 flex justify-start lg:justify-end lg:pr-2">
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
                  w-[190px]
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
                  sm:h-[52px]
                  sm:w-[215px]
                "
              >
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

                <span className="relative z-10 text-[15px] tracking-wide sm:text-[16px]">
                  Apply Now
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SPACE */}
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
      <CareerOpportunityApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </section>
  );
}
