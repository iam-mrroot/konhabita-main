"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { links } from "./Footer.data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#072638] text-white selection:bg-[#d97736]">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d97736]/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 lg:px-12">
        {/* COMPACT MAIN ROW */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-white/10">
          {/* BRAND */}
          <div className="space-y-1">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                Konhabita<span className="text-[#d97736]">.</span>
              </h2>
            </Link>
            <p className="text-xs font-light text-white/60">
              Architecture • Landscape • Urban Design • Sustainability
            </p>
          </div>

          {/* ESSENTIAL CONTACT PILLS */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-light text-white/80">
            <a
              href="mailto:contact@konhabita.com"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-[#d97736] hover:text-white transition-colors"
            >
              <Mail size={13} className="text-[#d97736]" />
              <span>contact@konhabita.com</span>
            </a>

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70">
              <MapPin size={13} className="text-[#d97736]" />
              <span>Thiruvananthapuram, India</span>
            </div>
          </div>
        </div>

        {/* COMPACT BOTTOM BAR */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
          {/* NAV LINKS ROW */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* COPYRIGHT & BACK TO TOP */}
          <div className="flex items-center gap-6">
            <span>© {currentYear} Konhabita.</span>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-white/70 hover:border-[#d97736] hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}