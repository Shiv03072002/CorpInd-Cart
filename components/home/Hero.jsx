"use client";

import {
  BadgeCheck,
  Timer,
  Users,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className=" bg-[#FFFFFF] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Trusted Badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 bg-[#8355001A] border border-[#e2ddd5] rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-[#835500] uppercase ">
            <span className="w-2 h-2 rounded-full bg-[#835500] inline-block" />
            Trusted by 2500+ Businesses
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] font-black leading-[1.05] text-[#0d2b2b] mb-6">
              One Place for All Your Business &amp; Legal Needs
            </h1>

            <p className="text-[#4a5a5a] text-base md:text-lg leading-relaxed mb-10 max-w-md">
              We handle company registration, trademark, GST, licenses, and legal
              matters so you can focus on building your empire from the heart of
              New Delhi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <button className="flex items-center gap-2 bg-[#0d2b2b] text-white px-7 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-[#163f3f] transition-colors shadow-md">
                See All Services
                <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 border-2 border-[#0d2b2b] text-[#0d2b2b] px-7 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-[#0d2b2b] hover:text-white transition-colors">
                <MessageCircle size={16} />
                Talk to Us
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 flex-wrap">
              {[
                { value: "800+", label: "Trademarks" },
                { value: "500+", label: "Companies Registered" },
                { value: "1200+", label: "GST Filings" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#c49a20] text-2xl font-black">{stat.value}</p>
                  <p className="text-[#6b7a7a] text-xs font-semibold tracking-widest uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="flex-1 relative w-full max-w-lg min-h-[480px]">
            {/* Top image */}
            <div className="absolute z-9 top-0 right-0 w-[62%] h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=450&fit=crop"
                alt="Professional business team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="absolute bottom-8 left-0 w-[58%] h-[260px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}

            {/* 100% Compliance Rate */}
            <div className="absolute top-6 left-10 bg-[#835500] text-white rounded-xl px-4 py-5 flex items-center gap-3 shadow-lg z-10">
              <BadgeCheck size={22} className="text-[#f0c840]" />
              <div>
                <p className="text-lg font-black leading-none">100%</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#f0c840] mt-0.5">
                  Compliance Rate
                </p>
              </div>
            </div>

            {/* Fast-Track Approvals */}
            <div className="absolute top-[44%] left-48 bg-white rounded-xl px-4 py-4 flex items-center gap-3 shadow-xl z-10 border border-[#e8e2da]">
              <Timer size={22} className="text-[#c49a20]" />
              <div>
                <p className="text-sm font-black text-[#0d2b2b]">Fast-Track</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9a9a]">
                  Approvals
                </p>
              </div>
            </div>

            {/* 15+ Legal Experts */}
            <div className="absolute bottom-[18%] right-10 bg-[#0d2b2b] text-white rounded-xl px-4 py-5 flex items-center gap-3 shadow-xl z-10">
              <Users size={20} className="text-[#c49a20]" />
              <div>
                <p className="text-lg font-black leading-none">15+</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7aafaf] mt-0.5">
                  Legal Experts
                </p>
              </div>
            </div>

            {/* Based in New Delhi */}
            <div className="absolute bottom-0 left-[30%] bg-white rounded-xl px-4 py-5 flex items-center gap-2 shadow-lg z-10 border border-[#e8e2da]">
              <MapPin size={16} className="text-[#c49a20]" />
              <p className="text-sm font-semibold text-[#0d2b2b]">Based in New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}