"use client";

import React, { useState } from "react";
import { Monitor, Database, Wrench } from "lucide-react";

export default function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<
    "frontend" | "backend" | "tools"
  >("frontend");

  const SKILLS_DATA = {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 82 },
      { name: "Firebase", level: 72 },
      { name: "SQL", level: 85 },
    ],
    tools: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Beekeeper Studio", level: 70 },
      { name: "Typesense", level: 68 },
      { name: "Prisma ORM", level: 78 },],
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            03. CORE EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Category selection tabs */}
        <div className="flex p-1.5 rounded-full bg-zinc-950/80 border border-zinc-900 font-mono text-[11px] self-start md:self-auto">
          {[
            { id: "frontend", label: "Frontend", icon: <Monitor size={14} /> },
            { id: "backend", label: "Backend", icon: <Database size={14} /> },
            { id: "tools", label: "Tools", icon: <Wrench size={14} /> },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setActiveSkillCategory(
                  category.id as "frontend" | "backend" | "tools",
                )
              }
              className={`px-4 py-2 rounded-full flex items-center gap-1.5 font-medium transition-all duration-300 ${
                activeSkillCategory === category.id
                  ? "bg-zinc-800 text-white shadow-md"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skill items slider grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS_DATA[activeSkillCategory].map((skill, idx) => (
          <div
            key={idx}
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between group glass-panel-hover"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs text-zinc-400 group-hover:text-violet-400 transition-colors">
                {`0${idx + 1}.`}
              </span>
              <span className="font-mono text-xs font-semibold text-zinc-300">
                {skill.level}%
              </span>
            </div>

            <h4 className="text-base font-bold text-white tracking-tight mb-4 font-sans">
              {skill.name}
            </h4>

            {/* Custom Glowing Slider Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden relative border border-zinc-800/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
