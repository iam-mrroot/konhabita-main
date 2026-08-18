"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname === "/") return null;

  return (
    <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
      <div className="h-32 w-[3px] rounded-full bg-[#0d4969]/15 overflow-hidden backdrop-blur-md">
        <div
          className="w-full bg-gradient-to-b from-[#16648e] to-[#d97736] rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(217,119,54,0.5)]"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <span className="text-[9px] font-mono text-[#0d4969]/60 rotate-90 tracking-widest mt-2">
        {Math.round(scrollProgress)}%
      </span>
    </div>
  );
}
