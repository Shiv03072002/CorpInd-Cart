"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "/services", label: "Services" },
    { href: "/laws", label: "Laws & Acts" },
    { href: "/buy-sell", label: "Buy/Sell Company" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="w-full bg-[#053a49] text-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
  <img
    src="https://corpindcart.com/wp-content/uploads/2021/09/cropped-Logos1.png"
    alt="CorpInd Cart"
    className="h-8 md:h-10 w-auto"
  />
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-[#f0c840] border-b-2 border-[#f0c840] pb-1"
                  : "hover:text-[#0B3B3C] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="/contact"
            className="text-white font-medium ] transition-colors"
          >
            Contact
          </Link>
          <button className="bg-white text-[#053a49] px-4 py-2 rounded-sm font-medium hover:bg-[#0B2F3A] transition">
            Get Free Help
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.active
                    ? "text-[#B8791B] font-medium py-2 border-l-4 border-[#B8791B] pl-3"
                    : "text-gray-700 hover:text-[#0B3B3C] py-2 pl-3 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Contact Link */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-medium py-2 pl-3 hover:text-[#0B3B3C] transition-colors"
            >
              Contact
            </Link>
            
            {/* Mobile CTA Button */}
            <button className="bg-[#0C3B48] text-white px-4 py-3 rounded-sm font-medium hover:bg-[#0B2F3A] transition mt-2 w-full">
              Get Free Help
            </button>
          </div>
        </div>
      )}
    </header>
  );
}