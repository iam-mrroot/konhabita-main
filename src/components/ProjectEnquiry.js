"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const categories = [
  {
    name: "For Collaboration",
    link: "/contact/collaboration",
  },
  {
    name: "Project Enquiry",
    link: "/contact/project-enquiry",
  },
];

export default function ProjectEnquiry() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/project-enquiry.jpg"
          alt="Project Enquiry"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[68%_center]
            sm:object-[65%_center]
            md:object-center
          "
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/75" />

        {/* Blue tint */}
        <div className="absolute inset-0 bg-[#eaf3f7]/15" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 min-h-screen">
        <div
  className="
    mx-auto
    flex
    min-h-screen
    w-full
    max-w-[1600px]
    flex-col

    px-6
    pt-28
    pb-10

    sm:px-8
    sm:pt-32
    sm:pb-12

    md:px-10
    md:pt-36
    md:pb-16

    lg:grid
    lg:min-h-screen
    lg:grid-cols-12
    lg:px-0
    lg:py-0
  "
>
          {/* =================================================
              LEFT MENU
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              w-full
              items-start

              lg:col-span-5
              lg:items-center
              lg:px-7
              xl:px-8
            "
          >
            <nav
              className="
                w-full
                max-w-[280px]

                sm:max-w-[320px]

                lg:max-w-[260px]
              "
            >
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
                      py-3

                      sm:py-4
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
                        pl-1
                        text-[18px]
                        font-normal
                        leading-tight
                        tracking-[-0.01em]
                        text-[#0d4969]
                        transition-all
                        duration-300
                        group-hover:translate-x-2

                        sm:text-[20px]
                      "
                    >
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              w-full
              items-start

              mt-12

              sm:mt-14

              md:mt-16

              lg:col-span-7
              lg:mt-0
              lg:items-center
              lg:px-8
              lg:py-20

              xl:px-16
              2xl:px-24
            "
          >
            <div className="w-full max-w-[590px]">
              <p
                className="
                  text-[17px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.01em]
                  text-[#0d4969]

                  sm:text-[18px]

                  md:text-[20px]

                  lg:text-[22px]
                "
              >
                To help us understand your requirements, please include a
                brief description of your project, its location, objectives,
                timeline, and any relevant documentation.
              </p>

              <p
                className="
                  mt-6
                  text-[17px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.01em]
                  text-[#0d4969]

                  sm:text-[18px]

                  md:text-[20px]

                  lg:text-[22px]
                "
              >
                Our team will review your inquiry and respond at the earliest
                opportunity.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT DETAILS
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-14
              w-full
              pb-4

              sm:mt-16

              md:mt-20

              lg:absolute
              lg:bottom-8
              lg:left-0
              lg:right-0
              lg:mt-0
              lg:pb-0
            "
          >
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-[600px]
                flex-col
                items-start
                gap-5

                sm:items-center
                sm:gap-6

                lg:max-w-none
                lg:flex-row
                lg:justify-center
                lg:gap-12
              "
            >
              {/* =================================================
                  PHONE
              ================================================= */}
              <a
                href="tel:xxxxxxxxxxx"
                className="
                  flex
                  w-full
                  items-center
                  gap-3

                  sm:w-auto
                "
              >
                <div
                  className="
                    flex
                    h-[48px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#0d4969]
                    transition-all
                    duration-300
                    hover:bg-[#0d4969]

                    sm:h-[54px]
                    sm:w-[86px]
                  "
                >
                  <Phone
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#78b2d1] sm:h-7 sm:w-7"
                  />
                </div>

                <span
                  className="
                    min-w-0
                    break-all
                    text-[15px]
                    leading-5
                    text-[#0d4969]

                    sm:text-[18px]

                    md:text-[19px]
                  "
                >
                  xxxxxxxxxxx
                </span>
              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}
              <a
                href="mailto:xxxxx@konhabita.com"
                className="
                  flex
                  w-full
                  items-center
                  gap-3

                  sm:w-auto
                "
              >
                <div
                  className="
                    flex
                    h-[48px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#0d4969]

                    sm:h-[54px]
                    sm:w-[86px]
                  "
                >
                  <Mail
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#78b2d1] sm:h-7 sm:w-7"
                  />
                </div>

                <span
                  className="
                    min-w-0
                    break-all
                    text-[15px]
                    leading-5
                    text-[#0d4969]

                    sm:text-[18px]

                    md:text-[19px]
                  "
                >
                  xxxxx@konhabita.com
                </span>
              </a>
            </div>
          </motion.div>
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
      </div>
    </section>
  );
}