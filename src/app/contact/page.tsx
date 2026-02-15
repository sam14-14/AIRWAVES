"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="text-red-500" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "Mon-Sat from 9am to 9pm",
    },
    {
      icon: <Mail className="text-red-500" />,
      title: "Email Us",
      details: "support@airwaveswifi.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="text-red-500" />,
      title: "Visit Us",
      details: "Main Market, Sector 12",
      subtext: "Karnal, Haryana 132001",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-500/30 selection:text-red-200">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Get in <span className="text-red-600">Touch</span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Have questions about our plans or need technical support? We're here to help you get the best internet experience in Karnal.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-500/50 transition-colors"
                >
                  <div className="bg-zinc-800 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-red-500 font-semibold mb-1">{item.details}</p>
                  <p className="text-sm text-zinc-500">{item.subtext}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-red-600 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Instant Support on WhatsApp</h2>
                <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
                  Scan the code or click the button below to start a conversation with our support team immediately.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-100 transition-colors shadow-xl"
                >
                  <MessageSquare size={24} />
                  Connect on WhatsApp
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-red-900/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
