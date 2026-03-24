"use client";

import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fixed Upfront Pricing",
    description:
      "No hidden charges or unexpected legal fees. Transparency at every step.",
  },
  {
    title: "Expert Guidance",
    description:
      "Talk directly to experienced CAs, CSs, and Corporate Lawyers.",
  },
  {
    title: "Timely Deliverables",
    description: "We understand the value of time in business operations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F2F6F7] px-6 md:px-16 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* ── Left: Image + floating card ── */}
          <div className="relative w-full max-w-[460px] shrink-0 mx-auto lg:mx-0">
            {/* Main photo */}
            <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#b8b0a0]">
              <img
                src="https://plus.unsplash.com/premium_photo-1661663327020-32f583846094?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold floating card — overlaps bottom-right of image */}
            <div className="absolute bottom-[-20px] right-[-15px] md:bottom-[-32px] md:right-[-25px] rounded border-2 md:border-4 border-white text-white text-center shadow-2xl bg-[#F0A500] w-[140px] md:w-[180px] py-5 md:py-8 px-3 md:px-5">
              <p className="text-3xl md:text-4xl font-black leading-none">10+</p>
              <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 md:mt-2 leading-snug text-white/85">
                Years of<br />Excellence
              </p>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex-1 pt-0 lg:pt-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0d2b2b] leading-tight mb-6 md:mb-10">
              We Make Legal &amp; Business<br />Work Easy for You
            </h2>

            {/* Feature list */}
            <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 md:gap-4">
                  {/* Gold outlined circle check */}
                  <CheckCircle
                    size={20}
                    className="shrink-0 mt-0.5 text-[#F0A500] md:w-6 md:h-6"
                    strokeWidth={2}
                  />
                  <div>
                    <p className="font-bold text-[#0d2b2b] text-sm md:text-base mb-1">
                      {f.title}
                    </p>
                    <p className="text-[#5a6a6a] text-xs md:text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat cards */}
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center lg:justify-start">
              {/* 98% — teal left border */}
              <div className="w-[150px] md:w-[180px] bg-[#0C3B481A] rounded-xl px-4 md:px-6 py-4 md:py-5 border-l-4 border-l-[#0d2b2b]">
                <p className="text-[1.5rem] md:text-[1.8rem] font-black text-[#0d2b2b] leading-none">98%</p>
                <p className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-widest uppercase mt-2 text-[#41484B] leading-tight">
                  Client Retention
                </p>
              </div>

              {/* A+ — gold left border */}
              <div className="w-[150px] md:w-[180px] bg-[#F0A5001A] rounded-xl px-4 md:px-6 py-4 md:py-5 border-l-4 border-l-[#F0A500]">
                <p className="text-[1.5rem] md:text-[1.8rem] font-black text-[#F0A500] leading-none">A+</p>
                <p className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-widest uppercase mt-2 text-[#41484B] leading-tight">
                  Service Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}