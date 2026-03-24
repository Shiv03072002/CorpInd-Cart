"use client";

import { Globe, Mail, Phone } from "lucide-react";

const quickLinks = [
  "Registration Services",
  "Trademark Filings",
  "Accounting Support",
  "Annual Compliances",
];

const govtLinks = [
  "MCA Portal",
  "Income Tax Dept",
  "GST Council",
  "IP India",
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#053a49] px-6 md:px-16 lg:px-24 pt-16 pb-8 font-sans">
        <div className="max-w-7xl mx-auto py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
  <img
    src="https://corpindcart.com/wp-content/uploads/2021/09/cropped-Logos1.png"
    alt="CorpInd Cart"
    className="h-8 md:h-10 w-auto"
  />
</div>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                Premium legal and compliance solutions for modern businesses in India.
                Your sovereign counsel for all corporate matters.
              </p>
              <div className="flex gap-3">
                {[Globe, Mail, Phone].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 bg-[#FFFFFF0D] h-10 rounded-lg border border-[#1e3e3e] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#c49a20] transition-colors"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg tracking-wide mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#94A3B8] text-base hover:text-[#c49a20] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Govt Links */}
            <div>
              <h4 className="text-white font-bold text-lg tracking-wide mb-5">Govt Links</h4>
              <ul className="flex flex-col gap-3">
                {govtLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#94A3B8] text-base hover:text-[#c49a20] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg tracking-wide mb-5">Contact Info</h4>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-4">
                4th Floor, Sector 12, Dwarka,<br />New Delhi – 110075, India
              </p>
              <p className="text-base mb-2">
                <span className="text-[#c49a20] font-semibold">Email: </span>
                <a href="mailto:corpindcart@gmail.com" className="text-[#94A3B8] hover:text-white transition-colors">
                  corpindcart@gmail.com
                </a>
              </p>
              <p className="text-base">
                <span className="text-[#c49a20] font-semibold">Phone: </span>
                <a href="tel:+91 8595840841" className="text-[#94A3B8] hover:text-white transition-colors">
                  +91 8595840841
                </a>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1e3e3e] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#94A3B8] text-sm">
              © 2026 CorpInd Cart. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#94A3B8] text-sm font-semibold tracking-wide uppercase hover:text-[#c49a20] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}