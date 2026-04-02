import { Laptop, ClipboardList, IndianRupee, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Legal Services",
    description:
      "Company registration, ROC compliance, trademark filing, and complete legal support for your business.",
  },
  {
    icon: ClipboardList,
    title: "Taxation",
    description:
      "GST registration, ITR filing, TDS returns, and complete tax advisory to keep your business fully compliant.",
  },
  {
    icon: IndianRupee,
    title: "Accounting",
    description:
      "Bookkeeping, financial statements, and accounting support to keep your finances accurate and organized.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description:
      "XBRL filings, annual returns, and secretarial compliance to keep your business running smoothly.",
  },
];

export default function CoreServices() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative circle */}
    

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <span className="bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2e44]">
            Our Core Services
          </h2>
          <p className="text-[#41484B] text-base max-w-xl">
            Everything your business needs, handled by experts in one place.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F9FB] rounded-2xl p-7 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300 "
            >
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#FFFFFF]">
                <Icon className="w-5 h-5 text-[#1a2e44]" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-[#1a2e44] mb-2">
                  {title}
                </h3>
                <p className="text-[#41484B] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}