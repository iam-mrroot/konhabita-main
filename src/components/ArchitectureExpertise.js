"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Layers, Compass, CheckCircle2, ShieldCheck, Plus, Minus } from "lucide-react";
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
    title: "Cliffside Laterite Villa",
    category: "Tropical Modernism",
    image: "/project9.webp",
    metric: "Natural Microclimate Cooling",
  },
  {
    title: "Wayanad Mass Timber Pavilion",
    category: "Mass Timber Glulam",
    image: "/project2.webp",
    metric: "Carbon Sequestering Structure",
  },
  {
    title: "Kochi Marine Civic Center",
    category: "Civic Architecture",
    image: "/project4.webp",
    metric: "LOD 350 BIM Coordination",
  },
];

const tabsData = [
  {
    id: "cfd",
    label: "Thermodynamic CFD",
    content:
      "Every building envelope is tested using wind-tunnel CFD simulations and computational solar path calculations. This informs window overhangs, central courtyards, and thermal stack chimneys that drop mechanical HVAC runtime by 40%.",
    stat: "-40% Annual HVAC Load",
  },
  {
    id: "tectonics",
    label: "Low-Carbon Tectonics",
    content:
      "We champion regionally quarried laterite stone, compressed stabilized earth blocks (CSEB), and certified mass timber glulam, delivering enduring structural performance with minimal embodied emissions.",
    stat: "-65% Embodied Carbon",
  },
  {
    id: "bim",
    label: "BIM LOD 350 Lifecycle",
    content:
      "Full-stack 3D BIM coordination ensures seamless clash detection between complex architectural geometries, structural frameworks, and MEP engineering systems prior to site breaking.",
    stat: "Zero Field MEP Clashes",
  },
];

const faqs = [
  {
    q: "How does Konhabita integrate passive cooling in humid tropical climates?",
    a: "We deploy deep architectural eaves, operable timber jali screens, double-height central lightwells that induce stack ventilation, and high-thermal-mass earth walls that buffer peak midday heat.",
  },
  {
    q: "What architectural phases do you handle from concept to handover?",
    a: "We lead full-lifecycle architectural services: Feasibility & Site Studies, Concept Design, Schematic Development, Statutory Municipal Approvals, Detailed BIM Construction Documentation, and Comprehensive Site Supervision.",
  },
  {
    q: "Can vernacular materials like laterite and compressed earth meet modern structural codes?",
    a: "Yes. We engineer composite structural systems combining reinforced concrete frames with precision-cut laterite masonry and stabilized earth, tested to exceed regional seismic and load-bearing statutory codes.",
  },
];

export default function ArchitectureExpertise() {
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
                  const isActive = item.name === "Architecture";

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
                  Architectural Precision
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Delivered Projects</span>
                    <span className="font-mono font-medium text-[#0d4969]">50+ Commissions</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Passive Solar Tuning</span>
                    <span className="font-mono font-medium text-[#0d4969]">100% Climate-Tuned</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">BIM Standards</span>
                    <span className="font-mono font-medium text-[#0d4969]">LOD 350 / 400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SEO CONTENT, PHOTOS & TABS ================= */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d4969]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0d4969]">
                <Building2 size={13} className="text-[#d97736]" />
                <span>Architecture & Spatial Design</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
                Architectural Design Grounded in Climate, Materiality & Craft
              </h1>

              <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                Our architectural practice creates buildings that are profoundly connected to their environmental context. 
                We combine structural honesty, passive thermodynamics, and tectonic beauty to sculpt enduring spaces.
              </p>

              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                From cultural institutes and innovative tech headquarters to sustainable eco-resorts and climate-responsive residences, 
                our designs embrace natural cross-ventilation, daylighting optimization, and low-embodied-carbon regional materials.
              </p>
            </div>

            {/* FEATURED COMMISSION PHOTOGRAPHY GRID */}
            <div className="space-y-4 border-t border-[#0d4969]/15 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-light text-[#0d4969]">
                  Featured Architecture Commissions
                </h2>
                <Link
                  href="/projects/architecture"
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
                  Building Physics Lab
                </p>
                <h3 className="text-xl sm:text-2xl font-light text-[#0d4969] mt-1">
                  Computational Architecture Methodologies
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
                Frequently Asked Architectural Questions
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
                discipline="Architectural Design"
                title="Commission a Bespoke Architectural Project"
                subtitle="Collaborate directly with our architects on climate-responsive villas, cultural landmarks, and commercial headquarters."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}