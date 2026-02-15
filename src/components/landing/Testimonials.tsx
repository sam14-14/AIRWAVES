"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
      {
        name: "Rajesh Kumar",
        role: "Business Owner, Sector 12",
        content: "Switching to Airwaves Wifi was the best decision for my office in Karnal. The uptime is incredible, even during the rainy season.",
        rating: 5,
        avatar: "RK"
      },
      {
        name: "Priya Sharma",
        role: "Remote Software Engineer",
        content: "I need reliable internet for my daily scrums. Airwaves provides consistent speeds and the low latency is perfect for my work.",
        rating: 5,
        avatar: "PS"
      },
      {
        name: "Amit Verma",
        role: "Student, Model Town",
        content: "Best ISP in Haryana! The installation was quick and the Pro Fiber plan handles all my gaming and online classes without any lag.",
        rating: 5,
        avatar: "AV"
      }
    ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Don't just take our word for it. Join thousands of satisfied users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-zinc-900 p-8 shadow-sm border border-zinc-800 hover:border-red-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-8 h-8 w-8 text-zinc-800" />
              
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mb-8 text-zinc-400 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
