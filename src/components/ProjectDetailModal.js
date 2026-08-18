import Image from "next/image";
import { X } from "lucide-react";

// Full-project detail overlay, shared by every project showcase page.
// `project.award` only exists on competition entries; other pages simply fall back to `category`.
export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl text-[#0d4969]">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0d4969] shadow-md hover:bg-[#0d4969] hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="relative h-64 sm:h-80 w-full">
          <Image src={project.src} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="rounded-full bg-[#d97736] px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
              {project.award || project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-light mt-2">{project.title}</h3>
            <p className="text-xs font-mono text-white/80 mt-1">
              {project.location} • {project.area}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#d97736]">Project Overview</h4>
          <p className="text-sm font-light leading-relaxed text-gray-700">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
