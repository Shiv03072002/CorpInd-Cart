import Link from "next/link";
import { BadgeCheck, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#00242E] py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          {/* Trust pill */}
          <div className="inline-flex w-fit items-center gap-2 bg-[#F5B8001F] text-[#F0A500] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F0A500] animate-pulse" />
            Trusted by 2500+ Businesses
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            About CorpInd Cart
          </h1>

          {/* Subheading */}
          <p className="text-[#FFFFFFA6] text-base leading-relaxed max-w-md">
            Your one-stop partner for legal, tax, and compliance services, so
            you can stay focused on building your business.
          </p>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#FFFFFFCC] mt-2">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">&gt;</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
        </div>

        {/* Right: Floating Badges */}
        <div className=" flex flex-col items-end gap-6 pr-0">
          {/* 100% Compliance Rate */}
          <div className="absolute right-30 top-4 flex items-center gap-4 bg-amber-500 text-white rounded-2xl px-6 py-5 shadow-xl w-60">
            <BadgeCheck className="w-8 h-8 flex-shrink-0" strokeWidth={1.5} />

            <div>
              <p className="text-2xl font-extrabold leading-none">100%</p>
              <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-amber-100">
                Compliance Rate
              </p>
            </div>

            {/* dashed line */}
            <div
              className="absolute left-full top-1/2 w-[300px] h-[2px] 
bg-[repeating-linear-gradient(to_right,#9ca3af_0_12px,transparent_12px_20px)] 
-translate-y-1/2"
            ></div>
          </div>

          {/* Fast Track */}
          <div className="absolute right-10 top-38 flex items-center gap-4 bg-white text-[#1a2e44] rounded-2xl px-6 py-5 shadow-xl w-64">
            <Timer
              className="w-7 h-7 text-[#835500] flex-shrink-0"
              strokeWidth={1.5}
            />

            <div>
              <p className="text-lg font-bold leading-none">Fast-Track</p>
              <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-[#41484B]">
                Approvals
              </p>
            </div>

            {/* dashed line */}
            <div
              className="absolute left-full top-1/2 w-[300px] h-[2px] 
bg-[repeating-linear-gradient(to_right,#9ca3af_0_12px,transparent_12px_20px)] 
-translate-y-1/2"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
