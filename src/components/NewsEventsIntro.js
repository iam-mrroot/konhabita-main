"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newsCategories } from "@/data/newsCategories";

// Standard ease curve reused across this component's motion transitions.
const EASE_STANDARD = [0.22, 1, 0.36, 1];

export default function NewsEventsIntro() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      
      {/* ANIMATED GIF BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/news-events.gif"
          alt="News and Events"
          className="h-full w-full object-cover"
        />

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-12">

        {/* LEFT MENU */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: EASE_STANDARD,
          }}
          className="
            lg:col-span-6
            flex
            items-center
            px-7
            py-10
            md:px-10
            lg:px-7
            xl:px-8
          "
        >
          <nav className="w-full max-w-[260px]">
            {newsCategories.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    border-[#0d4969]/25
                    py-3
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className="
                      block
                      text-[21px]
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

        {/* RIGHT DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: EASE_STANDARD,
          }}
          className="
            lg:col-span-6
            flex
            items-center
            px-7
            pb-10
            md:px-10
            lg:px-12
            lg:pb-0
            xl:px-14
          "
        >
          <p
            className="
              max-w-[590px]
              text-[19px]
              leading-[1.42]
              font-normal
              tracking-[-0.01em]
              text-[#0d4969]
              md:text-[21px]
              lg:text-[22px]
            "
          >
            Our work extends beyond projects. Through research,
            professional dialogue, publications, and knowledge
            sharing, we actively contribute to conversations
            shaping the future of cities, and the built environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}