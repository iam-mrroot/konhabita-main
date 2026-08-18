"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { categories } from "./ContactIntro.data";

export default function ContactIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:min-h-screen">

      <div className="absolute inset-0">

        <Image
          src="/contacts-bg.jpg"
          alt="Studio"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            opacity-25
            sm:opacity-30
            lg:opacity-100
          "
        />

        {/* DESKTOP WHITE FADE */}
        <div
          className="
            absolute
            inset-0
            hidden
            lg:block
            bg-white/80
          "
        />

        {/* MOBILE WHITE BACKGROUND */}
        <div
          className="
            absolute
            inset-0
            bg-white/90
            lg:hidden
          "
        />

        {/* DESKTOP BLUE TINT */}
        <div
          className="
            absolute
            inset-0
            hidden
            lg:block
            bg-[#eaf3f7]/20
          "
        />

      </div>


      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1500px]
          grid-cols-1
          lg:min-h-screen
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
            pt-20
            pb-8

            sm:px-8
            sm:pt-24

            md:px-10

            lg:col-span-2
            lg:items-center
            lg:px-6
            lg:py-14

            xl:px-8
          "
        >

          <nav className="w-full max-w-[220px]">

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
                    border-[#0d4969]/20
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
                      text-[17px]
                      font-normal
                      leading-6
                      tracking-[-0.01em]
                      text-[#0d4969]
                      transition-all
                      duration-300
                      group-hover:translate-x-2

                      sm:text-[19px]
                    "
                  >
                    {item.name}
                  </span>

                </Link>

              </motion.div>
            ))}

          </nav>

        </motion.div>


        {/* LOCATION / ADDRESS */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
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
            px-6
            pt-8
            pb-10

            sm:px-8
            md:px-10
            md:pt-10

            lg:col-span-4
            lg:items-center
            lg:px-4
            lg:py-12

            xl:px-8
          "
        >

          <div className="w-full max-w-[390px]">

            {/* BENGALURU */}
            <div
              className="
                flex
                items-start
                gap-4

                sm:gap-6

                lg:gap-8
              "
            >

              <h3
                className="
                  shrink-0
                  text-[18px]
                  font-normal
                  tracking-[-0.01em]
                  text-[#0d4969]

                  sm:text-[20px]

                  lg:min-w-[115px]
                  lg:text-[21px]
                "
              >
                Bengaluru
              </h3>

            </div>


            {/* ADDRESS */}
            <div
              className="
                mt-6
                flex
                items-start
                gap-4

                sm:mt-7
                sm:gap-6

                lg:gap-8
              "
            >

              <h3
                className="
                  shrink-0
                  text-[18px]
                  font-normal
                  tracking-[-0.01em]
                  text-[#0d4969]

                  sm:text-[20px]

                  lg:min-w-[115px]
                  lg:text-[21px]
                "
              >
                Address
              </h3>

              <span
                className="
                  mt-[1px]
                  text-[20px]
                  leading-none
                  text-[#0d4969]/60

                  sm:text-[22px]
                "
              >
                |
              </span>

              <p
                className="
                  max-w-[220px]
                  text-[14px]
                  leading-[1.55]
                  text-[#0d4969]

                  sm:text-[16px]

                  lg:max-w-[230px]
                  lg:text-[17px]
                "
              >
                1st floor, 236, Venkatadri
                <br />
                Hewlett Packard Avenue,
                <br />
                Electronic City, Phase I,
                <br />
                Bengaluru, Karnataka
                <br />
                560100
              </p>

            </div>

          </div>

        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-start
            px-6
            pt-4
            pb-16

            sm:px-8
            md:px-10
            md:pt-6

            lg:col-span-6
            lg:items-center
            lg:px-6
            lg:py-12

            xl:px-10
          "
        >

          <div className="w-full max-w-[600px]">

            <p
              className="
                max-w-[580px]
                text-[18px]
                font-normal
                leading-[1.5]
                tracking-[-0.015em]
                text-[#0d4969]

                sm:text-[20px]

                md:text-[21px]

                lg:text-[22px]
              "
            >
              Our multidisciplinary practice works with clients,
              consultants, institutions, developers, government
              agencies, and industry partners to deliver thoughtful
              and sustainable solutions.
            </p>


            <p
              className="
                mt-6
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0d4969]

                sm:text-[20px]

                md:text-[21px]
              "
            >
              Let’s get knowing... To deliver better
            </p>


            {/* CONTACT DETAILS */}
            <div
              className="
                mt-10
                flex
                flex-col
                items-start
                gap-5

                sm:mt-12
                sm:gap-6

                md:flex-row
                md:flex-wrap
                md:items-center
                md:gap-8

                lg:mt-16
              "
            >

              {/* PHONE */}
              <div className="flex w-full items-center gap-3 sm:w-auto">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0d4969]
                    text-[#0d4969]
                    transition-all
                    duration-300
                    hover:bg-[#0d4969]
                    hover:text-white

                    sm:h-[54px]
                    sm:w-[70px]
                  "
                >
                  <Phone
                    size={22}
                    strokeWidth={1.5}
                    className="sm:h-6 sm:w-6"
                  />
                </div>

                <a
                  href="tel:xxxxxxxxxx"
                  className="
                    min-w-0
                    text-[16px]
                    text-[#0d4969]
                    underline
                    decoration-[#0d4969]/30
                    underline-offset-4
                    transition-colors
                    hover:text-[#083750]

                    sm:text-[18px]
                  "
                >
                  xxxxxxxxxx
                </a>

              </div>


              {/* EMAIL */}
              <div className="flex w-full items-center gap-3 sm:w-auto">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0d4969]
                    text-[#0d4969]
                    transition-all
                    duration-300
                    hover:bg-[#0d4969]
                    hover:text-white

                    sm:h-[54px]
                    sm:w-[70px]
                  "
                >
                  <Mail
                    size={22}
                    strokeWidth={1.5}
                    className="sm:h-6 sm:w-6"
                  />
                </div>

                <a
                  href="mailto:xxxxxx@konhabita.com"
                  className="
                    min-w-0
                    break-all
                    text-[16px]
                    text-[#0d4969]
                    transition-colors
                    hover:text-[#083750]

                    sm:break-normal
                    sm:text-[18px]
                  "
                >
                  xxxxxx@konhabita.com
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
