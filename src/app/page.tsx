import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col antialiased bg-grid-pattern selection:bg-violet-500 selection:text-white">
      {/* Background ambient glowing lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full glow-spot-1 opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full glow-spot-2 opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full glow-spot-3 opacity-30 animate-pulse-slow"></div>
      </div>

      <Header />

      <main className="w-full max-w-6xl mx-auto px-4 md:px-8 flex-grow z-10 pt-28">
        <Hero />
        {/* <Metrics /> */}
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
