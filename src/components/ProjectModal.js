"use client";

import Image from "next/image";
import Link from "next/link";
import { X, MapPin } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl text-[#0d4969]">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0d4969] shadow-md hover:bg-[#0d4969] hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* MODAL HERO IMAGE */}
        <div className="relative h-[320px] sm:h-[420px] w-full bg-slate-900">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="rounded-full bg-[#d97736] px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white">
              {project.category}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-light">{project.title}</h2>
            <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1.5 mt-1 font-mono">
              <MapPin size={14} className="text-[#d97736]" />
              {project.location} • {project.year} • {project.area}
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
              {project.description}
            </p>
          </div>

          {/* TECHNICAL HIGHLIGHTS */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#d97736]">
              Key Technical Features
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.map((h, i) => (
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
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-gray-500 hover:text-[#0d4969]"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
