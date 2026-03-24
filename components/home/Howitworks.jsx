"use client";

const steps = [
  {
    number: "01",
    title: "Fill Simple Form",
    description:
      "Provide basic details about your business and goals through our simplified online interface.",
  },
  {
    number: "02",
    title: "Expert Verification",
    description:
      "Our experts review your documents and prepare all necessary legal filings for your approval.",
  },
  {
    number: "03",
    title: "Final Delivery",
    description:
      "Get your digital and physical certificates delivered with a full compliance report.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#00242E] px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            How It Works
          </h2>
          <p className="text-[#7aafaf] text-sm md:text-base">
            Three simple steps to professional compliance
          </p>
        </div>

        {/* Steps - Desktop Layout with Dashed Lines */}
        <div className="hidden md:relative md:flex md:flex-row md:items-start md:justify-between">
          {/* Dashed Line Connector between step 1 and 2 */}
          <div className="absolute top-10 left-[calc(16.66%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-[#F0A500]"></div>
          
          {/* Dashed Line Connector between step 2 and 3 */}
          <div className="absolute top-10 left-[calc(50%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-[#F0A500]"></div>

          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center max-w-xs mx-auto w-full z-10"
              style={{ width: "33.33%" }}
            >
              {/* Number Box */}
              <div className="w-20 h-20 rounded-2xl bg-[#F0A500] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-black text-white">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#7aafaf] text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Steps - Mobile Layout (Stacked) */}
        <div className="flex flex-col md:hidden gap-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              {/* Number Box */}
              <div className="w-20 h-20 rounded-2xl bg-[#F0A500] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-black text-white">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#7aafaf] text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Optional Connector Line between steps on mobile */}
              {idx < steps.length - 1 && (
                <div className="w-px h-12 bg-[#F0A500]/40 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}