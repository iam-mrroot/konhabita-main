"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Layers } from "lucide-react";
import EnquiryCTA from "./EnquiryCTA";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { categories, projectsList } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

// Number of project cards loaded eagerly (above the fold) instead of lazily.
const PRIORITY_IMAGE_COUNT = 2;

export default function Projects() {
  const pathname = usePathname();
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const menuRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = menuRef.current?.querySelectorAll("a");
      const cards = listRef.current?.querySelectorAll(".project-card");

      if (!links || !cards) return;

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(paragraphRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(links, {
        opacity: 0,
        x: -20,
      });

      const tl = gsap.timeline({
        delay: 0.1,
      });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          paragraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.2
        )
        .to(
          links,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.06,
          },
          0.3
        );

      // Slow, smooth cinematic scroll reveal for each 1-per-row project card
      cards.forEach((card) => {
        const img = card.querySelector("img");

        gsap.fromTo(
          card,
          {
            opacity: 0.15,
            y: 80,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
              toggleActions: "play reverse play reverse",
            },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1.0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: "bottom 15%",
                scrub: 0.6,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#fafafa] pt-28 sm:pt-32 lg:pt-36 pb-28 selection:bg-[#0d4969] selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* =========================================
            TOP HEADING
        ========================================== */}
        <div className="mb-10 sm:mb-14 lg:mb-16 border-b border-[#0d4969]/15 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
            <Sparkles size={13} />
            <span>Studio Works & Masterplans</span>
          </div>

          <h1
            ref={headingRef}
            className="
              text-4xl
              font-light
              leading-tight
              tracking-tight
              text-[#0d4969]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Projects
          </h1>

          <p
            ref={paragraphRef}
            className="
              mt-3
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-500
              sm:text-lg
            "
          >
            Explore our diverse portfolio across landscape architecture,
            planning, architecture, interiors and sustainability.
          </p>
        </div>

        {/* =========================================
            MAIN 2-COLUMN STRUCTURE:
            LEFT: FIXED/STICKY OPTIONS
            RIGHT: FULL-WIDTH 1-PER-ROW SCROLL FEED
        ========================================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* =========================================
              LEFT STICKY OPTIONS ASIDE
          ========================================== */}
          <aside className="w-full lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32 self-start space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736] hidden lg:block">
                Categories
              </p>

              {/* CATEGORY NAV LIST */}
              <div
                ref={menuRef}
                className="
                  -mx-5
                  overflow-x-auto
                  px-5
                  scrollbar-hide
                  sm:-mx-8
                  sm:px-8
                  lg:mx-0
                  lg:overflow-visible
                  lg:px-0
                "
              >
                <div className="flex w-max gap-3 lg:block lg:w-full">
                  {categories.map((item) => {
                    const active = pathname === item.link;

                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        className="
                          group
                          block
                          shrink-0
                          rounded-full
                          border
                          border-gray-200
                          px-5
                          py-2.5
                          transition-all
                          duration-300
                          lg:rounded-none
                          lg:border-x-0
                          lg:border-t-0
                          lg:px-0
                          lg:py-4
                        "
                      >
                        <span
                          className={`
                            flex
                            items-center
                            justify-between
                            gap-3
                            whitespace-nowrap
                            text-base
                            font-light
                            transition-all
                            duration-300
                            sm:text-lg
                            lg:text-2xl
                            ${
                              active
                                ? "text-[#0d4969] lg:font-medium pl-1"
                                : "text-gray-500 group-hover:text-[#0d4969] group-hover:pl-1"
                            }
                          `}
                        >
                          <span className="flex items-center gap-2">
                            {/* Active dot */}
                            {active && (
                              <span className="h-2 w-2 shrink-0 rounded-full bg-[#d97736]" />
                            )}
                            {item.name}
                          </span>

                          <span className="hidden lg:inline text-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#d97736]">
                            →
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Studio Info Card in Sticky Sidebar */}
              <div className="hidden lg:block rounded-2xl border border-[#0d4969]/15 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0d4969]">
                  <Layers size={14} className="text-[#d97736]" />
                  <span>TOTAL WORKS: {projectsList.length} PROJECTS</span>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed font-light">
                  Click any project card to inspect full architectural specifications and photographic briefs.
                </p>
              </div>
            </div>
          </aside>

          {/* =========================================
              RIGHT: 1-IMAGE-PER-ROW SCROLLING SHOWCASE
          ========================================== */}
          <div
            ref={listRef}
            className="w-full lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-12"
          >
            {projectsList.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={idx < PRIORITY_IMAGE_COUNT}
                onSelect={() => setSelectedProject(project)}
              />
            ))}

            {/* DIRECT PROJECT ENQUIRY CTA BANNER */}
            <div className="pt-6">
              <EnquiryCTA
                discipline="Integrated Architecture & Landscapes"
                title="Commission a Landmark Project with Konhabita"
                subtitle="Collaborate directly with our design directors across masterplanning, architecture, landscape ecology, and interior design."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE MODAL DIALOG ================= */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}