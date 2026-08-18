"use client";

import { useRef, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";
import DisciplineCategoryNav from "./DisciplineCategoryNav";
import DisciplineProjectCard from "./DisciplineProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import EnquiryCTA from "./EnquiryCTA";
import { useProjectCardReveal } from "./useProjectCardReveal";
import { competitionProjects } from "./Competition.data";

export default function Competition() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useProjectCardReveal(sectionRef, listRef);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#fafafa] pt-28 sm:pt-32 lg:pt-36 pb-28 text-[#0d4969] selection:bg-[#0d4969] selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-15" />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-10 sm:mb-14 lg:mb-16 border-b border-[#0d4969]/15 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736] mb-3">
            <Sparkles size={13} />
            <span>Design Competitions</span>
          </div>

          <h1 className="text-4xl font-light leading-tight tracking-tight text-[#0d4969] sm:text-5xl lg:text-6xl">
            Competition & Visionary Entries
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg font-light">
            Award-winning conceptual designs, international architecture competitions, and visionary landmark proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <DisciplineCategoryNav activeCategory="Competition" />

          <div ref={listRef} className="w-full lg:col-span-8 xl:col-span-9 space-y-8 sm:space-y-10">
            {competitionProjects.map((project) => (
              <DisciplineProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                badge={
                  <span className="flex items-center gap-1.5 rounded-full bg-[#d97736] px-3.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white shadow-md">
                    <Trophy size={11} />
                    <span>{project.award || project.category}</span>
                  </span>
                }
              />
            ))}

            {/* DIRECT PROJECT ENQUIRY CTA BANNER */}
            <div className="pt-6">
              <EnquiryCTA
                discipline="International Competition Design"
                title="Collaborate on Architectural Competitions & Landmark RFPs"
                subtitle="Partner with our research-backed computational design team for international architectural competitions and government masterplans."
              />
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
