"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress bar
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Scroll Spy active sections
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FLOATING TOP PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl h-16 rounded-full glass-panel z-40 px-6 md:px-10 flex items-center justify-between shadow-2xl transition-all duration-300">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-mono font-black text-md text-black shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
            KJ
          </div>
          <span className="font-mono text-md tracking-widest font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:text-violet-400 transition-colors">
            Kritarth.DEV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-sm font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-zinc-800/80 text-violet-400 shadow-inner border border-zinc-700/50"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-mono font-semibold bg-white text-black hover:bg-violet-400 hover:text-black transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`fixed inset-0 z-30 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "education", label: "Education" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "experience", label: "Experience" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-mono tracking-wide ${
              activeSection === item.id
                ? "text-violet-400 font-bold"
                : "text-zinc-400"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full font-mono bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-bold text-sm shadow-[0_0_25px_rgba(139,92,246,0.5)]"
        >
          Get In Touch
        </a>
      </div>
    </>
  );
}
