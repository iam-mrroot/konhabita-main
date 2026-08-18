"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { categories } from "./ForCollaboration.data";

export default function ForCollaboration() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">

      <div className="absolute inset-0 z-0">
        <Image
          src="/collaboration.jpg"
          alt="Collaboration"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[65%_center]
            sm:object-[60%_center]
            lg:object-center
          "
        />

        {/* Desktop / Mobile white overlay */}
        <div className="absolute inset-0 bg-white/75" />

        {/* Subtle blue tint */}
        <div className="absolute inset-0 bg-[#eaf3f7]/15" />

        {/* Stronger mobile readability */}
        <div className="absolute inset-0 bg-white/10 sm:bg-transparent" />
      </div>

      <div className="relative z-10">

        <div
          className="
            mx-auto
            grid
            min-h-screen
            w-full
            max-w-[1600px]
            grid-cols-1
            lg:grid-cols-12
          "
        >

          {/* LEFT MENU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              items-start
              px-6
              pt-24
              pb-8

              sm:px-8
              sm:pt-28

              md:px-10
              md:pt-32

              lg:col-span-5
              lg:items-center
              lg:px-7
              lg:py-16

              xl:px-8
            "
          >
            <nav className="w-full max-w-[260px]">

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
                      py-3.5
                      sm:py-4
                    "
                  >

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
                        tracking-[-0.01em]
                        text-[#0d4969]
                        transition-all
                        duration-300

                        sm:text-[20px]

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


          {/* RIGHT DESCRIPTION */}
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
              items-start
              px-6
              pt-8
              pb-32

              sm:px-8
              sm:pt-10

              md:px-12
              md:pt-12

              lg:col-span-7
              lg:items-center
              lg:px-8
              lg:py-14

              xl:pl-8
              xl:pr-20
            "
          >
            <p
              className="
                max-w-[590px]
                text-[18px]
                font-normal
                leading-[1.5]
                tracking-[-0.01em]
                text-[#0d4969]

                sm:text-[19px]

                md:text-[21px]

                lg:text-[22px]
              "
            >
              We value long-term partnerships with consultants,
              technology providers, suppliers, manufacturers,
              contractors, and specialist service partners who
              share our commitment to quality.
            </p>
          </motion.div>

        </div>


        {/* CONTACT DETAILS */}
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
            relative
            z-20
            mt-[-70px]
            px-6
            pb-8

            sm:mt-[-60px]
            sm:px-8

            md:mt-[-70px]

            lg:absolute
            lg:bottom-10
            lg:left-0
            lg:right-0
            lg:mt-0
            lg:px-0
            lg:pb-0
          "
        >

          <div
            className="
              flex
              flex-col
              items-start
              justify-center
              gap-5

              sm:items-center
              sm:gap-6

              md:flex-row
              md:gap-10

              lg:gap-12
            "
          >

            {/* PHONE */}
            <div className="flex w-full items-center gap-3 sm:w-auto">

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

                  sm:h-[54px]
                  sm:w-[86px]

                  hover:bg-[#0d4969]
                "
              >
                <Phone
                  size={24}
                  strokeWidth={1.5}
                  className="
                    text-[#78b2d1]
                    transition-colors
                    duration-300
                    sm:h-7
                    sm:w-7
                  "
                />
              </div>

              <span
                className="
                  min-w-0
                  break-all
                  text-[16px]
                  leading-5
                  text-[#0d4969]

                  sm:text-[18px]

                  md:text-[19px]
                "
              >
                xxxxxxxxxxx
              </span>

            </div>


            {/* EMAIL */}
            <div className="flex w-full items-center gap-3 sm:w-auto">

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
                  size={24}
                  strokeWidth={1.5}
                  className="
                    text-[#78b2d1]
                    sm:h-7
                    sm:w-7
                  "
                />
              </div>

              <span
                className="
                  min-w-0
                  break-all
                  text-[16px]
                  leading-5
                  text-[#0d4969]

                  sm:text-[18px]

                  md:text-[19px]
                "
              >
                xxxxx@konhabita.com
              </span>

            </div>

          </div>

        </motion.div>


        {/* BOTTOM LINE */}
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
