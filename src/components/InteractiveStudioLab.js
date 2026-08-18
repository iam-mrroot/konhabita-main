"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MoveHorizontal, ArrowRight, Sun, Moon, Layers, Leaf, Thermometer, Volume2 } from "lucide-react";

const landscapeMaterials = [
  {
    id: "laterite",
    name: "Quarried Laterite Stone",
    origin: "Regional Kerala Quarries",
    carbonMetric: "-65% vs Concrete",
    performanceMetric: "9.2h Thermal Inertia",
    application: "Load-bearing Arches & Plinths",
    color: "#a45a3c",
    previewImage: "/project9.webp",
  },
  {
    id: "earth",
    name: "Compressed Earth Blocks",
    origin: "On-Site Excavated Soil",
    carbonMetric: "-82% vs Brick",
    performanceMetric: "11.4h Passive Cooling",
    application: "Climate-Responsive Bio-Walls",
    color: "#c28d5d",
    previewImage: "/project4.webp",
  },
  {
    id: "timber",
    name: "Mass Timber Glulam",
    origin: "Certified Agro-Forestry",
    carbonMetric: "Carbon Sequestering",
    performanceMetric: "High Tensile Elasticity",
    application: "Long-Span Roof Structures",
    color: "#8c6239",
    previewImage: "/project2.webp",
  },
  {
    id: "sponge",
    name: "Porous Bio-Pavement",
    origin: "Recycled Mineral Aggregate",
    carbonMetric: "-45% Runoff Volume",
    performanceMetric: "Water Permeable",
    application: "Civic Plazas & Walkways",
    color: "#6b7c85",
    previewImage: "/project1.webp",
  },
];

const interiorMaterials = [
  {
    id: "lime",
    name: "Artisanal Lime Plaster",
    origin: "Natural Mineral Slake",
    carbonMetric: "100% Zero-VOC Formula",
    performanceMetric: "Humidity Buffering",
    application: "Seamless Living Walls & Ceilings",
    color: "#d9d2c9",
    previewImage: "/project7.webp",
  },
  {
    id: "teak",
    name: "Fluted Solid Teak",
    origin: "Sustainably Harvested Timber",
    carbonMetric: "Carbon Negative",
    performanceMetric: "Tactile Biophilic Warmth",
    application: "Custom Millwork & Jali Screens",
    color: "#96613d",
    previewImage: "/project12.webp",
  },
  {
    id: "cement",
    name: "Monolithic Micro-Cement",
    origin: "Ultra-Fine Mineral Binder",
    carbonMetric: "Zero Waste Application",
    performanceMetric: "Crack-Resistant & Cool",
    application: "Continuous Flooring & Wet Areas",
    color: "#7e878c",
    previewImage: "/project15.webp",
  },
  {
    id: "acoustic",
    name: "Natural Acoustic Felt",
    origin: "Recycled Organic Fibers",
    carbonMetric: "100% Recyclable",
    performanceMetric: "NRC 0.85 Sound Calm",
    application: "Ceiling Rafts & Quiet Pods",
    color: "#52595d",
    previewImage: "/project16.webp",
  },
];

export default function InteractiveStudioLab() {
  const [activeVertical, setActiveVertical] = useState("interiors"); // 'interiors' or 'architecture'
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [timeMode, setTimeMode] = useState("day");
  
  const currentMaterials = activeVertical === "interiors" ? interiorMaterials : landscapeMaterials;
  const [selectedMaterial, setSelectedMaterial] = useState(interiorMaterials[0]);
  const containerRef = useRef(null);

  // Sync selected material when vertical changes
  const switchVertical = (vertical) => {
    setActiveVertical(vertical);
    if (vertical === "interiors") {
      setSelectedMaterial(interiorMaterials[0]);
    } else {
      setSelectedMaterial(landscapeMaterials[0]);
    }
  };

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 sm:py-24 selection:bg-[#0d4969] selection:text-white">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#0d4969]/15 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
              <Sparkles size={13} />
              <span>04 • Design & Interiors Lab</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0d4969] leading-tight">
              Crafting Space from Concept to Reality
            </h2>

            <p className="text-sm sm:text-base font-light text-gray-500">
              Drag the lens to compare raw structural frameworks against bespoke, tactile interior architecture.
            </p>
          </div>

          {/* VERTICAL DISCIPLINE SWITCHER */}
          <div className="flex items-center gap-2 self-start lg:self-end rounded-full border border-[#0d4969]/15 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => switchVertical("interiors")}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                activeVertical === "interiors"
                  ? "bg-[#0d4969] text-white shadow-sm"
                  : "text-gray-500 hover:text-[#0d4969]"
              }`}
            >
              Interior Architecture
            </button>

            <button
              type="button"
              onClick={() => switchVertical("architecture")}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                activeVertical === "architecture"
                  ? "bg-[#0d4969] text-white shadow-sm"
                  : "text-gray-500 hover:text-[#0d4969]"
              }`}
            >
              Architecture & Landscapes
            </button>
          </div>
        </div>

        {/* ================= BEFORE / AFTER SLIDER ================= */}
        <div className="mt-10">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="
              group
              relative
              h-[360px]
              sm:h-[460px]
              lg:h-[520px]
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-[#0d4969]/15
              bg-slate-900
              shadow-2xl
              cursor-ew-resize
              select-none
            "
          >
            {/* LAYER A (BASE): RAW STRUCTURAL SHELL & DAYLIGHT GRID */}
            <div className="absolute inset-0">
              <Image
                src={selectedMaterial.previewImage}
                alt="Raw Structural Shell"
                fill
                className="object-cover grayscale contrast-150 brightness-90"
              />
              <div className="absolute inset-0 bg-[#072638]/70 mix-blend-multiply" />
              <div className="absolute inset-0 blueprint-grid opacity-35" />

              <div className="absolute top-6 left-6 z-10 space-y-1">
                <span className="rounded-full bg-[#0d4969] px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white">
                  Stage 01 • Structural Framework & Lighting Grid
                </span>
                <p className="text-xs font-mono text-cyan-300">
                  {activeVertical === "interiors" ? "Acoustic Reflection & Daylighting Matrix" : "Parametric Solar & Catchment Analysis"}
                </p>
              </div>
            </div>

            {/* LAYER B (OVERLAY): CRAFTED FINISHED SPACE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src={selectedMaterial.previewImage}
                alt="Finished Built Space"
                fill
                className="object-cover brightness-100"
              />

              <div className="absolute top-6 left-6 z-10 space-y-1">
                <span className="rounded-full bg-[#d97736] px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white shadow-md">
                  Stage 02 • Crafted Built Reality
                </span>
                <p className="text-xs font-mono text-white/90 drop-shadow">
                  {activeVertical === "interiors" ? "Tactile Joinery, Custom Lighting & Quiet Acoustics" : "Native Bio-Canopy & Mass Timber Tectonics"}
                </p>
              </div>
            </div>

            {/* DRAGGABLE DIVIDER LINE & HANDLE */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#0d4969] text-white shadow-2xl transition-transform group-hover:scale-110">
                <MoveHorizontal size={18} />
              </div>
            </div>

            {/* BOTTOM HINTS */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none text-white/90 text-xs font-mono">
              <span className="rounded-md bg-black/50 px-2.5 py-1 backdrop-blur-md">
                ◄ STRUCTURAL WIREFRAME
              </span>
              <span className="rounded-md bg-black/50 px-2.5 py-1 backdrop-blur-md">
                CRAFTED INTERIOR ►
              </span>
            </div>
          </div>
        </div>

        {/* ================= MATERIAL PALETTE SIMULATOR ================= */}
        <div className="mt-10 rounded-3xl border border-[#0d4969]/15 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0d4969]/10 pb-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
                Tactile Materiality Palette
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-light text-[#0d4969]">
                {activeVertical === "interiors"
                  ? "Select Interior Finish to Inspect Craft & Acoustics"
                  : "Select Architectural Spec to Simulate Performance"}
              </h3>
            </div>

            <Link
              href={activeVertical === "interiors" ? "/projects/interiors" : "/projects/architecture"}
              className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#0d4969] hover:text-[#d97736] transition-colors"
            >
              <span>{activeVertical === "interiors" ? "View Interior Projects" : "View Architecture Projects"}</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 MATERIAL BUTTONS */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {currentMaterials.map((m) => {
              const isSelected = selectedMaterial.id === m.id;

              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMaterial(m)}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    items-start
                    rounded-2xl
                    border
                    p-4
                    text-left
                    transition-all
                    duration-300
                    ${
                      isSelected
                        ? "border-[#d97736] bg-[#0d4969] text-white shadow-md"
                        : "border-[#0d4969]/15 bg-[#fafafa] text-[#0d4969] hover:border-[#0d4969]/40 hover:bg-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-2 w-full">
                    <span
                      className="h-3 w-3 rounded-full shrink-0 border border-white/40"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="text-xs font-medium truncate">{m.name}</span>
                  </div>

                  <span
                    className={`mt-2 text-[10px] font-mono tracking-wider ${
                      isSelected ? "text-[#d97736]" : "text-gray-500"
                    }`}
                  >
                    {m.origin}
                  </span>
                </button>
              );
            })}
          </div>

          {/* METRICS ROW */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-[#0d4969]/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d4969]/5 text-[#d97736]">
                <Leaf size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Environmental Profile</p>
                <p className="text-sm font-medium text-[#0d4969]">{selectedMaterial.carbonMetric}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d4969]/5 text-[#16648e]">
                <Volume2 size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Tactile & Acoustic Impact</p>
                <p className="text-sm font-medium text-[#0d4969]">{selectedMaterial.performanceMetric}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d4969]/5 text-[#0d4969]">
                <Layers size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Architectural Application</p>
                <p className="text-sm font-medium text-[#0d4969]">{selectedMaterial.application}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
