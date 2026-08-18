"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { newsCategories } from "@/data/newsCategories";
import { monthlyEventGalleryColumns } from "@/data/monthlyEvents";

// Standard ease curve and fade-in duration reused across this component's
// motion transitions.
const EASE_STANDARD = [0.22, 1, 0.36, 1];
const FADE_IN_DURATION = 0.8;

export default function MonthlyEvents() {
  return (
    <section className="min-h-screen bg-white overflow-hidden">
      {/* PAGE CONTAINER */}
      <div className="mx-auto max-w-[1700px] px-6 md:px-10 lg:px-16">

        {/* IMPORTANT:
            Extra space between navbar and gallery
        */}
        <div className="pt-24 md:pt-28 lg:pt-32">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ================= LEFT MENU ================= */}
            <motion.aside
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: FADE_IN_DURATION,
                ease: EASE_STANDARD,
              }}
              className="
                lg:col-span-2
                flex
                items-start
                lg:pt-44
              "
            >
              <nav className="w-full max-w-[230px]">
                {newsCategories.map((item, index) => {
                  const active = item.name === "Monthly Events";

                  return (
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
                        duration: 0.6,
                        delay: 0.15 + index * 0.1,
                        ease: EASE_STANDARD,
                      }}
                    >
                      <Link
                        href={item.link}
                        className="
                          group
                          relative
                          block
                          border-b
                          border-[#0d4969]/20
                          py-4
                          overflow-hidden
                        "
                      >
                        <span
                          className={`
                            block
                            pl-1
                            text-[20px]
                            md:text-[21px]
                            font-normal
                            tracking-[-0.02em]
                            transition-all
                            duration-400
                            ${
                              active
                                ? "text-[#0d4969]"
                                : "text-gray-500 group-hover:text-[#0d4969]"
                            }
                            group-hover:translate-x-2
                          `}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.aside>

            {/* ================= GALLERY ================= */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {monthlyEventGalleryColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-2.5">
                    {column.map((item) => (
                      <motion.div
                        key={item.src}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: FADE_IN_DURATION,
                          delay: item.delay,
                          ease: EASE_STANDARD,
                        }}
                        className={`
                          relative
                          w-full
                          ${item.height}
                          overflow-hidden
                          group
                          bg-gray-100
                        `}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes={item.sizes}
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                          "
                        />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}