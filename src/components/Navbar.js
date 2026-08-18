"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links } from "./Navbar.data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  // Check if current page belongs to this section
  const isActive = (href) => {
    if (href === "/home") {
      return pathname === "/home";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* ================= FLOATING CAPSULE NAVBAR ================= */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1240px] transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-[#0d4969]/15 shadow-xl shadow-[#0d4969]/10 py-2 sm:py-2.5 px-5 sm:px-7"
            : "bg-white/80 backdrop-blur-md border border-[#0d4969]/10 shadow-lg shadow-[#0d4969]/5 py-2.5 sm:py-3 px-6 sm:px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center"
          >
            <div
              className={`relative transition-all duration-300 ${
                scrolled
                  ? "h-[38px] w-[130px] sm:h-[44px] sm:w-[150px] md:h-[48px] md:w-[165px]"
                  : "h-[42px] w-[140px] sm:h-[48px] sm:w-[165px] md:h-[54px] md:w-[185px]"
              }`}
            >
              <Image
                src="/logo.webp"
                fill
                sizes="185px"
                alt="Konhabita Logo"
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* ================= DESKTOP NAV WITH ROLLING KINETIC HOVER ANIMATION ================= */}
          <nav className="hidden items-center gap-1.5 lg:flex xl:gap-2">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative overflow-hidden rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 xl:px-4 xl:text-[13px] ${
                    active
                      ? "bg-[#0d4969] text-white shadow-sm"
                      : "text-[#0d4969]/80 hover:text-[#0d4969] hover:bg-[#0d4969]/5"
                  }`}
                >
                  {/* Kinetic text roll on hover (Apple/Awwwards style) */}
                  <span className="relative block overflow-hidden">
                    {/* Default line */}
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    {/* Duplicate roll-up line */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 ${
                        active ? "text-[#d97736]" : "text-[#d97736]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT CTA & MOBILE BUTTON ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Enquire CTA */}
            <Link
              href="/contact"
              className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full border border-[#0d4969] bg-[#0d4969] px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-[#d97736] hover:bg-[#d97736] sm:flex"
            >
              <span>Enquire</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0d4969]/20 bg-white text-[#0d4969] transition-all duration-300 hover:border-[#0d4969] lg:hidden"
            >
              {open ? (
                <X size={18} strokeWidth={1.75} />
              ) : (
                <Menu size={18} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {/* ================= FLOATING MOBILE MENU ================= */}
        <div
          className={`fixed inset-x-0 top-[110%] mx-auto w-[96%] max-w-sm rounded-3xl border border-[#0d4969]/15 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-400 ease-in-out lg:hidden ${
            open
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-3"
          }`}
        >
          <nav className="space-y-1">
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#d97736]">
              Studio Navigation
            </p>
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-light transition-all ${
                    active
                      ? "bg-[#0d4969] text-white font-medium pl-4"
                      : "text-[#0d4969] hover:bg-[#0d4969]/5 hover:pl-4"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`text-sm ${active ? "text-[#d97736]" : "text-gray-400"}`}>
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#0d4969]/15">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0d4969] py-3 text-xs font-medium uppercase tracking-wider text-white shadow-md shadow-[#0d4969]/20"
            >
              <span>Start Project Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}