"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Sparkles, Layers, ShieldCheck, TreePine } from "lucide-react";

const heroSlides = [
  {
    title: "Urban Ecological Habitats",
    subtitle: "Landscape & Masterplanning",
    location: "United Arab Emirates",
    image: "/landscape1.webp",
    description: "Integrating native biodiversity and regenerative water infrastructure into dense urban realms.",
    link: "/projects/landscape",
  },
  {
    title: "Sustainable Architecture",
    subtitle: "Civic & Institutional",
    location: "Kerala, India",
    image: "/project1.webp",
    description: "Biophilic material systems engineered for tropical climate resilience and energy net-positivity.",
    link: "/projects/architecture",
  },
  {
    title: "Regional Master Planning",
    subtitle: "Urban Design & Infrastructure",
    location: "South Asia",
    image: "/project3.webp",
    description: "Holistic frameworks balancing rapid urbanization with delicate natural topography and water basins.",
    link: "/projects/planning-urban-design",
  },
];

const studioStats = [
  { value: "50+", label: "Commissioned Projects", icon: Layers },
  { value: "1.2M+", label: "Sq.Ft Sustainable Landscapes", icon: TreePine },
  { value: "100%", label: "Context-Responsive Design", icon: ShieldCheck },
  { value: "5", label: "Core Multidisciplinary Domains", icon: Sparkles },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#fafafa] pt-28 sm:pt-32 lg:pt-36">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30" />

      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 md:px-12 lg:px-16 pb-16 lg:pb-24">
        {/* TOP INTRO MANIFESTO */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0d4969]/15 bg-white px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#0d4969] shadow-sm">
              <Compass size={14} className="text-[#d97736]" />
              <span>Multidisciplinary Design Studio</span>
            </div>

            <h1 className="mt-5 text-4xl font-light tracking-tight text-[#0d4969] sm:text-6xl lg:text-7xl leading-[1.08]">
              Shaping <span className="font-normal text-[#0d4969]">resilient habitats</span> across earth, city & architecture.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              Konhabita bridges landscape ecology, urban planning, and architecture to build enduring, high-performing environments.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0d4969] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-[#d97736]"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/studio"
                className="inline-flex items-center gap-2 rounded-full border border-[#0d4969]/20 bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#0d4969] transition-all hover:border-[#0d4969]"
              >
                <span>Our Studio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FLAGSHIP SHOWCASE HERO CAROUSEL */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden rounded-3xl shadow-2xl">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-[7000ms] ease-out scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/90 via-[#072638]/35 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14 text-white">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
                      <span>{slide.subtitle}</span>
                      <span>•</span>
                      <span className="text-white/80">{slide.location}</span>
                    </div>

                    <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base font-light text-white/80 max-w-xl">
                      {slide.description}
                    </p>
                  </div>

                  <Link
                    href={slide.link}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0d4969]"
                  >
                    <span>View Discipline</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicator Controls */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-[#d97736]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STUDIO STATS ROW */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {studioStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#0d4969]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d97736]/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between text-[#0d4969]">
                  <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#0d4969]">
                    {stat.value}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d4969]/5 text-[#d97736] transition-colors group-hover:bg-[#d97736] group-hover:text-white">
                    <Icon size={18} />
                  </div>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
