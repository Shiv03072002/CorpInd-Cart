"use client";

import { useState } from "react";
import {
  Building2,
  FileSignature,
  UserCircle,
  Globe,
  ShieldCheck,
  Receipt,
  BadgeCheck,
  ScrollText,
  Scale,
  FilePen,
  ClipboardList,
  BookOpen,
} from "lucide-react";

const categories = [
  "Company & LLP",
  "IPR & Trademark",
  "GST & Income Tax",
  "Annual Compliance",
  "Legal Drafting",
];

const servicesByCategory = {
  "Company & LLP": [
    {
      icon: <Building2 size={28} className="text-[#00242E]" />,
      title: "Pvt Ltd Registration",
      description: "Fast-track incorporation for new startups.",
    },
    {
      icon: <FileSignature size={28} className="text-[#00242E]" />,
      title: "LLP Incorporation",
      description: "Legal structure for professional service firms.",
    },
    {
      icon: <UserCircle size={28} className="text-[#00242E]" />,
      title: "One Person Company",
      description: "Enjoy benefits of a company as a sole owner.",
    },
    {
      icon: <Globe size={28} className="text-[#00242E]" />,
      title: "Section 8 (NGO)",
      description: "Registration for non-profit organizations.",
    },
    {
      icon: <ShieldCheck size={28} className="text-[#00242E]" />,
      title: "Trademark Filing",
      description: "Protect your brand name and logo identity.",
    },
    {
      icon: <Receipt size={28} className="text-[#00242E]" />,
      title: "GST Registration",
      description: "Simple GST setup for traders and services.",
    },
  ],
  "IPR & Trademark": [
    {
      icon: <ShieldCheck size={28} className="text-[#00242E]" />,
      title: "Trademark Registration",
      description: "Register your brand identity with full legal protection.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "Copyright Filing",
      description: "Secure your creative works under Indian copyright law.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Patent Application",
      description: "File provisional or complete patents for inventions.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Trademark Objection",
      description: "Expert response to trademark examination reports.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "IP Litigation Support",
      description: "Legal support for IP disputes and infringement cases.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Design Registration",
      description: "Protect the visual design of your products.",
    },
  ],
  "GST & Income Tax": [
    {
      icon: <Receipt size={28} className="text-[#00242E]" />,
      title: "GST Registration",
      description: "Hassle-free GST setup for all business types.",
    },
    {
      icon: <ClipboardList size={28} className="text-[#00242E]" />,
      title: "GST Return Filing",
      description: "Monthly, quarterly, and annual GST return filing.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Income Tax Filing",
      description: "ITR filing for individuals, firms, and companies.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liability legally.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "GST Notices & Appeals",
      description: "Expert handling of GST notices and litigation.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "TDS Compliance",
      description: "TDS deduction, filing, and compliance management.",
    },
  ],
  "Annual Compliance": [
    {
      icon: <ClipboardList size={28} className="text-[#00242E]" />,
      title: "ROC Annual Filing",
      description: "File annual returns with the Registrar of Companies.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Board Meetings",
      description: "Minutes, resolutions, and board meeting compliance.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Director KYC",
      description: "Annual Director KYC filing with MCA portal.",
    },
    {
      icon: <Building2 size={28} className="text-[#00242E]" />,
      title: "LLP Annual Return",
      description: "Form 11 & Form 8 filing for LLP entities.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Statutory Audit",
      description: "Audit support for companies under Companies Act.",
    },
    {
      icon: <Globe size={28} className="text-[#00242E]" />,
      title: "FEMA Compliance",
      description: "Reporting and compliance for foreign transactions.",
    },
  ],
  "Legal Drafting": [
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Founders Agreement",
      description: "Define roles, equity, and responsibilities clearly.",
    },
    {
      icon: <FileSignature size={28} className="text-[#00242E]" />,
      title: "NDA Drafting",
      description: "Non-disclosure agreements for business partnerships.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Employment Contracts",
      description: "Legally sound offer letters and employment terms.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "Legal Notices",
      description: "Draft and send legal notices for disputes.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "Shareholder Agreement",
      description: "Protect investor and promoter rights effectively.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "MOU Drafting",
      description: "Memorandum of Understanding for business tie-ups.",
    },
  ],
};

export default function ServicesDirectory() {
  const [activeTab, setActiveTab] = useState("Company & LLP");
  const services = servicesByCategory[activeTab] || [];

  return (
    <section className="bg-[#F2F6F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-4">
            Our Services Directory
          </h2>
          <p className="text-[#6b7a7a] text-base max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive list of specialized business and legal
            solutions designed for Indian entrepreneurs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-[#0d2b2b] text-white"
                  : "bg-white text-[#0d2b2b] hover:bg-[#e8e2da]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-7 flex flex-col gap-3 transition-colors hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00242E0D] flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2b] mt-1">
                {service.title}
              </h3>
              <p className="text-[#6b7a7a] text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <button className="flex items-center gap-1 text-[#835500] font-semibold text-sm mt-2 hover:gap-2 transition-all w-fit">
                Get Started
                <span className="text-base leading-none">&rsaquo;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}