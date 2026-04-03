"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/laws", label: "Laws & Acts" },
    { href: "/buy-sell", label: "Buy/Sell Company" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  // Function to check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-[#053a49] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-2 py-4 flex items-center justify-between">
        {/* Logo - Fixed width container */}
        <div className="flex items-center w-[120px] md:w-[150px]">
          <img
            src={isScrolled ? "/images/logo copy.png" : "/images/logo.png"}
            alt="CorpInd Cart"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation - Flex grow to maintain position */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-white font-medium flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-[#f0c840] border-b-2 border-[#f0c840] pb-1"
                  : "hover:text-[#f0c840] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section - Fixed width container */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 w-[120px] md:w-[150px] justify-end">
          <Link
            href="/contact"
            className={`font-medium transition-colors whitespace-nowrap ${
              isActive("/contact")
                ? "text-[#f0c840] border-b-2 border-[#f0c840] pb-1"
                : "text-white hover:text-[#f0c840]"
            }`}
          >
            Contact
          </Link>
          <button className="bg-white text-[#053a49] px-4 py-2 rounded-sm font-medium hover:bg-[#f0c840] hover:text-[#053a49] transition whitespace-nowrap">
            Get Free Help
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
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
                  isActive(link.href)
                    ? "text-[#B8791B] font-medium py-2 border-l-4 border-[#B8791B] pl-3"
                    : "text-gray-700 hover:text-[#B8791B] py-2 pl-3 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Link */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={
                isActive("/contact")
                  ? "text-[#B8791B] font-medium py-2 border-l-4 border-[#B8791B] pl-3"
                  : "text-gray-700 hover:text-[#B8791B] py-2 pl-3 transition-colors"
              }
            >
              Contact
            </Link>

            {/* Mobile CTA Button */}
            <button className="bg-[#0C3B48] text-white px-4 py-3 rounded-sm font-medium hover:bg-[#f0c840] hover:text-[#053a49] transition mt-2 w-full">
              Get Free Help
            </button>
          </div>
        </div>
      )}
    </header>
  );
}