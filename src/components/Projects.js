"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ArrowRight, MapPin, Maximize2, Sparkles, Calendar, Layers } from "lucide-react";
import EnquiryCTA from "./EnquiryCTA";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "Landscape", link: "/projects/landscape" },
  { name: "Planning + Urban Design", link: "/projects/planning-urban-design" },
  { name: "Architecture", link: "/projects/architecture" },
  { name: "Interiors", link: "/projects/interiors" },
  { name: "Sustainability", link: "/projects/sustainability" },
  { name: "Competition", link: "/projects/competition" },
];

const projectsList = [
  {
    id: "p1",
    src: "/project1.webp",
    title: "Al Wasl Botanical Parkland",
    location: "Dubai, UAE",
    year: "2024",
    area: "120,000 sq.m",
    category: "Landscape",
    description: "An urban ecological oasis integrating arid-climate botanical gardens with regenerative stormwater retention lakes and shaded microclimatic walks.",
    highlights: ["Sponge-City Hydrology", "Native Flora Conservation", "Smart Drip Irrigation"],
  },
  {
    id: "p2",
    src: "/project2.webp",
    title: "Eco-Tech Innovation Campus",
    location: "Bengaluru, India",
    year: "2024",
    area: "35,000 sq.m",
    category: "Architecture",
    description: "A net-zero workplace campus featuring exposed mass timber framing, passive courtyard ventilation, and solar photovoltaic louvers.",
    highlights: ["LEED Platinum Target", "Mass Timber Hybrid", "Circadian Courtyards"],
  },
  {
    id: "p3",
    src: "/project3.webp",
    title: "South Bay Regional Masterplan",
    location: "Doha, Qatar",
    year: "2023",
    area: "350 Hectares",
    category: "Planning + Urban Design",
    description: "A comprehensive territorial masterplan creating high-density transit-oriented nodes interwoven with resilient tidal buffer canals.",
    highlights: ["Multimodal Transit Spines", "Tidal Surge Buffer", "15-Minute Neighborhoods"],
  },
  {
    id: "p4",
    src: "/project4.webp",
    title: "Coastline Climate & Marine Pavilion",
    location: "Kovalam, Kerala",
    year: "2024",
    area: "4,200 sq.m",
    category: "Sustainability",
    description: "A biomimetic coastal pavilion constructed from compressed earth blocks and recycled marine composites, powered entirely by ocean breezes and solar.",
    highlights: ["Zero Operational Carbon", "Locally Sourced Earth", "Natural Cross-Breeze"],
  },
  {
    id: "p5",
    src: "/project5.webp",
    title: "Creekside Mangrove Wetland Sanctuary",
    location: "Abu Dhabi, UAE",
    year: "2023",
    area: "85,000 sq.m",
    category: "Landscape",
    description: "Restoration of coastal mangrove wetlands and elevated public boardwalks for ecological birdwatching and marine habitat preservation.",
    highlights: ["Mangrove Reforestation", "Elevated Eco-Boardwalks", "Tidal Flow Optimization"],
  },
  {
    id: "p6",
    src: "/project6.webp",
    title: "Verdant Terrace Residences",
    location: "Kochi, Kerala",
    year: "2024",
    area: "14,500 sq.m",
    category: "Architecture",
    description: "Stepped residential terraces draped in indigenous tropical hanging gardens, creating vertical microclimatic cooling and private sky courtyards.",
    highlights: ["Vertical Biophilic Facades", "Private Sky Gardens", "Passive Thermal Mass"],
  },
  {
    id: "p7",
    src: "/project7.webp",
    title: "Lumina Creative Atelier & Studios",
    location: "Mumbai, India",
    year: "2023",
    area: "2,200 sq.m",
    category: "Interiors",
    description: "A serene, light-sculpted workspace combining artisanal teak partitions, lime-plaster surfaces, and custom acoustic ceiling rafts.",
    highlights: ["Artisanal Lime Plaster", "Acoustic Craft", "Indirect Circadian Lighting"],
  },
  {
    id: "p8",
    src: "/project8.webp",
    title: "Future Mobility Multimodal Hub",
    location: "International Competition",
    year: "2024",
    area: "65,000 sq.m",
    category: "Competition",
    description: "Winning conceptual entry proposing a hyper-connected multimodal terminal integrating high-speed rail with urban aerial gondolas and green public plazas.",
    highlights: ["1st Prize Winner", "Parametric Roof Canopy", "Renewable Kinetic Power"],
  },
  {
    id: "p9",
    src: "/project9.webp",
    title: "Civic Library & Cultural Archway",
    location: "Thiruvananthapuram, India",
    year: "2023",
    area: "12,000 sq.m",
    category: "Architecture",
    description: "A public library and cultural center built with porous laterite stone arches and natural daylit reading galleries.",
    highlights: ["Vernacular Laterite Arches", "Daylight Harvesters", "Community Plazas"],
  },
  {
    id: "p10",
    src: "/project10.webp",
    title: "Tropical Water Courtyard Villa",
    location: "Alappuzha, Kerala",
    year: "2024",
    area: "850 sq.m",
    category: "Architecture",
    description: "A private contemporary residence organized around a central reflective water court with operable timber jali screens.",
    highlights: ["Natural Water Cooling", "Timber Jali Craft", "Rainwater Reflection Basin"],
  },
];

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
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
                className="
                  project-card
                  group
                  relative
                  w-full
                  h-[270px]
                  sm:h-[320px]
                  lg:h-[380px]
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-3xl
                  border
                  border-[#0d4969]/10
                  bg-slate-900
                  shadow-md
                  transition-all
                  duration-500
                  hover:shadow-2xl
                  hover:border-[#d97736]/40
                  cursor-pointer
                "
              >
                {/* FULL SIZE BACKGROUND IMAGE */}
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  priority={idx < 2}
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* CINEMATIC GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/90 via-[#072638]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                {/* TOP META BADGES */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="rounded-full bg-[#d97736] px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider text-white shadow-md">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-mono text-[#0d4969] backdrop-blur-md shadow-sm">
                    <Calendar size={12} className="text-[#d97736]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* BOTTOM PROJECT INFORMATION */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-7
                    lg:p-8
                    z-10
                    text-white
                    flex
                    flex-col
                    md:flex-row
                    md:items-end
                    justify-between
                    gap-4
                  "
                >
                  <div className="max-w-xl space-y-1.5">
                    <p className="text-[11px] font-mono tracking-widest text-[#d97736] uppercase flex items-center gap-1.5">
                      <MapPin size={12} />
                      <span>{project.location} • {project.area}</span>
                    </p>

                    <h2
                      className="
                        text-xl
                        sm:text-3xl
                        lg:text-4xl
                        font-light
                        tracking-tight
                        text-white
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] font-light text-white/80 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* ACTION CTA BUTTON */}
                  <div className="shrink-0">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/30
                        bg-white/10
                        px-6
                        py-3
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:bg-white
                        group-hover:text-[#0d4969]
                        group-hover:border-white
                        group-hover:scale-105
                      "
                    >
                      <span>View Project Brief</span>
                      <Maximize2 size={13} />
                    </span>
                  </div>
                </div>
              </article>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl text-[#0d4969]">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0d4969] shadow-md hover:bg-[#0d4969] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* MODAL HERO IMAGE */}
            <div className="relative h-[320px] sm:h-[420px] w-full bg-slate-900">
              <Image
                src={selectedProject.src}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-[#d97736] px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white">
                  {selectedProject.category}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-light">{selectedProject.title}</h2>
                <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1.5 mt-1 font-mono">
                  <MapPin size={14} className="text-[#d97736]" />
                  {selectedProject.location} • {selectedProject.year} • {selectedProject.area}
                </p>
              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 sm:p-10 space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
                  Architectural Narrative & Scope
                </h3>
                <p className="mt-2 text-base font-light leading-relaxed text-gray-700">
                  {selectedProject.description}
                </p>
              </div>

              {/* TECHNICAL HIGHLIGHTS */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
                  Key Technical Features
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#0d4969]/5 border border-[#0d4969]/10 px-4 py-1.5 text-xs font-light text-[#0d4969]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* MODAL ACTIONS */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0d4969]/10 pt-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#0d4969] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#d97736] transition-colors shadow-sm"
                >
                  Consult Studio for Similar Project
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs uppercase tracking-wider text-gray-500 hover:text-[#0d4969]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}