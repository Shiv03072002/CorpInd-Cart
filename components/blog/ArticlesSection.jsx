"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TABS = [
  "All Article",
  "Company Law",
  "Income Tax",
  "GST & Indirect Tax",
  "Trademark & IP",
  "SEBI & Securities",
  "Compliance",
];

const FEATURED_ARTICLE = {
  category: "Company Law",
  title: "Key Changes in Companies Act 2026 Every Business Owner Must Know",
  excerpt:
    "The Companies Act 2026 introduces major amendments affecting board composition, CSR obligations, and annual filing deadlines. Here's what you need to prepare...",
  author: "Ananya Singh, CS",
  date: "March 31, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
};

function CategoryBadge({ label }) {
  return (
    <span className="w-fit inline-flex bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

export default function ArticlesSection() {
  const [activeTab, setActiveTab] = useState("All Article");

  return (
    <section className="bg-white py-16 px-8 font-sans">
      <div className="max-w-7xl mx-auto px-4" >
        {/* Tab Navigation - Fixed chip width issue with scroll on mobile */}
        <div className="flex flex-nowrap overflow-x-auto gap-2 justify-start lg:justify-center mb-14 pb-3 scrollbar-thin">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2.5 rounded-lg text-sm border border-gray-200 font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
                ${
                  activeTab === tab
                    ? "bg-[#00242E] text-white "
                    : "text-[#6b6b62] hover:text-[#1a1a18] hover:bg-gray-100"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Image - Full height cover */}
          <div className="relative w-full lg:w-[520px] h-[340px] lg:h-auto lg:min-h-[490px] flex-shrink-0 rounded-2xl overflow-hidden bg-gray-200 ">
            <img
              src={FEATURED_ARTICLE.image}
              alt={FEATURED_ARTICLE.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <CategoryBadge label={FEATURED_ARTICLE.category} />

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a18] leading-tight tracking-tight max-w-lg">
              {FEATURED_ARTICLE.title}
            </h2>

            <p className="text-[#6b6b62] text-base leading-relaxed max-w-2xl">
              {FEATURED_ARTICLE.excerpt}
            </p>

            <div className="border-t border-[#e8e6df] pt-5">
              <p className="text-[#6b6b62] text-[14px]">
                By{" "}
                <span className="font-semibold text-[#41484B]">
                  {FEATURED_ARTICLE.author}
                </span>{" "}
                &nbsp;•&nbsp; {FEATURED_ARTICLE.date} &nbsp;•&nbsp;{" "}
                {FEATURED_ARTICLE.readTime}
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-[#0C3B48]  text-white text-sm font-semibold px-6 py-3.5 rounded transition-all duration-200 w-fit hover:gap-3 group mt-3">
              Read Article
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}