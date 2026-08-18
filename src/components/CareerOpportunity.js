"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            ease: [0.22, 1, 0.36, 1],
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
            ease: [0.22, 1, 0.36, 1],
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
                  ease: [0.22, 1, 0.36, 1],
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
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-start
              justify-center
              overflow-y-auto
              bg-[#0d4969]/30
              px-4
              py-5
              backdrop-blur-sm
              sm:items-center
              sm:px-5
              sm:py-8
            "
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                my-auto
                w-full
                max-w-[620px]
                bg-white
                px-5
                py-7
                shadow-2xl
                sm:px-8
                sm:py-9
                md:px-10
                md:py-10
              "
            >
              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-[24px]
                  font-light
                  text-[#0d4969]
                  transition-transform
                  duration-300
                  hover:rotate-90
                  sm:right-5
                  sm:top-5
                "
              >
                ×
              </button>

              {/* HEADER */}
              <div className="mb-7 pr-9 sm:mb-8">
                <p
                  className="
                    mb-2
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    text-[#0d4969]/60
                    sm:text-[13px]
                  "
                >
                  Career Opportunity
                </p>

                <h2
                  className="
                    text-[27px]
                    font-normal
                    leading-tight
                    tracking-[-0.02em]
                    text-[#0d4969]
                    sm:text-[30px]
                    md:text-[34px]
                  "
                >
                  Let’s work together
                </h2>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-6
                    text-gray-500
                    sm:text-[15px]
                  "
                >
                  Tell us a little about yourself and your area of interest.
                  Our team will get in touch with you.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert("Application submitted successfully!");
                  setShowForm(false);
                }}
                className="space-y-5 sm:space-y-6"
              >
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-[12px]
                        tracking-wide
                        text-[#0d4969]
                      "
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="
                        w-full
                        border-b
                        border-gray-300
                        bg-transparent
                        px-0
                        py-2.5
                        text-[15px]
                        text-[#0d4969]
                        outline-none
                        placeholder:text-gray-400
                        focus:border-[#0d4969]
                        transition-colors
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-[12px]
                        tracking-wide
                        text-[#0d4969]
                      "
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@gmail.com"
                      className="
                        w-full
                        border-b
                        border-gray-300
                        bg-transparent
                        px-0
                        py-2.5
                        text-[15px]
                        text-[#0d4969]
                        outline-none
                        placeholder:text-gray-400
                        focus:border-[#0d4969]
                        transition-colors
                      "
                    />
                  </div>
                </div>

                {/* PHONE + AREA */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        text-[12px]
                        tracking-wide
                        text-[#0d4969]
                      "
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      className="
                        w-full
                        border-b
                        border-gray-300
                        bg-transparent
                        px-0
                        py-2.5
                        text-[15px]
                        text-[#0d4969]
                        outline-none
                        placeholder:text-gray-400
                        focus:border-[#0d4969]
                        transition-colors
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="discipline"
                      className="
                        mb-2
                        block
                        text-[12px]
                        tracking-wide
                        text-[#0d4969]
                      "
                    >
                      Area of Interest
                    </label>

                    <select
                      id="discipline"
                      name="discipline"
                      required
                      className="
                        w-full
                        border-b
                        border-gray-300
                        bg-transparent
                        px-0
                        py-2.5
                        text-[15px]
                        text-[#0d4969]
                        outline-none
                        focus:border-[#0d4969]
                      "
                    >
                      <option value="">Select</option>
                      <option value="architecture">Architecture</option>
                      <option value="landscape">
                        Landscape Architecture
                      </option>
                      <option value="urban-design">Urban Design</option>
                      <option value="planning">Planning</option>
                      <option value="interiors">Interiors</option>
                      <option value="sustainability">Sustainability</option>
                      <option value="research">Research</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                    "
                  >
                    Tell us about yourself
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Briefly tell us about your background and interests..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-gray-300
                      bg-transparent
                      px-0
                      py-2.5
                      text-[15px]
                      leading-6
                      text-[#0d4969]
                      outline-none
                      placeholder:text-gray-400
                      focus:border-[#0d4969]
                      transition-colors
                    "
                  />
                </div>

                {/* RESUME */}
                <div>
                  <label
                    htmlFor="resume"
                    className="
                      mb-2
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                    "
                  >
                    Resume / Portfolio
                  </label>

                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="
                      block
                      w-full
                      cursor-pointer
                      text-[12px]
                      text-gray-500
                      file:mr-3
                      file:rounded-full
                      file:border-0
                      file:bg-[#0d4969]
                      file:px-4
                      file:py-2
                      file:text-xs
                      file:text-white
                      file:cursor-pointer
                      sm:text-[14px]
                    "
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex justify-start pt-1 sm:justify-end">
                  <button
                    type="submit"
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-full
                      border
                      border-[#0d4969]
                      px-7
                      py-3
                      text-[14px]
                      text-[#0d4969]
                      transition-all
                      duration-500
                      hover:text-white
                      sm:w-auto
                      sm:text-[15px]
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

                    <span className="relative z-10">
                      Submit Application
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}