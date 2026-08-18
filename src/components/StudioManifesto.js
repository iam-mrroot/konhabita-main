"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Leaf, Cpu, Mountain, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    number: "01",
    title: "Ecological Intelligence",
    tagline: "Regenerative Hydrology & Living Soils",
    description:
      "Every project begins with a deep analysis of indigenous regional ecosystems, sponge-city rainwater retention, and native biodiversity preservation.",
    stat: "1.2M+ sq.ft",
    statLabel: "Living Landscapes",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Computational Craft",
    tagline: "Parametric BIM & Passive Thermodynamics",
    description:
      "We deploy computational solar simulations, wind-tunnel CFD modeling, and precision BIM detailing to reduce operational carbon by up to 70%.",
    stat: "100%",
    statLabel: "Climate-Tuned",
  },
  {
    icon: Mountain,
    number: "03",
    title: "Vernacular Tectonics",
    tagline: "Authentic Materials & Enduring Permanence",
    description:
      "Crafted with locally sourced laterite stone, compressed earth blocks, and sustainably harvested mass timber that age gracefully over centuries.",
    stat: "50+",
    statLabel: "Delivered Commissions",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Long-Term Stewardship",
    tagline: "Lifecycle Performance & Community Vitality",
    description:
      "Our relationship extends beyond construction with longitudinal ecological audits, ensuring spaces thrive and evolve alongside their communities.",
    stat: "15+",
    statLabel: "Design Honors",
  },
];

export default function StudioManifesto() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 selection:bg-[#0d4969] selection:text-white">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#0d4969]/15 pb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
              <Sparkles size={13} />
              <span>03 • Studio Philosophy & Impact</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0d4969] leading-[1.15]">
              Architecture that listens to the land. Landscapes that sustain life.
            </h2>
          </div>

          <div className="space-y-4 lg:text-right">
            <p className="text-sm sm:text-base font-light text-gray-500 max-w-sm">
              We bridge environmental science and architectural permanence to design resilient built futures.
            </p>

            <Link
              href="/studio"
              className="group inline-flex items-center gap-2 rounded-full border border-[#0d4969] bg-[#0d4969] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#d97736] hover:border-[#d97736] hover:shadow-lg"
            >
              <span>Explore Our Studio & Team</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ================= 4 PILLARS INTERACTIVE GRID ================= */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.title}
                onMouseEnter={() => setActivePillar(idx)}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-3xl
                  border
                  p-8
                  transition-all
                  duration-500
                  cursor-pointer
                  ${
                    isActive
                      ? "border-[#d97736] bg-[#072638] text-white shadow-2xl scale-[1.02]"
                      : "border-[#0d4969]/15 bg-white/80 text-[#0d4969] hover:border-[#0d4969]/40 hover:bg-white shadow-sm"
                  }
                `}
              >
                {/* TOP ROW */}
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                        isActive
                          ? "bg-[#d97736] text-white"
                          : "bg-[#0d4969]/5 text-[#0d4969] group-hover:bg-[#0d4969] group-hover:text-white"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </div>

                    <span
                      className={`text-xs font-mono tracking-widest ${
                        isActive ? "text-[#d97736]" : "text-gray-400"
                      }`}
                    >
                      {pillar.number}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-xl sm:text-2xl font-light tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-[#0d4969]"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-xs font-mono uppercase tracking-wider ${
                      isActive ? "text-[#d97736]" : "text-[#d97736]"
                    }`}
                  >
                    {pillar.tagline}
                  </p>

                  <p
                    className={`mt-4 text-xs sm:text-[13px] font-light leading-relaxed transition-colors ${
                      isActive ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* BOTTOM STAT BADGE */}
                <div
                  className={`mt-8 border-t pt-5 transition-colors ${
                    isActive ? "border-white/15" : "border-[#0d4969]/10"
                  }`}
                >
                  <p
                    className={`text-2xl sm:text-3xl font-light tracking-tight ${
                      isActive ? "text-white" : "text-[#0d4969]"
                    }`}
                  >
                    {pillar.stat}
                  </p>
                  <p
                    className={`text-[11px] font-mono uppercase tracking-wider ${
                      isActive ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {pillar.statLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
