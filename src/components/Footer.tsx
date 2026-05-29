"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black/85 backdrop-blur-md py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-mono font-black text-xs text-black shadow-[0_0_10px_rgba(139,92,246,0.3)]">
              KJ
            </div>
            <span className="font-mono text-xs tracking-widest font-bold text-white">
              Kritarth.DEV
            </span>
          </a>
          <span className="text-[11px] text-zinc-500 font-mono mt-1">
            &copy; {new Date().getFullYear()} Kritarth Joshi. All rights
            reserved.
          </span>
        </div>

        {/* Directory Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-mono text-[12px]">
          <a
            href="#home"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Top
          </a>
          <a
            href="#about"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            About
          </a>
          <a
            href="#education"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Scroll to Top floating action */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 rounded-full bg-zinc-950 border border-zinc-850 text-zinc-500 hover:text-violet-400 hover:border-violet-500/20 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  );
}
