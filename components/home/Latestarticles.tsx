"use client";

import { ArrowRight, User, Bell, Calendar, Clock } from "lucide-react";

const featuredArticle = {
  tag: "Compliance Guide",
  title: "Key Changes in Companies Act 2026 Every Startup Should Know",
  excerpt:
    "Navigating the new regulatory landscape in India requires a deep understanding of the recent amendments aimed at ease of doing business. From simplified compliance procedures to enhanced corporate governance, these changes will reshape how businesses operate in 2026 and beyond.",
  author: "Rajesh Kumar",
  role: "Legal Consultant",
  date: "Oct 12, 2026",
  readTime: "5 min read",
};

const sideArticles = [
  {
    title: "5 Benefits of Trademark Registration for Small Businesses",
    date: "Oct 10, 2026",
    readTime: "3 min read",
  },
  {
    title: "Understanding GST Composition Scheme for Small Traders",
    date: "Oct 08, 2026",
    readTime: "4 min read",
  },
  {
    title: "New CSR Compliance Rules for Companies in 2026",
    date: "Oct 05, 2026",
    readTime: "3 min read",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-2">
              Latest Articles
            </h2>
            <p className="text-[#6b7a7a] text-base">
              Stay updated with legal insights and business trends
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#835500] font-semibold text-sm hover:gap-3 transition-all group">
            View All Posts 
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Articles Grid - 60/40 Split */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Featured Article - 60% */}
          <div className="lg:w-[60%] group">
            {/* Image */}
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-[#c8bfa8] mb-6">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop"
                alt="Featured article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tag */}
              <span className="absolute top-4 left-4 bg-[#835500] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                {featuredArticle.tag}
              </span>
            </div>

            {/* Text */}
            <h3 className="text-2xl md:text-3xl font-black text-[#0d2b2b] mb-3 leading-snug group-hover:text-[#835500] transition-colors">
              {featuredArticle.title}
            </h3>
            <p className="text-[#6b7a7a] text-sm leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ddd8ce] flex items-center justify-center">
                  <User size={18} className="text-[#8a9a9a]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d2b2b]">
                    {featuredArticle.author}
                  </p>
                  <p className="text-xs text-[#8a9a9a]">
                    {featuredArticle.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8a9a9a]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Side Articles - 40% */}
          <div className="lg:w-[40%] flex flex-col gap-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#0d2b2b]">Popular Articles</h3>
              <span className="text-xs text-[#835500] font-semibold">Latest →</span>
            </div>
            {sideArticles.map((article, idx) => (
              <div
                key={article.title}
                className="flex gap-4 items-start rounded-xl p-4 hover:bg-gray-50 transition-all cursor-pointer group border border-[#e8e2da] hover:border-[#835500]/30"
              >
                {/* Thumbnail */}
                <div className="w-24 h-20 rounded-xl bg-[#c8bfa8] overflow-hidden shrink-0">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      idx === 0 ? "1450101499163-c8848c66ca85" : 
                      idx === 1 ? "1589578228447-e1a4e481c6e8" : 
                      "1557804506-669a67965ba0"
                    }?w=200&h=150&fit=crop`}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col flex-1 gap-1">
                  <p className="text-sm font-bold text-[#0d2b2b] leading-snug group-hover:text-[#835500] transition-colors line-clamp-2">
                    {article.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-[#8a9a9a] flex items-center gap-1">
                      <Calendar size={10} />
                      {article.date}
                    </p>
                    <p className="text-xs text-[#8a9a9a] flex items-center gap-1">
                      <Clock size={10} />
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Updates Section */}
        <div className="bg-gradient-to-r from-[#062F34] to-[#0A4046] rounded-2xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#F4B000]/20 p-2 rounded-lg">
              <Bell className="text-[#F4B000]" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white">
              LATEST GOVERNMENT & TAX UPDATES
            </h3>
          </div>

          {/* Updates List */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start md:items-center gap-5 pb-5 border-b border-[#0E4A4F] flex-col md:flex-row">
              <div className="bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                15 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Extension of Deadline for GSTR-9 and GSTR-9C for FY 2022-23
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start md:items-center gap-5 flex-col md:flex-row">
              <div className="bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                12 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                New Regulations for FCRA Renewal Filings by NGOs - Important
                Changes for Non-Profit Organizations
              </p>
            </div>

            {/* Item 3 - New */}
            <div className="flex items-start md:items-center gap-5 pt-2 flex-col md:flex-row">
              <div className="bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                08 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                MCA Introduces New Forms for DIR-3 KYC and Active Compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}