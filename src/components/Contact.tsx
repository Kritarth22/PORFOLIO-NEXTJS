"use client";

import React, { useState } from "react";
import { Mail, Cpu, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import emailjs from "@emailjs/browser";
import  {env}  from "@/env";


export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kritarth.dpr@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) return;

    try {
      setFormStatus("sending");
      setFormError(null);

      // Validate that environment variables are correctly populated
      if (!env.serviceId || !env.templateId || !env.publicKey) {
        throw new Error("EmailJS keys are not set. Please check your .env configuration.");
      }

      await emailjs.send(
        env.serviceId,
        env.templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        env.publicKey,
      );

      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 4000);
    } catch (error: any) {
      console.error(error);
      setFormStatus("idle");
      setFormError(
        error?.message || "Failed to send the message. Please check your connection or try again."
      );
      setTimeout(() => {
        setFormError(null);
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col gap-4 mb-12">
        <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">
          06. LET'S CONNECT
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Let's Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Info list */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Interested in collaborating or discussing opportunities?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              I'm currently looking for full-time opportunities and exciting
              projects in full-stack web development. Feel free to reach out
              regarding internships, collaborations, or tech discussions.
            </p>
          </div>

          {/* Contact information nodes */}
          <div className="flex flex-col gap-4">
            {/* Email Node with Copy Function */}
            <div
              onClick={handleCopyEmail}
              className="glass-panel p-4 rounded-xl flex items-center justify-between cursor-pointer border border-zinc-800 hover:border-violet-500/30 hover:bg-zinc-900/30 transition-all select-none group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-violet-400 group-hover:text-cyan-400 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wide">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-xs sm:text-sm text-white font-mono font-medium">
                    kritarth.dpr@gmail.com
                  </span>
                </div>
              </div>
              <button className="p-2 text-zinc-500 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors">
                {copiedEmail ? (
                  <Check size={14} className="text-emerald-400 animate-pulse" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Location Node */}
            <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-zinc-850 select-none">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-cyan-400">
                <Cpu size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wide">
                  CURRENT BASE
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  Dungarpur, Rajasthan, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Channels panel */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              SOCIAL DIRECTORY
            </span>
            <div className="flex gap-2">
              {[
                {
                  label: "GitHub",
                  icon: <GithubIcon size={16} />,
                  href: "https://github.com/Kritarth22",
                },
                {
                  label: "LinkedIn",
                  icon: <LinkedinIcon size={16} />,
                  href: "https://www.linkedin.com/in/kritarth-joshi-2a048231b/",
                },
                // {
                //   label: "Twitter",
                //   icon: <Instagram size={16} />,
                //   href: "https://www.instagram.com/kritarth_joshi/",
                // },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 font-mono text-xs text-zinc-400 flex items-center gap-2 hover:bg-zinc-900 hover:text-white hover:border-violet-500/20 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all"
                >
                  {social.icon} {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-float select-none">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] mb-2">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-zinc-400 max-w-xs leading-normal">
                  Thank you for reaching out. Your message has been sent
                  successfully. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name input */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest"
                    htmlFor="form-name"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={formStatus === "sending"}
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full h-12 rounded-xl bg-black/60 border border-zinc-800 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all shadow-inner"
                  />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest"
                    htmlFor="form-email"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={formStatus === "sending"}
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full h-12 rounded-xl bg-black/60 border border-zinc-800 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all shadow-inner"
                  />
                </div>

                {/* Message textarea */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest"
                    htmlFor="form-message"
                  >
                    DETAILED MESSAGE
                  </label>
                  <textarea
                    id="form-message"
                    required
                    disabled={formStatus === "sending"}
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Hello, I'd love to chat about a new web dashboard..."
                    className="w-full rounded-xl bg-black/60 border border-zinc-800 p-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all shadow-inner resize-none"
                  />
                </div>

                {/* Error message */}
                {formError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono flex items-center gap-2.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                    {formError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full h-12 mt-2 rounded-xl font-mono text-sm font-bold bg-white text-black hover:bg-violet-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-zinc-500 border-t-black animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
