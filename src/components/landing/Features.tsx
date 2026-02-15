"use client";

import { motion } from "framer-motion";
import {
  Signal,
  Cpu,
  Headphones,
  Globe,
  Rocket,
  Lock,
  Wifi } from
"lucide-react";

export default function Features() {
  const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Fiber-Optic Speed",
    description: "Experience the fastest residential internet with our pure fiber-optic network."
  },
  {
    icon: <Signal className="h-6 w-6" />,
    title: "Seamless Mesh WiFi",
    description: "No more dead zones. Our mesh technology covers every corner of your home."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Safe & Secure",
    description: "Built-in security protects all your connected devices from cyber threats."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Unlimited Data",
    description: "No data caps, no overage fees. Stream, game, and work as much as you want."
  },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Wide Reach",
      description: "Full home mesh coverage across Karnal.",
      id: "coverage"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Local Support",
      description: "Our expert team is always here to help you stay connected.",
      id: "support"
    }];


  return (
    <section id="services" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-lg text-zinc-400">
            We provide more than just internet; we provide a better way to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) =>
            <motion.div
              key={index}
              id={feature.id}
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-red-500/50 hover:shadow-xl">

              <div className="mb-6 inline-flex rounded-2xl bg-red-900/20 p-4 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <div className="text-red-500 transition-colors group-hover:text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
