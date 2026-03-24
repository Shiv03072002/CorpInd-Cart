import { Quote, User } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team at CorpInd Cart handled our trademark registration with absolute professionalism. They made a complex process seem effortless.",
    name: "Sanjay Mehra",
    role: "CEO, TechVistara",
  },
  {
    quote:
      "Best legal partner in Delhi. Their compliance services for our LLP have been spot on for the last 3 years. Highly recommended.",
    name: "Ananya Sharma",
    role: "Founder, Bloom Designs",
  },
  {
    quote:
      "Their accounting and GST filing services saved us from multiple penalties. Proactive and very knowledgeable team.",
    name: "Vikram Singh",
    role: "Director, SteelCore Ltd",
  },
  {
    quote:
      "Exceptional service and timely delivery. Their team went above and beyond to ensure our company registration was completed smoothly.",
    name: "Priya Mehta",
    role: "Founder, EcoSolutions",
  },
];

export default function TestimonialsAndCTA() {
  return (
    <div className="bg-[#F2F6F7]">
      {/* ── Testimonials ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black text-[#0d2b2b] mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-9 flex flex-col justify-between relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-[rgba(131,85,0,0.20)]">
                  <Quote size={42} strokeWidth={2.5} className="transform scale-x-[-1]" />
                </div>

                <p className="text-sm text-[#3a4a4a] leading-relaxed mb-8 pr-7">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-full bg-[#ddd8ce] flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <User size={20} className="text-[#8a9a9a]" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#0d2b2b] mb-0.5">
                      {t.name}
                    </p>
                    <p className="text-[0.65rem] font-bold tracking-[0.09em] uppercase text-[#c49a20]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#0d2b2b] px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 max-w-[520px]">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start or Grow<br />Your Business?
              </h2>
              <p className="text-base text-[#8ab0b0] leading-relaxed">
                Contact our New Delhi office today for a free consultation with our senior partners.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex flex-col items-center gap-3 flex-shrink-0">
              <button className="bg-[#c49a20] hover:bg-[#d4aa30] text-white font-bold px-10 py-4 rounded-xl text-base tracking-wide transition-colors">
                Get a Free Quote
              </button>
              <p className="text-xs text-[#7aafaf] tracking-wide uppercase text-center">
                OR CALL  +91 8595840841
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}