"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Internship",
    link: "/join-us/internship",
  },
  {
    name: "Career Opportunity",
    link: "/join-us/career-opportunity",
  },
];

export default function CareersIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0d4969]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/career-contact.jpg"
          alt="Let's talk about you"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            translate-y-0
            lg:translate-y-[75px]
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
            via-white/5
            via-[28%]
            via-white/60
            via-[42%]
            to-transparent
            to-[58%]
          "
        />

        {/* Desktop left wash */}
        <div
          className="
            absolute inset-y-0 left-0
            hidden
            lg:block
            w-[48%]
            bg-white/30
          "
        />

        {/* Mobile overlay */}
        <div
          className="
            absolute inset-0
            bg-white/75
            lg:hidden
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative z-10
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-start
            lg:items-center
            lg:col-span-3
            px-0
            lg:px-7
            xl:px-8
          "
        >
          <nav className="w-full max-w-[320px] lg:max-w-[250px]">
            {categories.map((item, index) => (
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
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.link}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    border-b
                    border-[#0d4969]/25
                    py-4
                    sm:py-5
                    lg:py-4
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
                    className="
                      block
                      pl-2
                      text-[18px]
                      sm:text-[20px]
                      font-normal
                      tracking-[-0.01em]
                      text-[#0d4969]
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                    "
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-start
            lg:items-center
            lg:col-span-4
            mt-16
            sm:mt-20
            lg:mt-0
            px-0
            lg:px-5
            xl:px-8
          "
        >
          <div className="w-full max-w-[400px]">
            <p
              className="
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                font-normal
                leading-[1.45]
                tracking-[-0.015em]
                text-[#0d4969]
              "
            >
              At our studio, professional development is an ongoing
              commitment. We strongly believe team members benefit
              from collaborative project experiences.
            </p>

            <p
              className="
                mt-7
                sm:mt-8
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                font-normal
                leading-[1.45]
                tracking-[-0.015em]
                text-[#0d4969]
              "
            >
              We encourage qualified professionals who are passionate
              about shaping the future of cities, landscapes, and
              communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}