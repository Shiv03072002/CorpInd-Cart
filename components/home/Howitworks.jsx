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
    <section className="bg-[#0d2b2b] px-6 md:px-16 lg:px-24 py-20 font-sans">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          How It Works
        </h2>
        <p className="text-[#7aafaf] text-base">
          Three simple steps to professional compliance
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-0">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-col md:flex-row items-center flex-1">
            {/* Step block */}
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              {/* Number box */}
              <div className="w-20 h-20 rounded-2xl bg-[#c49a20] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-black text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
              <p className="text-[#7aafaf] text-sm leading-relaxed">{step.description}</p>
            </div>

            {/* Dashed connector — only between steps */}
            {idx < steps.length - 1 && (
              <div className="hidden md:flex flex-1 items-center justify-center px-2 mb-14">
                <div
                  className="w-full border-t-2 border-dashed border-[#c49a20] opacity-60"
                  style={{ minWidth: "60px" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}