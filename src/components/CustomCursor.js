"use client";

import { useEffect, useRef, useState } from "react";

// Below this width the cursor is assumed to be touch/coarse input, so the
// custom cursor is disabled and the native cursor is used instead.
const DESKTOP_POINTER_MIN_WIDTH = 1024;

// How quickly the trailing ring catches up to the pointer each frame
// (0 = never moves, 1 = snaps instantly).
const RING_LERP_FACTOR = 0.18;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  const [cursorText, setCursorText] = useState("");
  const [cursorState, setCursorState] = useState("default"); // default, hover, view, drag, text
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.innerWidth < DESKTOP_POINTER_MIN_WIDTH) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Direct placement for inner dot (instant response)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      const viewCard = target.closest("[data-cursor='view'], .gallery-card, .team-card");
      const dragItem = target.closest("[data-cursor='drag']");

      if (dragItem) {
        setCursorState("drag");
        setCursorText("DRAG");
      } else if (viewCard) {
        setCursorState("view");
        setCursorText("VIEW");
      } else if (interactive) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for outer ring
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * RING_LERP_FACTOR;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * RING_LERP_FACTOR;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrame.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.innerWidth < DESKTOP_POINTER_MIN_WIDTH) return null;

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999999] h-2 w-2 rounded-full bg-[#d97736] transition-opacity duration-200 hidden lg:block ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${cursorState === "view" || cursorState === "drag" ? "scale-0" : "scale-100"}`}
      />

      {/* Luxury Outer Trailing Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999998] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color,opacity,transform] duration-300 ease-out hidden lg:flex ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorState === "hover"
            ? "h-14 w-14 border border-[#0d4969] bg-[#0d4969]/10 backdrop-blur-[1px]"
            : cursorState === "view"
            ? "h-20 w-20 border-2 border-white bg-[#0d4969] text-white shadow-xl shadow-[#0d4969]/30"
            : cursorState === "drag"
            ? "h-16 w-16 border-2 border-[#d97736] bg-[#d97736] text-white shadow-xl shadow-[#d97736]/40"
            : "h-9 w-9 border border-[#0d4969]/60 bg-transparent"
        }`}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-white animate-fade-in"
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}