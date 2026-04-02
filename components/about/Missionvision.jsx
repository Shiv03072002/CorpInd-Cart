import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00242E] leading-tight">
              Mission &amp; Vision
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center lg:pt-14">
            <p className="text-[#41484B] text-base leading-relaxed max-w-lg">
              Everything we do is based on one simple idea: make compliance easy
              so businesses can grow freely.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mission Card — Dark */}
          <div className="relative bg-[#00242E] rounded-2xl p-9 flex flex-col gap-6 overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-[#fbaf0b1a] pointer-events-none" />

            <div className="relative z-10 w-11 h-11 flex items-center justify-center">
              <Target className="w-8 h-8 text-[#F0A500]" strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Make legal and financial work easy so any business can stay
                compliant, move faster, and grow with confidence.
              </p>
            </div>
          </div>

          {/* Vision Card — Light */}
          <div className="relative bg-[#f4f7f6] rounded-2xl p-9 flex flex-col gap-6 overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-[#0C3B480F] pointer-events-none" />

            <div className="relative z-10 w-11 h-11 flex items-center justify-center">
              <Eye className="w-8 h-8 text-[#835500]" strokeWidth={1.5} />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#41484B]">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We aim to be a trusted compliance and advisory partner for
                startups and growing businesses with speed, clarity, and real
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}