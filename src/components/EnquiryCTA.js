"use client";

import { useState } from "react";
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import ProjectEnquiryModal from "./ProjectEnquiryModal";

export default function EnquiryCTA({
  title = "Ready to Shape an Enduring Environment?",
  subtitle = "Collaborate with our multidisciplinary design partners on your upcoming architectural, landscape, or masterplanning commission.",
  discipline = "Architecture",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full rounded-3xl border border-[#0d4969]/15 bg-[#072638] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
              <Sparkles size={13} />
              <span>Direct Studio Collaboration</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight">
              {title}
            </h3>

            <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* CTA TRIGGER BUTTON */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#d97736] px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-white shadow-xl hover:bg-white hover:text-[#072638] transition-all hover:scale-105 cursor-pointer"
            >
              <span>Initiate Project Brief</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      <ProjectEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDiscipline={discipline}
      />
    </>
  );
}
