"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, Compass, Globe2, CheckCircle2, ShieldCheck, Plus, Minus } from "lucide-react";
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
    title: "Bengaluru Smart City Masterplan",
    category: "Transit-Oriented Development",
    image: "/project1.webp",
    metric: "15-Minute Walkable Grid",
  },
  {
    title: "Kochi Marine Promenade Corridor",
    category: "Waterfront Urban Regeneration",
    image: "/project4.webp",
    metric: "3.2km Protected Canal Front",
  },
  {
    title: "Western Ghats Ecological Masterplan",
    category: "Regional Environmental Planning",
    image: "/project2.webp",
    metric: "5,000+ Hectares Protected",
  },
];

const tabsData = [
  {
    id: "gis",
    label: "GIS Spatial Analytics",
    content:
      "We utilize high-resolution multi-layer GIS terrain, hydrological runoff, and demographic forecasting to identify optimum zoning corridors that preserve ecologically sensitive recharge zones.",
    stat: "Multi-Layer GIS Suitability",
  },
  {
    id: "tod",
    label: "Transit-Oriented Design (TOD)",
    content:
      "Pedestrian-first street sections, micro-mobility cycling lanes, and integrated multimodal transit stations engineered to decrease vehicular trip generation by over 35%.",
    stat: "-35% Automobile Dependency",
  },
  {
    id: "codes",
    label: "Form-Based Urban Codes",
    content:
      "Form-based design regulations, active street-frontage mandates, and solar envelope controls ensure cohesive architectural character across multi-phase 20-year developments.",
    stat: "20-Year Development Durability",
  },
];

const faqs = [
  {
    q: "How does Konhabita balance commercial density with open green space in masterplans?",
    a: "We deploy compact transit-oriented cluster zoning that concentrates allowable FAR around transit hubs, freeing up 40–50% of the remaining site for interconnected sponge parks, public plazas, and tree corridors.",
  },
  {
    q: "Do you assist municipalities and developers with statutory masterplan approvals?",
    a: "Yes. Our urban planning deliverables include comprehensive statutory documentation, environmental impact assessments (EIA), traffic impact analyses, and form-based regulatory codes for urban local bodies.",
  },
  {
    q: "How are climate resilience and flood management integrated into urban planning?",
    a: "We map historical 100-year flood levels and shape topography into natural retention basins and continuous green fingers that safely absorb monsoon deluges while providing year-round public parkland.",
  },
];

export default function PlanningExpertise() {
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
                  const isActive = item.name === "Planning + Urban Design";

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
                  Planning Scale & Impact
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Masterplanned Area</span>
                    <span className="font-mono font-medium text-[#0d4969]">5,000+ Hectares</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Walkability Standard</span>
                    <span className="font-mono font-medium text-[#0d4969]">15-Minute City</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Clients</span>
                    <span className="font-mono font-medium text-[#0d4969]">Municipalities & Devs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SEO CONTENT, PHOTOS & TABS ================= */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d4969]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0d4969]">
                <Globe2 size={13} className="text-[#d97736]" />
                <span>Urban Systems & Territorial Planning</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
                Urban Planning & Master Design for Sustainable Cities
              </h1>

              <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                We craft visionary urban frameworks that balance economic vitality, ecological preservation, and human-scale community life.
              </p>

              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                From regional development masterplans and transit-oriented hubs to revitalized heritage precincts and eco-industrial corridors, 
                our urban planning practice integrates demographic forecasting, microclimatic modeling, and participatory stakeholder governance.
              </p>
            </div>

            {/* FEATURED COMMISSION PHOTOGRAPHY GRID */}
            <div className="space-y-4 border-t border-[#0d4969]/15 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-light text-[#0d4969]">
                  Featured Urban & Masterplan Commissions
                </h2>
                <Link
                  href="/projects/planning-urban-design"
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
                  Spatial Analytics Lab
                </p>
                <h3 className="text-xl sm:text-2xl font-light text-[#0d4969] mt-1">
                  Territorial Planning Frameworks
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
                Frequently Asked Planning Questions
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
                discipline="Urban Planning & Master Design"
                title="Initiate an Urban Planning & Masterplan Study"
                subtitle="Collaborate directly with our urban planners on transit-oriented developments, territorial zoning, and resilient city frameworks."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}