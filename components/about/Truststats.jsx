const stats = [
  { value: "432", label: "COMPANY INCORPORATION" },
  { value: "218", label: "TRADEMARK" },
  { value: "189", label: "LICENSES" },
  { value: "234", label: "GST REGISTRATIONS" },
];

export default function TrustStats() {
  return (
    <section className="w-full bg-[#f4f7f6] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative circle bottom-left */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#dde8e4] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading + Description */}
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2e44] leading-tight">
              Why Businesses Trust <br /> CorpInd Cart
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              We make compliance simple, reliable, and stress free so you can
              focus on growing your business.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-7 flex flex-col gap-2 shadow-sm border border-gray-100 border-l-4 border-l-[#1a2e44]"
              >
                <span className="text-5xl font-extrabold text-[#1a2e44] leading-none">
                  {value}
                </span>
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}