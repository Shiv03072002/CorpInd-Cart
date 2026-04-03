// ServicesSection.jsx
// Next.js + Tailwind CSS — Services Grid with Tab Filter & Hover Left Border

"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Company/LLP Services",
  "IPR Services",
  "Legal Services",
  "Accounting Services",
  "License And Registrations",
  "Miscellaneous Services",
];

const services = {
  "Company/LLP Services": [
    {
      title: "Incorporation Of Company/LLP",
      description:
        "Register your company or LLP with complete legal support from start to finish.",
    },
    {
      title: "Annual Filing Compliances",
      description:
        "Stay compliant with all required annual filings and avoid penalties.",
    },
    {
      title: "ROC Services",
      description:
        "Handle ROC filings, updates, and compliance requirements with ease.",
    },
    {
      title: "Retainership Services",
      description:
        "Ongoing legal and compliance support for your business.",
    },
    {
      title: "XBRL Services",
      description:
        "Accurate preparation and filing of XBRL reports as per regulations.",
    },
    {
      title: "Filing Under Income Tax And SEBI Laws",
      description:
        "Complete filings under income tax and SEBI regulations.",
    },
    {
      title: "Search Report",
      description:
        "Get detailed company records and background verification reports.",
    },
    {
      title: "Due Diligence Report",
      description:
        "Thorough analysis of financial and legal status before business decisions.",
    },
  ],
  "IPR Services": [
    {
      title: "Trademark Registration",
      description: "Protect your brand identity with trademark registration.",
    },
    {
      title: "Copyright Registration",
      description: "Secure your creative works with copyright protection.",
    },
    {
      title: "Patent Filing",
      description: "File and manage patents for your inventions.",
    },
  ],
  "Legal Services": [
    {
      title: "Contract Drafting",
      description: "Professional drafting and review of all business contracts.",
    },
    {
      title: "Legal Consultation",
      description: "Expert legal advice for individuals and businesses.",
    },
  ],
  "Accounting Services": [
    {
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping for your business.",
    },
    {
      title: "GST Filing",
      description: "End-to-end GST return filing and compliance.",
    },
  ],
  "License And Registrations": [
    {
      title: "FSSAI Registration",
      description: "Get your food business licensed under FSSAI.",
    },
    {
      title: "MSME Registration",
      description: "Register your business as an MSME for benefits.",
    },
  ],
  "Miscellaneous Services": [
    {
      title: "Business Advisory",
      description: "Strategic advice for growing your business.",
    },
    {
      title: "Compliance Audit",
      description: "Comprehensive audit of your compliance posture.",
    },
  ],
};

// Document icon SVG
function DocIcon({ active }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className={active ? "text-white" : "text-gray-500"}
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Company/LLP Services");

  const currentServices = services[activeTab] ?? [];

  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-md text-sm font-medium border transition-all duration-200 cursor-pointer
              ${
                activeTab === cat
                  ? "bg-[#0d3d38] text-white border-[#0d3d38]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#0d3d38] hover:text-[#0d3d38]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentServices.map(({ title, description }) => (
          <ServiceCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
     className="relative bg-[#f9f9f9] rounded-xl p-6 flex flex-col gap-4 
transition-all duration-300 cursor-pointer group 
border-l-4 border-l-transparent 
hover:border-l-[#F0A500]"
    >
      {/* Left border accent on hover */}
     

      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300
          ${hovered ? "bg-[#0d3d38]" : "bg-white"}`}
      >
        <DocIcon active={hovered} />
      </div>

      {/* Title */}
      <h3 className="text-[#1a1a1a] font-bold text-base leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#41484B] text-sm leading-relaxed">{description}</p>

      {/* CTA */}
      <Link
        href="#"
        className="text-[#835500] text-sm font-semibold flex items-center gap-1 mt-auto hover:gap-2 transition-all duration-200"
      >
        Get Started <span>›</span>
      </Link>
    </div>
  );
}