"use client";

import { Handshake } from "lucide-react";

const clientLogos = [
  {
    name: "EMAAR",
    subtext: "PROPERTIES",
  },
  {
    name: "DUBAI",
    subtext: "MUNICIPALITY",
  },
  {
    name: "BENGALURU",
    subtext: "SMART CITY",
  },
  {
    name: "KERALA IT",
    subtext: "STATE MISSION",
  },
  {
    name: "SOBHA",
    subtext: "REALTY",
  },
  {
    name: "SHAPOORJI",
    subtext: "PALLONJI",
  },
  {
    name: "KOCHI METRO",
    subtext: "RAIL LTD",
  },
  {
    name: "AL FUTTAIM",
    subtext: "GROUP",
  },
  {
    name: "GODREJ",
    subtext: "PROPERTIES",
  },
  {
    name: "TATA",
    subtext: "REALTY",
  },
];

export default function ClientsCarousel() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-14 sm:py-18 border-t border-[#0d4969]/10 selection:bg-[#0d4969] selection:text-white">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-10" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 mb-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d97736]">
          <Handshake size={14} />
          <span>Clients & Institutional Partners</span>
        </div>
      </div>

      {/* INFINITE MARQUEE LOGOS ONLY */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none" />

        <div className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((client, index) => (
            <div
              key={index}
              className="
                group
                flex
                h-20
                w-[180px]
                sm:h-24
                sm:w-[220px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-[#0d4969]/10
                bg-white
                px-6
                shadow-sm
                transition-all
                duration-300
                hover:border-[#0d4969]
                hover:shadow-md
                hover:scale-105
                cursor-pointer
              "
            >
              {/* BRAND LOGO TYPOGRAPHY BADGE */}
              <span className="text-base sm:text-lg font-light tracking-[0.2em] text-[#0d4969] group-hover:text-[#d97736] transition-colors">
                {client.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-gray-400 group-hover:text-[#0d4969] transition-colors">
                {client.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
