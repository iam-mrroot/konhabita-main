"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, MapPin, X, Maximize2, Calendar, Trophy } from "lucide-react";
import EnquiryCTA from "./EnquiryCTA";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "Landscape", link: "/projects/landscape", active: false },
  { name: "Planning + Urban Design", link: "/projects/planning-urban-design", active: false },
  { name: "Architecture", link: "/projects/architecture", active: false },
  { name: "Interiors", link: "/projects/interiors", active: false },
  { name: "Sustainability", link: "/projects/sustainability", active: false },
  { name: "Competition", link: "/projects/competition", active: true },
];

const projects = [
  {
    id: "c1",
    src: "/project8.webp",
    title: "Future Mobility Multimodal Hub",
    location: "International Competition",
    year: "2024",
    area: "65,000 sq.m",
    category: "Competition",
    award: "1st Prize Winner",
    description: "Winning conceptual entry proposing a hyper-connected multimodal terminal integrating high-speed rail with urban aerial gondolas and green public plazas.",
  },
  {
    id: "c2",
    src: "/project11.webp",
    title: "Civic Cultural Center of Peace",
    location: "International Design RFP",
    year: "2023",
    area: "28,000 sq.m",
    category: "Competition",
    award: "Finalist & Honorable Mention",
    description: "A monumental cultural amphitheater and peace pavilion sculpted with rammed-earth monoliths and reflective water gardens.",
  },
];

export default function Competition() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = listRef.current?.querySelectorAll(".project-card");
      if (!cards) return;

      cards.forEach((card) => {
        const img = card.querySelector("img");

        gsap.fromTo(
          card,
          {
            opacity: 0.15,
            y: 75,
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
      className="min-h-screen w-full bg-[#fafafa] pt-28 sm:pt-32 lg:pt-36 pb-28 text-[#0d4969] selection:bg-[#0d4969] selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-10 sm:mb-14 lg:mb-16 border-b border-[#0d4969]/15 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
            <Sparkles size={13} />
            <span>Design Competitions</span>
          </div>

          <h1 className="text-4xl font-light leading-tight tracking-tight text-[#0d4969] sm:text-5xl lg:text-6xl">
            Competition & Visionary Entries
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg font-light">
            Award-winning conceptual designs, international architecture competitions, and visionary landmark proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT FIXED OPTIONS */}
          <aside className="w-full lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32 self-start space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736] hidden lg:block">
                Select Discipline
              </p>

              <div className="-mx-5 overflow-x-auto px-5 scrollbar-hide sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
                <div className="flex w-max gap-3 lg:block lg:w-full">
                  {categories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="group block shrink-0 rounded-full border border-gray-200 px-5 py-2.5 transition-all duration-300 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:py-4"
                    >
                      <span
                        className={`flex items-center justify-between gap-3 whitespace-nowrap text-base font-light transition-all duration-300 sm:text-lg lg:text-2xl ${
                          item.active
                            ? "text-[#0d4969] lg:font-medium pl-1"
                            : "text-gray-500 group-hover:text-[#0d4969] group-hover:pl-1"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {item.active && <span className="h-2 w-2 shrink-0 rounded-full bg-[#d97736]" />}
                          {item.name}
                        </span>
                        <span className="hidden lg:inline text-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#d97736]">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div ref={listRef} className="w-full lg:col-span-8 xl:col-span-9 space-y-8 sm:space-y-10">
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
                className="project-card group relative w-full h-[270px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0d4969]/10 bg-slate-900 shadow-md transition-all duration-500 hover:shadow-2xl hover:border-[#d97736]/40 cursor-pointer"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/90 via-[#072638]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#d97736] px-3.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white shadow-md">
                    <Trophy size={11} />
                    <span>{project.award || project.category}</span>
                  </span>

                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1 text-[10px] sm:text-[11px] font-mono text-[#0d4969] backdrop-blur-md shadow-sm">
                    <Calendar size={11} className="text-[#d97736]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8 z-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="max-w-xl space-y-1.5">
                    <p className="text-[11px] font-mono tracking-widest text-[#d97736] uppercase flex items-center gap-1.5">
                      <MapPin size={12} />
                      <span>{project.location} • {project.area}</span>
                    </p>

                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] font-light text-white/80 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4969] group-hover:border-white group-hover:scale-105">
                      <span>View Brief</span>
                      <Maximize2 size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {/* DIRECT PROJECT ENQUIRY CTA BANNER */}
            <div className="pt-6">
              <EnquiryCTA
                discipline="International Competition Design"
                title="Collaborate on Architectural Competitions & Landmark RFPs"
                subtitle="Partner with our research-backed computational design team for international architectural competitions and government masterplans."
              />
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl text-[#0d4969]">
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0d4969] shadow-md hover:bg-[#0d4969] hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src={selectedProject.src}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-[#d97736] px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                  {selectedProject.award || selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light mt-2">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-white/80 mt-1">{selectedProject.location} • {selectedProject.area}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#d97736]">Project Overview</h4>
              <p className="text-sm font-light leading-relaxed text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}