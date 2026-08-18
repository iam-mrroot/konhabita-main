"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Leaf, TreePine, ShieldCheck, CheckCircle2, ChevronDown, Plus, Minus, Layers } from "lucide-react";
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
    title: "Al-Barari Ecological Corridor",
    category: "Sponge City Hydrology",
    image: "/project1.webp",
    metric: "100% Runoff Infiltrated",
  },
  {
    title: "Bio-Retention Research Park",
    category: "Native Botanical Canopy",
    image: "/project7.webp",
    metric: "45+ Native Flora Species",
  },
  {
    title: "Wayanad Valley Eco-Lodge Terraces",
    category: "Living Terraces & Agroforestry",
    image: "/project2.webp",
    metric: "-4°C Microclimate Drop",
  },
];

const tabsData = [
  {
    id: "hydrology",
    label: "Hydrological Engineering",
    content:
      "Our hydrological modeling calculates 100-year storm event curves, integrating surface bioswales, retention reservoirs, and permeable pavements that eliminate urban flash flooding and replenish ground aquifers.",
    stat: "100% Stormwater Infiltration",
  },
  {
    id: "biodiversity",
    label: "Endemic Planting Palette",
    content:
      "We source indigenous species from local nurseries to establish self-sustaining plant communities that support native pollinators, restore degraded soil microbiomes, and eliminate chemical fertilizers.",
    stat: "Zero Synthetic Pesticides",
  },
  {
    id: "microclimate",
    label: "Microclimate Cooling",
    content:
      "Strategic tree canopies, prevailing wind channels, and evaporative water bodies combine to reduce surface heat island temperatures by up to 5°C in dense tropical and arid urban environments.",
    stat: "3°C - 5°C Ambient Drop",
  },
];

const faqs = [
  {
    q: "How does sponge city landscape architecture reduce civil infrastructure costs?",
    a: "By replacing conventional deep underground concrete storm sewers with decentralized bioswales, rain gardens, and retention wetlands, we reduce civil excavation and pipe costs by 25–35% while creating attractive above-ground public amenities.",
  },
  {
    q: "What is Konhabita's policy on native species and plant sourcing?",
    a: "We mandate 100% regionally endemic or adapted non-invasive species suited to local rainfall cycles. This guarantees drought tolerance, minimal irrigation overhead, and genuine ecological value for native fauna.",
  },
  {
    q: "How are landscape projects coordinated with architectural and civil engineering teams?",
    a: "All landscape assets are authored in 3D BIM (LOD 300/350) with integrated digital terrain grading models, allowing direct clash detection with sub-surface MEP utilities and structural foundations.",
  },
];

export default function LandscapeExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-white selection:bg-[#0d4969] selection:text-white pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= LEFT SIDE: STICKY MENU & STATS ================= */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
                <Sparkles size={13} />
                <span>Expertise Verticals</span>
              </div>

              <nav className="space-y-1 border-t border-[#0d4969]/15 pt-2">
                {categories.map((item) => {
                  const isActive = item.name === "Landscape";

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
                  Ecological Metrics
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Living Landscapes</span>
                    <span className="font-mono font-medium text-[#0d4969]">1.2M+ sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Native Species Index</span>
                    <span className="font-mono font-medium text-[#0d4969]">100% Flora</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Stormwater Infiltration</span>
                    <span className="font-mono font-medium text-[#0d4969]">Zero Runoff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SEO CONTENT, PHOTOS & TABS ================= */}
          <div className="lg:col-span-8 space-y-12">
            {/* HERO TITLE & INTRO */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d4969]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0d4969]">
                <Leaf size={13} className="text-[#d97736]" />
                <span>Ecological Design Discipline</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
                Landscape Architecture & Living Ecological Systems
              </h1>

              <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                At Konhabita, we treat landscapes as the vital living tissue of resilient communities. 
                We engineer regenerative outdoor environments that deepen the bond between people and nature while elevating the built realm.
              </p>

              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                Our practice weaves together hydrological engineering, climate-smart plant selection, and visceral sensory design. 
                From civic waterfront promenades and sponge parks to research campuses and secluded private sanctuaries, 
                every living landscape is calibrated to thrive across generations with minimal resource inputs.
              </p>
            </div>

            {/* FEATURED COMMISSION PHOTOGRAPHY GRID */}
            <div className="space-y-4 border-t border-[#0d4969]/15 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-light text-[#0d4969]">
                  Featured Landscape Commissions
                </h2>
                <Link
                  href="/projects/landscape"
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
                  Interactive Methodology
                </p>
                <h3 className="text-xl sm:text-2xl font-light text-[#0d4969] mt-1">
                  Explore Ecological Simulation Systems
                </h3>
              </div>

              {/* TAB BUTTONS */}
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

              {/* TAB CONTENT CARD */}
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
                Frequently Asked Technical Questions
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
                discipline="Landscape Architecture"
                title="Commission a Landscape or Urban Ecology Masterplan"
                subtitle="Collaborate directly with our landscape architects on sponge city hydrology, civic parks, and botanical masterplans."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}