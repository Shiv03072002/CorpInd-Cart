"use client";

import { ArrowRight, User } from "lucide-react";
import { Bell } from "lucide-react";

const featuredArticle = {
  tag: "Compliance Guide",
  title: "Key Changes in Companies Act 2026 Every Startup Should Know",
  excerpt:
    "Navigating the new regulatory landscape in India requires a deep understanding of the recent amendments aimed at ease of doing business...",
  author: "Rajesh Kumar",
  role: "Legal Consultant",
  date: "Oct 12, 2026",
};

const sideArticles = [
  {
    title: "5 Benefits of Trademark Registration for Small...",
    date: "Oct 10, 2026",
  },
  {
    title: "Understanding GST Composition Scheme for...",
    date: "Oct 08, 2026",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 py-20 font-sans">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
        <div>
          <h2
            className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Latest Articles
          </h2>
          <p className="text-[#6b7a7a] text-sm">
            Stay updated with legal insights and business trends
          </p>
        </div>
        <button className="flex items-center gap-1.5 text-[#c49a20] font-semibold text-sm hover:gap-2.5 transition-all mt-1">
          View All Posts <ArrowRight size={15} />
        </button>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Featured Article */}
        <div className="flex-[1.4]">
          {/* Image */}
          <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-[#c8bfa8] mb-6 shadow">
            <div className="w-full h-full bg-gradient-to-br from-[#a09080] to-[#6a5a40] flex items-center justify-center">
              <div className="text-center text-white/40">
                <User size={48} />
                <p className="text-xs mt-2">Featured Photo</p>
              </div>
            </div>
            {/* Tag */}
            <span className="absolute top-4 left-4 bg-[#8a6a1a] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
              {featuredArticle.tag}
            </span>
          </div>

          {/* Text */}
          <h3
            className="text-2xl font-black text-[#0d2b2b] mb-3 leading-snug"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {featuredArticle.title}
          </h3>
          <p className="text-[#6b7a7a] text-sm leading-relaxed mb-6">
            {featuredArticle.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ddd8ce] flex items-center justify-center">
              <User size={18} className="text-[#8a9a9a]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0d2b2b]">
                {featuredArticle.author}
              </p>
              <p className="text-xs text-[#8a9a9a]">
                {featuredArticle.role} · {featuredArticle.date}
              </p>
            </div>
          </div>
        </div>

        {/* Side Articles */}
        <div className="flex-[0.7] flex flex-col gap-5 justify-start pt-1">
          {sideArticles.map((article) => (
            <div
              key={article.title}
              className="flex gap-4 items-start  rounded-2xl p-4 hover:shadow-sm transition-shadow cursor-pointer group border border-[#e8e2da]"
            >
              {/* Thumbnail */}
              <div className="w-24 h-20 rounded-xl bg-[#c8bfa8] overflow-hidden shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-[#b0a080] to-[#7a6a50] flex items-center justify-center">
                  <User size={20} className="text-white/40" />
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col  h-full gap-1">
                <p className="text-sm font-bold text-[#0d2b2b] leading-snug group-hover:text-[#c49a20] transition-colors">
                  {article.title}
                </p>
                <p className="text-xs text-[#8a9a9a] mt-1">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16">
      <div className="max-w-6xl  ">
        
        <div className="bg-[#062F34] rounded-3xl p-8 md:p-12 text-white">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Bell className="text-[#F4B000]" size={22} />
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              LATEST GOVERNMENT & TAX UPDATES
            </h3>
          </div>

          {/* Updates List */}
          <div className="space-y-6">
            
            {/* Item 1 */}
            <div className="flex items-center gap-5 pb-5 border-b border-[#0E4A4F]">
              
              <div className="bg-[#F4B000] text-black text-xs font-semibold px-3 py-1 rounded">
                15 OCT
              </div>

              <p className="text-gray-200">
                Extension of Deadline for GSTR-9 and GSTR-9C for FY 2022-23
              </p>

            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-5">
              
              <div className="bg-[#F4B000] text-black text-xs font-semibold px-3 py-1 rounded">
                12 OCT
              </div>

              <p className="text-gray-200">
                New Regulations for FCRA Renewal Filings by NGOs
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
    </section>
  );
}