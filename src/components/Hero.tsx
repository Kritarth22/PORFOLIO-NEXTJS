"use client";

import React from "react";
import { ArrowUpRight, Mail, User, Cpu, Check } from "lucide-react";
import resumeImg from "@/images/resume.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center py-12 md:py-20 relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero details */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left order-2 lg:order-1">
          {/* Hiring Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/40 text-xs font-mono text-violet-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Freelance & Full-time
          </div>

          {/* Title heading */}
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-sm md:text-base text-cyan-400 font-medium tracking-widest">
              HELLO WORLD, MY NAME IS
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Kritarth Joshi
            </h1>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 text-glow">
              Building Next-Gen Web.
            </span>
          </div>

          {/* Subheading description */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
            Full-stack developer focused on building scalable web applications
            with React, Next.js, Node.js, and TypeScript. Passionate about clean
            UI, efficient backend systems, and solving real-world problems
            through code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-violet-600 to-indigo-700 text-white flex items-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore My Projects <ArrowUpRight size={14} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full text-xs font-mono font-bold border border-zinc-700 bg-zinc-900/50 text-zinc-300 flex items-center gap-2 hover:bg-zinc-800 hover:text-white transition-all duration-300"
            >
              Contact Me <Mail size={14} />
            </a>
          </div>

          {/* Quick Tech Badge Row */}
          <div className="flex flex-col gap-2 mt-4">
            <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              EXPERTISE IN
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                "OOPs",
                "DSA",
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "PostgreSQL",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800/80 font-mono text-[11px] text-zinc-400 hover:text-violet-400 hover:border-violet-800/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Placeholder Image Frame */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Floating glowing background mesh */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-500 via-pink-500 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-1000 animate-pulse-slow"></div>

            {/* Main 3D looking card frame */}
            <div className="w-full h-full rounded-3xl glass-panel p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500 hover:rotate-2 hover:scale-[1.02] border border-zinc-700/50">
              {/* Glowing card overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"></div>

              {/* Top bar control indicators */}
              <div className="flex justify-between items-center z-10">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                  HELLO WORLD
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700"></span>
                </div>
              </div>

              {/* Inner Premium Image Box */}
              <div className="flex-1 my-4 rounded-xl border border-zinc-800 bg-black/40 relative flex flex-col items-center justify-center overflow-hidden group/inner shadow-inner">
                {/* Visual glowing circle gradient */}
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-violet-600/20 to-cyan-500/10 blur-xl group-hover/inner:scale-110 transition-transform duration-500"></div>

                {/* Profile Image */}
                <img
                  src={resumeImg.src}
                  alt="Kritarth Joshi"
                  className="relative z-10 w-52 h-52 object-cover rounded-2xl border border-zinc-700 shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom visual overlay bars */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800/80">
                  <span className="font-mono text-[9px] text-zinc-500">
                    FORMAT: JPG/PNG/WEBP
                  </span>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                    <Check size={8} /> READY
                  </div>
                </div>
              </div>

              {/* Frame Footer Info */}
              <div className="flex justify-between items-center z-10 font-mono text-[10px] text-zinc-400 px-1">
                <span className="flex items-center gap-1.5">
                  <Cpu size={12} className="text-cyan-400" /> FULL-STACK.EXE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
