"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Podcasts",
    link: "/news/podcasts",
  },
  {
    name: "Workshops",
    link: "/news/workshops",
  },
  {
    name: "Monthly Events",
    link: "/news/monthly-events",
  },
];

const events = [
  {
    image: "/monthly-1.jpg",
    alt: "Monthly event activity",
  },
  {
    image: "/monthly-2.jpg",
    alt: "Outdoor team activity",
  },
  {
    image: "/monthly-3.jpg",
    alt: "Group outdoor event",
  },
  {
    image: "/monthly-4.jpg",
    alt: "Team activity",
  },
  {
    image: "/monthly-5.jpg",
    alt: "Indoor team event",
  },
  {
    image: "/monthly-6.jpg",
    alt: "Group activity",
  },
];

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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:col-span-2
                flex
                items-start
                lg:pt-44
              "
            >
              <nav className="w-full max-w-[230px]">
                {categories.map((item, index) => {
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
                        ease: [0.22, 1, 0.36, 1],
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
                        {/* ACTIVE INDICATOR */}
                        
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

    {/* COLUMN 1 */}
    <div className="flex flex-col gap-2.5">
      {/* Top - Short */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[242px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-1.jpg"
          alt="Monthly event"
          fill
          sizes="(max-width: 768px) 100vw, 20vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>

      {/* Bottom - Tall */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[307px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-4.jpg"
          alt="Monthly event"
          fill
          sizes="(max-width: 768px) 100vw, 20vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>
    </div>


    {/* COLUMN 2 */}
    <div className="flex flex-col gap-2.5">
      {/* Top - Tall */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[307px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-5.jpg"
          alt="Monthly event"
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>

      {/* Bottom - Short */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[242px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-6.jpg"
          alt="Monthly event"
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>
    </div>


    {/* COLUMN 3 */}
    <div className="flex flex-col gap-2.5">
      {/* Top - Short / Wide */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[242px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-3.jpg"
          alt="Monthly outdoor event"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>

      {/* Bottom - Tall / Wide */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          h-[307px]
          overflow-hidden
          group
          bg-gray-100
        "
      >
        <Image
          src="/monthly-2.jpg"
          alt="Monthly outdoor event"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </motion.div>
    </div>

  </div>
</div>
</div>
        </div>
      </div>
    </section>
  );
}