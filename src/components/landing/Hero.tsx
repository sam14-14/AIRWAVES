"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-24 pb-20 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-900/30 px-4 py-1.5 text-sm font-medium text-red-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              Now serving Karnal, Haryana
            </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:max-w-3xl"
          >
            Internet as fast as <span className="text-red-600">your imagination.</span>
          </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              Experience lightning-fast speeds, zero latency, and 99.9% uptime. 
                Connect all your devices with Airwaves WIFI Solutions and discover a new world of possibilities.
            </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="#plans"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-zinc-800 bg-zinc-900 px-8 py-4 text-lg font-bold text-white transition-all hover:border-zinc-700"
                >
                  View Plans
                </Link>
              </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-4xl"
          >
            {[
              { icon: <Zap className="text-amber-500" />, title: "Ultra Fast", desc: "Up to 10Gbps symmetrical" },
              { icon: <Shield className="text-emerald-500" />, title: "Secure", desc: "Advanced DDoS protection" },
              { icon: <Wifi className="text-red-500" />, title: "Wide Reach", desc: "Full home mesh coverage" },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="rounded-xl bg-zinc-900 p-3">{feature.icon}</div>
                <div className="text-left">
                  <h3 className="font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
