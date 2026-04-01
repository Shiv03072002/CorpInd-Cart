import Link from "next/link";
import { BadgeCheck, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#0d2333] py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#112840] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          {/* Trust pill */}
          <div className="inline-flex w-fit items-center gap-2 bg-[#1a3a50] border border-[#2a4a60] text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Trusted by 2500+ Businesses
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            About CorpInd Cart
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Your one-stop partner for legal, tax, and compliance services, so
            you can stay focused on building your business.
          </p>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">&gt;</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
        </div>

        {/* Right: Floating Badges */}
        <div className="flex flex-col items-end gap-4">
          {/* 100% Compliance Rate */}
          <div className="flex items-center gap-4 bg-amber-500 text-white rounded-2xl px-6 py-5 shadow-xl w-64">
            <BadgeCheck className="w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-2xl font-extrabold leading-none">100%</p>
              <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-amber-100">
                Compliance Rate
              </p>
            </div>
          </div>

          {/* Dashed connector */}
          <div className="w-48 border-t border-dashed border-gray-600 mr-8" />

          {/* Fast-Track Approvals */}
          <div className="flex items-center gap-4 bg-white text-[#1a2e44] rounded-2xl px-6 py-5 shadow-xl w-64">
            <Timer
              className="w-7 h-7 text-amber-500 flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-lg font-bold leading-none">Fast-Track</p>
              <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-gray-400">
                Approvals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}