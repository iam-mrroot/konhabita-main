"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newsCategories } from "@/data/newsCategories";

// Standard ease curve and fade-in duration reused across this component's
// motion transitions.
const EASE_STANDARD = [0.22, 1, 0.36, 1];
const FADE_IN_DURATION = 0.8;

export default function Podcasts() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">

        {/* LEFT MENU */}
        <div className="flex items-center px-6 md:px-8 lg:px-10">
          <motion.nav
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: FADE_IN_DURATION,
              ease: EASE_STANDARD,
            }}
            className="w-full max-w-[300px]"
          >
            {newsCategories.map((item, index) => {
              const isActive = item.name === "Podcasts";

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.link}
                    className="
                      group
                      block
                      border-b
                      border-gray-300
                      py-3
                    "
                  >
                    <span
                      className={`
                        block
                        text-[21px]
                        font-normal
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-0 text-[#0d4969]"
                            : "text-gray-500 group-hover:translate-x-2 group-hover:text-[#0d4969]"
                        }
                      `}
                    >
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center justify-center px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: EASE_STANDARD,
            }}
            className="max-w-[580px]"
          >
            {/* SMALL LABEL */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.2em]
                text-[#0d4969]/60
              "
            >
              Podcasts
            </motion.p>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                font-light
                leading-tight
                text-[#0d4969]
                md:text-4xl
              "
            >
              Good things take time….
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: FADE_IN_DURATION,
              }}
              className="
                mt-6
                max-w-[540px]
                text-lg
                leading-[1.55]
                text-gray-600
                md:text-xl
              "
            >
              Our podcasts bring together ideas, conversations, and
              perspectives that explore the future of cities, design,
              architecture, and the built environment.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}