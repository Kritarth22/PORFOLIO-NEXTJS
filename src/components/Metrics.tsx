"use client";

import React from "react";
import { Award, Code2, User, Sparkles } from "lucide-react";

export default function Metrics() {
  const metricsData = [
    { label: "Years Experience", value: "4+", icon: <Award className="text-violet-400" size={18} /> },
    { label: "Completed Projects", value: "30+", icon: <Code2 className="text-cyan-400" size={18} /> },
    { label: "Happy Clients", value: "15+", icon: <User className="text-pink-400" size={18} /> },
    { label: "Client Satisfaction", value: "99%", icon: <Sparkles className="text-amber-400" size={18} /> }
  ];

  return (
    <section className="py-6 mb-16 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metricsData.map((metric, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-5 rounded-2xl flex flex-col justify-between glass-panel-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">{metric.value}</span>
              {metric.icon}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-3 leading-snug">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
