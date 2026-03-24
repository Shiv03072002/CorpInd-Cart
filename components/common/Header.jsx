"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-[#0B3B3C]">
          CorpInd Cart
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="text-[#B8791B] border-b-2 border-[#B8791B] pb-1"
          >
            Home
          </Link>

          <Link href="/services" className="hover:text-[#0B3B3C]">
            Services
          </Link>

          <Link href="/laws" className="hover:text-[#0B3B3C]">
            Laws & Acts
          </Link>

          <Link href="/buy-sell" className="hover:text-[#0B3B3C]">
            Buy/Sell Company
          </Link>

          <Link href="/blogs" className="hover:text-[#0B3B3C]">
            Blogs
          </Link>

          <Link href="/about" className="hover:text-[#0B3B3C]">
            About
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6 ">
          <Link
            href="/contact"
            className="text-gray-700 font-medium hover:text-[#0B3B3C]"
          >
            Contact
          </Link>

          <button className="bg-[#0C3B48]  text-white px-4 py-2 rounded-sm font-medium hover:opacity-90 transition">
            Get Free Help
          </button>
        </div>

      </div>
    </header>
  );
}