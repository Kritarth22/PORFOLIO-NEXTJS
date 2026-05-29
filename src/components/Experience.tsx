"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const EXPERIENCE_DATA = [
    // {
    //   role: "Senior Full-Stack Engineer",
    //   company: "PixelCraft Solutions",
    //   period: "2024 - Present",
    //   desc: "Led the development of a cloud-based visual data dashboard that increased page load performance by 40% and improved client conversion metrics by 25%. Architected high-performance Node APIs and modular React libraries."
    // },
    {
      role: "Full-Stack Developer",
      company: "AXY Inc.",
      period: "Dec 2025 - May 2026",
      desc: "Worked as a Full Stack Developer Intern, building scalable features with Next.js, Fastify, and TypeScript. Developed an interactive forum system, implemented REST APIs with Zod validation, and contributed to a microservices-based architecture.",
    },
    // {
    //   role: "UI/UX Developer",
    //   company: "CreativeFlow Agency",
    //   period: "2021 - 2022",
    //   desc: "Collaborated closely with branding experts to translate complex Figma visual mockups into pixel-perfect responsive React web systems. Developed dynamic custom micro-animations and clean interactive UI components."
    // }
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col gap-4 mb-14">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
          05. EXPERIENCE
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Experience
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 pl-6 md:pl-10 flex flex-col gap-10">
        {/* Timeline connection bar accent */}
        <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-400" />

        {EXPERIENCE_DATA.map((job, idx) => (
          <div key={idx} className="relative group">
            {/* Node icon dot */}
            <div className="absolute left-[-31px] md:left-[-47px] top-1.5 w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-black border-[3px] border-violet-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />

            {/* Timeline Card */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-start justify-between gap-4 glass-panel-hover">
              {/* Left Column: Job role metadata */}
              <div className="flex flex-col gap-1 select-none">
                <span className="font-mono text-xs text-violet-400 font-semibold uppercase tracking-wider">
                  {job.period}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {job.role}
                </h3>
                <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                  <Briefcase size={12} /> {job.company}
                </span>
              </div>

              {/* Right Column: Description */}
              <div className="md:max-w-xl">
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {job.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
