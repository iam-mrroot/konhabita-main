"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";
import EnquiryCTA from "./EnquiryCTA";
import { allTeam, studioValues, milestones, teamFilterTabs } from "./Studio.data";

export default function Studio() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredTeam =
    filterCategory === "all"
      ? allTeam
      : allTeam.filter((m) => m.category === filterCategory);

  return (
    <section className="relative min-h-screen w-full bg-white selection:bg-[#0d4969] selection:text-white pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-10 lg:px-16 space-y-24">
        {/* ================= 01: HERO STUDIO STATEMENT ================= */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
            <Sparkles size={13} />
            <span>Studio Profile & Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0d4969] leading-[1.12]">
            A multidisciplinary practice dedicated to the art and science of resilient environments.
          </h1>

          <p className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
            Konhabita brings together architects, landscape architects, urban planners, and sustainability scientists. 
            We operate as an integrated collective, dissolving the boundaries between nature and the built environment.
          </p>

          {/* STUDIO STATS ROW */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-[#0d4969]/15 pt-8">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-light text-[#0d4969]">15+ Years</p>
              <p className="text-xs font-mono text-gray-400 uppercase">Collective Practice</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-light text-[#0d4969]">50+ Projects</p>
              <p className="text-xs font-mono text-gray-400 uppercase">Built Commissions</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-light text-[#0d4969]">1.2M+ sq.ft</p>
              <p className="text-xs font-mono text-gray-400 uppercase">Living Landscapes</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-light text-[#0d4969]">12 Honors</p>
              <p className="text-xs font-mono text-gray-400 uppercase">Design Awards</p>
            </div>
          </div>
        </div>

        {/* ================= 02: CORE VALUES ================= */}
        <div className="space-y-8 border-t border-[#0d4969]/15 pt-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
              Foundational Principles
            </p>
            <h2 className="text-2xl sm:text-4xl font-light text-[#0d4969] mt-1">
              Our Core Design Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studioValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-[#0d4969]/15 bg-[#fafafa] p-7 space-y-4 hover:border-[#0d4969] hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d4969] text-white shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-medium text-[#0d4969]">{v.title}</h3>
                  <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 03: INTERACTIVE TEAM DIRECTORY ================= */}
        <div className="space-y-10 border-t border-[#0d4969]/15 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
                Studio Collective
              </p>
              <h2 className="text-2xl sm:text-4xl font-light text-[#0d4969] mt-1">
                Leadership & Design Team
              </h2>
            </div>

            {/* FILTER PILLS */}
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-[#0d4969]/15 bg-[#fafafa] p-1.5 shadow-sm">
              {teamFilterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                    filterCategory === tab.id
                      ? "bg-[#0d4969] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#0d4969]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#0d4969]/15
                  bg-[#fafafa]
                  shadow-sm
                  transition-all
                  duration-500
                  hover:border-[#0d4969]
                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-1.5
                  cursor-pointer
                "
              >
                {/* MEMBER PHOTO */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-106 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-mono text-[#0d4969] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    View Profile ↗
                  </span>
                </div>

                {/* DETAILS */}
                <div className="p-4 sm:p-5 space-y-1">
                  <h3 className="text-sm sm:text-base font-medium text-[#0d4969] group-hover:text-[#d97736] transition-colors truncate">
                    {member.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-mono truncate">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 04: STUDIO TIMELINE ================= */}
        <div className="space-y-10 border-t border-[#0d4969]/15 pt-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
              Evolution & Milestones
            </p>
            <h2 className="text-2xl sm:text-4xl font-light text-[#0d4969] mt-1">
              Our Studio Trajectory
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-[#0d4969]/15 bg-[#fafafa] p-7 space-y-3"
              >
                <span className="text-3xl font-light font-mono text-[#d97736]">
                  {m.year}
                </span>
                <h3 className="text-lg font-medium text-[#0d4969]">{m.title}</h3>
                <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 05: DIRECT PROJECT ENQUIRY CTA ================= */}
        <div className="pt-8">
          <EnquiryCTA
            discipline="Integrated Architecture & Landscapes"
            title="Collaborate with our Studio Directors"
            subtitle="Connect directly with our multidisciplinary team to discuss masterplans, architectural designs, and living landscapes."
          />
        </div>
      </div>

      {/* ================= MEMBER BIO POPUP MODAL ================= */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
          <div
            onClick={() => setSelectedMember(null)}
            className="absolute inset-0 bg-[#072638]/75 backdrop-blur-md"
          />

          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#0d4969]/20 bg-white p-6 sm:p-8 shadow-2xl z-10">
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0d4969]/5 text-gray-400 hover:bg-[#0d4969]/15 hover:text-[#0d4969] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="relative aspect-[3/4] sm:col-span-5 w-full overflow-hidden rounded-2xl border border-[#0d4969]/15 shadow-md">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d97736]">
                    {selectedMember.credentials}
                  </span>
                  <h3 className="text-2xl font-light text-[#0d4969] mt-0.5">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    {selectedMember.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-light text-gray-700 leading-relaxed border-t border-[#0d4969]/10 pt-4">
                  {selectedMember.bio}
                </p>

                <div className="rounded-xl bg-[#fafafa] border border-[#0d4969]/10 p-3.5 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-gray-400">Key Projects Led</p>
                  <p className="text-xs font-medium text-[#0d4969]">{selectedMember.projects}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}