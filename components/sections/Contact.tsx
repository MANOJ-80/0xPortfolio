"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto mb-20"
    >
      {/* Main Glass Container - matching Projects style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-lg border border-white/20"
      >
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-2 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
          [03] // TRANSMISSION
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-12 leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          Let's Build <br />
          <span className="text-gray-500">The Future.</span>
        </h2>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="group relative">
              <label className="font-mono text-[10px] text-accent-lime mb-3 block uppercase tracking-wider">
                Identifier
              </label>
              <input
                type="text"
                className="w-full py-4 px-4 text-lg font-sans text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-accent-lime transition-all placeholder:text-white/30"
                placeholder="ENTER_NAME"
              />
            </div>

            {/* Email Input */}
            <div className="group relative">
              <label className="font-mono text-[10px] text-accent-lime mb-3 block uppercase tracking-wider">
                Signal_Freq
              </label>
              <input
                type="email"
                className="w-full py-4 px-4 text-lg font-sans text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-accent-lime transition-all placeholder:text-white/30"
                placeholder="ENTER_EMAIL"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="group relative">
            <label className="font-mono text-[10px] text-accent-lime mb-3 block uppercase tracking-wider">
              Payload
            </label>
            <textarea
              rows={4}
              className="w-full py-4 px-4 text-lg font-sans text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-accent-lime transition-all placeholder:text-white/30 resize-none"
              placeholder="TRANSMIT_MESSAGE..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6 flex justify-start">
            <MagneticButton>
              <button
                type="submit"
                className="group flex items-center gap-3 px-10 py-5 bg-accent-lime text-black font-bold tracking-widest text-sm hover:bg-white transition-all uppercase shadow-[0_0_30px_rgba(204,255,0,0.3)]"
              >
                <span>Transmit_Message</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </MagneticButton>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
