"use client";

import {
  Building2,
  Gavel,
  Landmark,
  ReceiptText,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const tags = ["FEMA", "FCRA", "NGO DARPAN", "NITI AAYOG", "ISO 9001"];

const services = [
  {
    icon: <Gavel size={32} className="text-[#835500]" />,
    title: "Legal Matters",
    description:
      "Expert drafting of contracts, legal notices, and comprehensive corporate litigation support.",
  },
  {
    icon: <Landmark size={32} className="text-[#835500]" />,
    title: "IPR & Trademark",
    description:
      "Protecting your intellectual assets through trademark, patent, and copyright registrations.",
  },
  {
    icon: <ReceiptText size={32} className="text-[#835500]" />,
    title: "Tax & Accounting",
    description:
      "GST filing, Income Tax planning, and full-spectrum corporate accounting services.",
  },
  {
    icon: <FileCheck2 size={32} className="text-[#835500]" />,
    title: "Licenses & Registrations",
    description:
      "MSME, FSSAI, Import Export Code (IEC), and specialized central licenses.",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-[#ffffff] font-sans">
      {/* Specialized Filings Bar */}
      <div className="bg-[#f3f4f6]  px-6 md:px-16 lg:px-24 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#42484b] uppercase mr-2">
              Specialized Filings:
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#0C3B48] text-white text-xs font-semibold tracking-wider px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#163f3f] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-3">
              What We Do
            </h2>
            <div className="w-14 h-1 bg-[#c49a20] rounded-full" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
  {/* Featured Card — Company & LLP - 30% width (3/10 of grid) */}
  <div className="lg:col-span-3 bg-[#0d2b2b] rounded-xl p-8 flex flex-col justify-between min-h-[420px]">
    <div>
      <Building2 size={40} className="text-[#F0A500] mb-6" />
      <h3 className="text-2xl font-black text-white leading-tight mb-4">
        Company &amp; LLP Services
      </h3>
      <p className="text-[#8ab0b0] text-sm leading-relaxed">
        End-to-end formation and compliance for Private Limited, LLP,
        One Person Company, and Section 8 entities.
      </p>
    </div>
    <button className="flex items-center gap-2 text-[#F0A500] font-bold text-sm mt-8 hover:gap-3 transition-all">
      Learn More <ArrowRight size={16} />
    </button>
  </div>

  {/* Regular Service Cards - Remaining 70% (7/10 of grid) */}
  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
    {services.map((service) => (
      <div
        key={service.title}
        className="bg-[#F8F9FB] rounded-lg p-7 flex flex-col gap-3 "
      >
        <p className="text-[#835500]">
        {service.icon}
        </p>
        <h3 className="text-lg font-bold text-[#0d2b2b] mt-1">
          {service.title}
        </h3>
        <p className="text-[#6b7a7a] text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
    </div>
  );
}