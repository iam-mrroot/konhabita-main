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

const workshopImages = [
  {
    image: "/workshop-1.jpg",
    alt: "Workshop discussion",
  },
  {
    image: "/workshop-2.jpg",
    alt: "Workshop event",
  },
  {
    image: "/workshop-3.jpg",
    alt: "Workshop participants",
  },
  {
    image: "/workshop-4.jpg",
    alt: "Workshop presentation",
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="relative min-h-screen w-full">

        <div className="mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 lg:grid-cols-[240px_1fr]">

          {/* =====================================================
              LEFT NAVIGATION
          ====================================================== */}
          <motion.aside
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              items-center
              px-6
              py-12
              lg:px-8
              lg:py-0
            "
          >
            <nav className="w-full max-w-[280px]">

              {categories.map((item, index) => {
                const active = item.name === "Workshops";

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
                        block
                        border-b
                        border-gray-300
                        py-3
                      "
                    >
                      <span
                        className={`
                          block
                          text-[20px]
                          leading-tight
                          font-normal
                          transition-all
                          duration-300
                          ${
                            active
                              ? "text-[#0d4969]"
                              : "text-gray-500 group-hover:text-[#0d4969]"
                          }
                          group-hover:translate-x-1
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


         {/* RIGHT IMAGE GALLERY */}
<div className="flex items-center px-4 pb-12 lg:px-0 lg:pb-0">
  <div className="w-full">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">

      {workshopImages.map((item, index) => (
        <motion.div
          key={item.image}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            aspect-[16/9]
            overflow-hidden
            bg-gray-100
          "
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/5
            "
          />
        </motion.div>
      ))}

    </div>

  </div>
</div>

        </div>
      </section>
    </main>
  );
}