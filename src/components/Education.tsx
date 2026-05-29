"use client";

import React from "react";
import { GraduationCap, Calendar, Award, School } from "lucide-react";

export default function Education() {
  const EDUCATION_DATA = [
    {
      degree: "B.Tech in ICT",
      institution: "Dhirubhai Ambani University",
      period: "2022 - 2026",
      score: "CPI: 6.90",
      type: "University",
      icon: <GraduationCap size={16} />,
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      degree: "12th Standard",
      institution: "MDS Public School (CBSE)",
      period: "2021 - 2022",
      score: "89.4%",
      type: "High School",
      icon: <Award size={16} />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      degree: "10th Class",
      institution: "Modern Senior Secondary School (CBSE)",
      period: "2019 - 2020",
      score: "87.8%",
      type: "Secondary School",
      icon: <School size={16} />,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col gap-4 mb-14">
        <span className="font-mono text-xs text-violet-400 tracking-widest uppercase animate-pulse">
          02. EDUCATION
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Academic Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 pl-6 md:pl-10 flex flex-col gap-10">
        {/* Timeline connection bar accent */}
        <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500" />

        {EDUCATION_DATA.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Node icon dot */}
            <div className="absolute left-[-31px] md:left-[-47px] top-1.5 w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-black border-[3px] border-violet-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />

            {/* Timeline Card */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 glass-panel-hover animate-fade-in-up">
              {/* Left Column: Academic info & badge */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {edu.type}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 flex items-center gap-1">
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                  {edu.degree}
                </h3>
                <span className="text-sm text-zinc-450 font-mono font-medium flex items-center gap-1.5">
                  <span className="text-zinc-500">{edu.icon}</span> {edu.institution}
                </span>
              </div>

              {/* Right Column: Score Badge */}
              <div className="flex items-center justify-start md:justify-end">
                <div className="relative group/score">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.gradient} rounded-xl blur opacity-30 group-hover/score:opacity-60 transition duration-500`} />
                  <div className="relative px-5 py-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center min-w-[120px]">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-0.5">
                      Result / Score
                    </span>
                    <span className={`text-base font-mono font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
