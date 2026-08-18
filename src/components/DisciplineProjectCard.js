import Image from "next/image";
import { MapPin, Maximize2, Calendar } from "lucide-react";

// Project preview card used inside the scroll-revealed list on every project showcase page.
// `badge` is the top-left pill (plain discipline label, or an award pill for competition entries)
// and is supplied by the caller since it's the one part that genuinely differs page to page.
export default function DisciplineProjectCard({ project, badge, onSelect }) {
  return (
    <article
      onClick={() => onSelect(project)}
      data-cursor="view"
      className="project-card group relative w-full h-[270px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0d4969]/10 bg-slate-900 shadow-md transition-all duration-500 hover:shadow-2xl hover:border-[#d97736]/40 cursor-pointer"
    >
      <Image
        src={project.src}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 100vw, 75vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#072638]/90 via-[#072638]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        {badge}

        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1 text-[10px] sm:text-[11px] font-mono text-[#0d4969] backdrop-blur-md shadow-sm">
          <Calendar size={11} className="text-[#d97736]" />
          <span>{project.year}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8 z-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-xl space-y-1.5">
          <p className="text-[11px] font-mono tracking-widest text-[#d97736] uppercase flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{project.location} • {project.area}</span>
          </p>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h2>

          <p className="text-xs sm:text-[13px] font-light text-white/80 line-clamp-1 sm:line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4969] group-hover:border-white group-hover:scale-105">
            <span>View Brief</span>
            <Maximize2 size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}
