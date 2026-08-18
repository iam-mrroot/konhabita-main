"use client";

import { motion, AnimatePresence } from "framer-motion";
import { disciplineOptions } from "./disciplineOptions.data";

export default function InternshipApplicationForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#0d4969]/30
            px-3
            py-4
            backdrop-blur-sm
            sm:px-5
            sm:py-6
          "
          onClick={onClose}
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
              flex
              max-h-[94vh]
              w-full
              max-w-[620px]
              flex-col
              overflow-y-auto
              bg-white
              px-5
              py-6
              shadow-2xl
              sm:px-7
              sm:py-8
              md:px-10
              md:py-10
            "
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close application form"
              className="
                absolute
                right-3
                top-3
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
            <div className="mb-6 pr-9 sm:mb-8 sm:pr-10">
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
                Internship
              </p>

              <h2
                className="
                  text-[25px]
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
                  max-w-[480px]
                  text-[14px]
                  leading-5
                  text-gray-500
                  sm:text-[15px]
                  sm:leading-6
                "
              >
                Tell us a little about yourself and your area of
                interest. Our team will get in touch with you.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                alert("Application submitted successfully!");
                onClose();
              }}
              className="space-y-5 sm:space-y-6"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                      sm:mb-2
                      sm:text-[13px]
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
                      sm:py-3
                      sm:text-[16px]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                      sm:mb-2
                      sm:text-[13px]
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
                      sm:py-3
                      sm:text-[16px]
                    "
                  />
                </div>
              </div>

              {/* PHONE + AREA */}
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                      sm:mb-2
                      sm:text-[13px]
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
                      sm:py-3
                      sm:text-[16px]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="discipline"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      tracking-wide
                      text-[#0d4969]
                      sm:mb-2
                      sm:text-[13px]
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
                      sm:py-3
                      sm:text-[16px]
                    "
                  >
                    <option value="">Select</option>
                    {disciplineOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    tracking-wide
                    text-[#0d4969]
                    sm:mb-2
                    sm:text-[13px]
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
                    sm:py-3
                    sm:text-[16px]
                  "
                />
              </div>

              {/* RESUME */}
              <div>
                <label
                  htmlFor="resume"
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    tracking-wide
                    text-[#0d4969]
                    sm:mb-2
                    sm:text-[13px]
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
                    sm:text-[14px]
                    file:mr-3
                    file:rounded-full
                    file:border-0
                    file:bg-[#0d4969]
                    file:px-4
                    file:py-2
                    file:text-xs
                    file:text-white
                    file:cursor-pointer
                    sm:file:mr-4
                    sm:file:px-5
                    sm:file:text-sm
                  "
                />
              </div>

              {/* SUBMIT */}
              <div className="flex justify-stretch pt-1 sm:justify-end sm:pt-2">
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
                    px-6
                    py-3
                    text-[14px]
                    text-[#0d4969]
                    transition-all
                    duration-500
                    hover:text-white
                    sm:w-auto
                    sm:px-8
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
  );
}
