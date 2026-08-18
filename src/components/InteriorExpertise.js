"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Sofa, Volume2, Sun, CheckCircle2, ShieldCheck, Plus, Minus } from "lucide-react";
import EnquiryCTA from "./EnquiryCTA";

const categories = [
  { name: "Landscape", link: "/expertise/landscape-expertise" },
  { name: "Planning + Urban Design", link: "/expertise/planning-expertise" },
  { name: "Architecture", link: "/expertise/architecture-expertise" },
  { name: "Interiors", link: "/expertise/interiors-expertise" },
  { name: "Sustainability", link: "/expertise/sustainability-expertise" },
];

const featuredPhotos = [
  {
    title: "Lumina Creative Atelier",
    category: "Biophilic Workplace",
    image: "/project12.webp",
    metric: "NRC 0.85 Acoustic Standard",
  },
  {
    title: "Minimalist Coastal Penthouse",
    category: "Natural Lime & Teak",
    image: "/project7.webp",
    metric: "100% Zero-VOC Indoor Air",
  },
  {
    title: "Ayurvedic Wellness Sanctuary",
    category: "Sensory Spatial Calm",
    image: "/project15.webp",
    metric: "Circadian Lighting Balance",
  },
];

const tabsData = [
  {
    id: "joinery",
    label: "Bespoke Biophilic Joinery",
    content:
      "We design custom solid teak, cane weave, and mass timber architectural millwork that softens contemporary interiors while aging gracefully with an organic patina.",
    stat: "FSC Certified Hardwoods",
  },
  {
    id: "acoustics",
    label: "Acoustic Engineering",
    content:
      "Integrating hidden perforated timber resonators, organic sheep wool baffles, and strategic sound diffusion channels to create speech-private, acoustically serene interiors.",
    stat: "NRC 0.85+ Sound Absorption",
  },
  {
    id: "circadian",
    label: "Circadian Lighting Design",
    content:
      "Concealed architectural light channels that shift dynamically in color temperature (2700K to 4000K) throughout the day, aligning indoor environments with natural circadian rhythms.",
    stat: "Dynamic 2700K - 4000K Tuning",
  },
];

const faqs = [
  {
    q: "How does Konhabita ensure healthy indoor air quality (IAQ) in interiors?",
    a: "We specify zero-VOC lime slake plasters, natural oil stains, breathable mineral coatings, and formaldehyde-free adhesives that eliminate toxic outgassing and buffer ambient humidity naturally.",
  },
  {
    q: "Do you fabricate custom furniture and lighting for interior projects?",
    a: "Yes. Our studio provides 1:10 and 1:1 detailed shop drawings and directly supervises master woodworkers and artisans for custom furniture, bespoke doors, and integrated lighting fixtures.",
  },
  {
    q: "How do you balance high-density commercial workspaces with acoustic calm?",
    a: "We segment floorplates into layered acoustic zones (active collaborative lounges vs quiet focus pods) using acoustic wool ceiling rafts and fluted wood partitions with hidden sound dampening cores.",
  },
];

export default function InteriorExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-white selection:bg-[#0d4969] selection:text-white pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= LEFT SIDE: STICKY MENU ================= */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
                <Sparkles size={13} />
                <span>Expertise Verticals</span>
              </div>

              <nav className="space-y-1 border-t border-[#0d4969]/15 pt-2">
                {categories.map((item) => {
                  const isActive = item.name === "Interiors";

                  return (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={`group flex items-center justify-between py-4 border-b border-[#0d4969]/10 transition-all ${
                        isActive ? "text-[#0d4969] font-medium" : "text-gray-400 hover:text-[#0d4969]"
                      }`}
                    >
                      <span className="text-lg sm:text-xl font-light tracking-tight transition-transform group-hover:translate-x-1">
                        {item.name}
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#d97736]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden lg:block rounded-2xl border border-[#0d4969]/15 bg-[#fafafa] p-6 space-y-4 shadow-sm">
                <p className="text-xs font-mono uppercase tracking-wider text-[#d97736]">
                  Interior Standards
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Indoor Air Quality</span>
                    <span className="font-mono font-medium text-[#0d4969]">100% Zero-VOC</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Acoustic Absorption</span>
                    <span className="font-mono font-medium text-[#0d4969]">NRC 0.85+</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Timber Chain of Custody</span>
                    <span className="font-mono font-medium text-[#0d4969]">FSC Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SEO CONTENT, PHOTOS & TABS ================= */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d4969]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0d4969]">
                <Sofa size={13} className="text-[#d97736]" />
                <span>Interior Architecture & Materiality</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
                Interior Architecture Defined by Tactility, Light & Acoustic Serenity
              </h1>

              <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                We craft interior environments that nurture the human senses. Our interior architecture practice views spaces as sanctuaries of daylight, acoustic calm, and authentic materiality.
              </p>

              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                From high-performance corporate creative ateliers and boutique hospitality suites to tranquil wellness retreats and private penthouses, 
                every interior is shaped with bespoke timber joinery, non-toxic breathable mineral finishes, and circadian lighting.
              </p>
            </div>

            {/* FEATURED COMMISSION PHOTOGRAPHY GRID */}
            <div className="space-y-4 border-t border-[#0d4969]/15 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-light text-[#0d4969]">
                  Featured Interior Architecture Commissions
                </h2>
                <Link
                  href="/projects/interiors"
                  className="group inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#d97736] hover:text-[#0d4969]"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredPhotos.map((photo, i) => (
                  <div
                    key={i}
                    className="group relative h-[260px] sm:h-[220px] lg:h-[260px] overflow-hidden rounded-2xl border border-[#0d4969]/15 shadow-sm"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/90 via-[#072638]/30 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <span className="text-[10px] font-mono text-[#d97736] uppercase tracking-wider">
                        {photo.category}
                      </span>
                      <p className="text-sm font-medium leading-snug">{photo.title}</p>
                      <p className="text-[10px] font-mono text-white/70">{photo.metric}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE TECHNICAL SIMULATION TABS */}
            <div className="rounded-3xl border border-[#0d4969]/15 bg-[#fafafa] p-6 sm:p-8 space-y-6">
              <div className="border-b border-[#0d4969]/10 pb-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
                  Material & Acoustic Lab
                </p>
                <h3 className="text-xl sm:text-2xl font-light text-[#0d4969] mt-1">
                  Interior Performance Methodologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tabsData.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#0d4969] text-white shadow-sm"
                        : "bg-white border border-[#0d4969]/15 text-gray-500 hover:text-[#0d4969]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-[#0d4969]/10 bg-white p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-medium text-[#0d4969]">
                    {tabsData[activeTab].label}
                  </h4>
                  <span className="rounded-full bg-[#0d4969]/10 px-3 py-1 text-xs font-mono text-[#0d4969]">
                    {tabsData[activeTab].stat}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                  {tabsData[activeTab].content}
                </p>
              </div>
            </div>

            {/* INTERACTIVE FAQ ACCORDION */}
            <div className="space-y-4 border-t border-[#0d4969]/15 pt-8">
              <h3 className="text-xl sm:text-2xl font-light text-[#0d4969]">
                Frequently Asked Interior Design Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#0d4969]/15 bg-[#fafafa] overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-medium text-[#0d4969] cursor-pointer hover:bg-white transition-colors"
                      >
                        <span>{faq.q}</span>
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d4969]/5 text-[#0d4969]">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#0d4969]/10 bg-white p-5 text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DIRECT PROJECT ENQUIRY CTA BANNER */}
            <div className="pt-6">
              <EnquiryCTA
                discipline="Interior Architecture"
                title="Design a Tactile, Biophilic Interior Architecture"
                subtitle="Collaborate directly with our interior architects on bespoke millwork, zero-VOC natural plasters, and acoustic calm."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}