"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

export default function Pricing() {
    const plans = [
      {
        name: "Starter",
        price: "499",
        speed: "100 Mbps",
        description: "Perfect for small households and essential browsing.",
        features: [
          "Unlimited Data",
          "Dual-band Router Included",
          "Standard Support",
          "No Hidden Costs",
        ],
        recommended: false,
      },
      {
        name: "Pro Fiber",
        price: "799",
        speed: "300 Mbps",
        description: "Our most popular plan for gaming and 4K streaming.",
        features: [
          "Everything in Starter",
          "Symmetrical Speeds",
          "Dual-band WiFi 6 Router",
          "Priority 24/7 Support",
          "Buffer-free Streaming",
        ],
        recommended: true,
      },
      {
        name: "Elite",
        price: "1499",
        speed: "1 Gbps",
        description: "Ultimate performance for power users and smart homes.",
        features: [
          "Everything in Pro",
          "Next-Gen WiFi 6E Mesh",
          "Dedicated Account Manager",
          "Static IP Included",
          "Priority Technical Visit",
        ],
        recommended: false,
      },
    ];

  return (
    <section id="plans" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose Your Speed
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Simple, transparent pricing with no hidden fees or surprise increases.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                plan.recommended
                  ? "bg-zinc-800 text-white shadow-2xl scale-105 z-10"
                  : "bg-zinc-900 border border-zinc-800 text-white"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">₹{plan.price}</span>
                    <span className="text-zinc-400">/mo</span>
                  </div>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-red-400">
                  <Info size={14} />
                  Up to {plan.speed}
                </div>
                <p className="mt-4 text-sm text-zinc-400">
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.recommended ? "text-red-400" : "text-red-500"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

                  <Link
                    href="/contact"
                    className={`mt-10 block w-full rounded-2xl py-4 text-center font-bold transition-all ${
                      plan.recommended
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-zinc-950 border border-zinc-800 text-white hover:bg-zinc-900"
                    }`}
                  >
                    Get Started
                  </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
