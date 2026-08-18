"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  // Ensure scroll position is always reset to the top on page navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }
  }, [pathname]);

  // Don't show footer on opening animation page
  const hideFooter = pathname === "/";

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}