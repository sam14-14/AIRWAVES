"use client";

import Link from "next/link";
import { Wifi, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-zinc-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="rounded-xl bg-red-600 p-2 text-white">
                <Wifi size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Airwaves <span className="text-red-600">WIFI Solutions</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Airwaves WIFI Solutions is a next-generation ISP dedicated to providing the fastest and most reliable internet services in Karnal, Haryana.
              Join thousands of happy customers today.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-6 space-y-4">
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Residential Fiber</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Business Solutions</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Gaming Internet</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Smart Home WiFi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-6 space-y-4">
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-red-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h3>
            <p className="mt-6 text-sm text-zinc-400">
              Get the latest updates and exclusive offers delivered to your inbox.
            </p>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-red-600 focus:outline-none transition-colors"
                />
                <button type="submit" className="rounded-xl bg-red-600 py-3 text-sm font-bold text-white transition-all hover:bg-red-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-900 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-zinc-500">
              &copy; {currentYear} Airwaves WIFI Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
