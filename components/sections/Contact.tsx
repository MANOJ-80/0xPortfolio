"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const socials = [
  {
    label: "GitHub",
    handle: "@MANOJ-80",
    url: "https://github.com/MANOJ-80",
    icon: "→",
  },
  {
    label: "X",
    handle: "@0xEchoDev",
    url: "https://x.com/0xEchoDev",
    icon: "𝕏",
  },
  {
    label: "LinkedIn",
    handle: "manoj-g",
    url: "https://www.linkedin.com/in/manoj-ganesan-2444ab28a/",
    icon: "in",
  },
];

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipient = "manojofficial.018@gmail.com";
    const subject = "Portfolio Contact";
    const body = `From: ${email || "Not provided"}\n\n${message || "Hello Manoj,"}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="content-visibility-auto py-32 px-6 relative z-10 w-full max-w-7xl mx-auto mb-20 pointer-events-none select-none"
    >
      {/* Main Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-lg border border-white/20 pointer-events-auto select-auto"
      >
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-6 drop-shadow-[0_2px_10px_rgba(var(--accent-primary-rgb),0.5)]">
          [03] // TRANSMISSION
        </span>
        <h2
          className="font-display text-4xl md:text-7xl font-bold uppercase text-white mb-4 leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "var(--font-family-brettaline)" }}
        >
          Let&apos;s Build <br />
          <span className="text-accent-lime">Together.</span>
        </h2>
        <p
          className="text-base md:text-2xl text-gray-400 mb-12 max-w-lg"
          style={{ fontFamily: "var(--font-family-brooklyn)" }}
        >
          Open for collaborations, freelance projects, and interesting
          conversations about systems & security.
        </p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, borderColor: "var(--accent-primary)" }}
              style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
              className="group p-6 border bg-black/30 rounded-lg hover:bg-black/50 transition-all flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-accent-lime/70 uppercase tracking-widest block mb-1">
                  {social.label}
                </span>
                <span className="font-mono text-sm text-white group-hover:text-accent-lime transition-colors">
                  {social.handle}
                </span>
              </div>
              <span className="text-2xl text-accent-lime/50 group-hover:text-accent-lime group-hover:translate-x-1 transition-all">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Quick Contact Form */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="font-mono text-xs text-accent-lime/70 uppercase tracking-widest mb-6">
            [DROP_MESSAGE]
          </h3>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              aria-label="Your email address"
              className="flex-1 py-4 px-4 text-sm font-mono text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-accent-lime transition-all placeholder:text-white/30"
              placeholder="YOUR_EMAIL"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              aria-label="Quick message"
              className="flex-1 py-4 px-4 text-sm font-mono text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-accent-lime transition-all placeholder:text-white/30"
              placeholder="QUICK_MESSAGE"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <MagneticButton>
              <button
                type="submit"
                className="px-8 py-4 bg-accent-lime text-black font-bold tracking-widest text-sm hover:bg-white transition-all uppercase shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.3)]"
              >
                SEND →
              </button>
            </MagneticButton>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
