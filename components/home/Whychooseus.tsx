"use client";

import { CheckCircle2, Users, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 size={22} className="text-[#c49a20] mt-0.5 shrink-0" />,
    title: "Fixed Upfront Pricing",
    description:
      "No hidden charges or unexpected legal fees. Transparency at every step.",
  },
  {
    icon: <CheckCircle2 size={22} className="text-[#c49a20] mt-0.5 shrink-0" />,
    title: "Expert Guidance",
    description:
      "Talk directly to experienced CAs, CSs, and Corporate Lawyers.",
  },
  {
    icon: <CheckCircle2 size={22} className="text-[#c49a20] mt-0.5 shrink-0" />,
    title: "Timely Deliverables",
    description: "We understand the value of time in business operations.",
  },
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "A+", label: "Service Rating" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F5F4F0] px-6 md:px-16 lg:px-24 py-20 font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Image + floating card */}
        <div className="relative w-full max-w-[480px] shrink-0 mx-auto lg:mx-0">
          {/* Photo */}
          <div className="w-full h-[480px] rounded-3xl overflow-hidden bg-[#c8bfa8] shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-[#b0a488] to-[#7a6a50] flex items-center justify-center">
              <div className="text-center text-white/50">
                <Users size={56} />
                <p className="text-sm mt-2">Professional Photo</p>
              </div>
            </div>
          </div>

          {/* Floating gold card */}
          <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 bg-[#c49a20] text-white rounded-2xl w-44 py-8 px-5 text-center shadow-2xl">
            <p className="text-4xl font-black leading-none">10+</p>
            <p className="text-xs font-bold tracking-widest uppercase mt-2 opacity-90 leading-snug">
              Years of Excellence
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1">
          <h2
            className="text-3xl md:text-4xl font-black text-[#0d2b2b] leading-tight mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            We Make Legal &amp; Business Work Easy for You
          </h2>

          {/* Feature list */}
          <div className="flex flex-col gap-7 mb-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                {f.icon}
                <div>
                  <p className="font-bold text-[#0d2b2b] text-base mb-1">{f.title}</p>
                  <p className="text-[#6b7a7a] text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 flex-wrap">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 min-w-[130px] bg-white border border-[#e8e2da] rounded-xl px-6 py-5"
              >
                <p className="text-3xl font-black text-[#0d2b2b]">{s.value}</p>
                <p className="text-xs font-bold tracking-widest uppercase text-[#c49a20] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}