import { Users, IndianRupee, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our CAs, CSs, and Advocates bring strong expertise in legal, tax, and financial services.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "No hidden charges. You always know what you are paying before we start.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    description:
      "We respect deadlines. Your filings and documents are completed on time.",
  },
  {
    icon: MapPin,
    title: "Nationwide Presence",
    description:
      "Serving businesses across India, from Delhi to Bangalore, Mumbai to Chennai.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-20 relative  ">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        
        {/* Left: Image with badge */}
        <div className="relative w-full">
          <div className="rounded-2xl overflow-hidden w-full h-[600px] relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1682089164549-e6448335d95b?q=80&w=2070&auto=format&fit=crop"
              alt="Our Expert Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-10 -right-6 bg-[#1a2e44] border-6 border-white text-white rounded-xl px-6 py-4 shadow-xl text-center">
            <p className="text-4xl font-extrabold leading-none">15+</p>
            <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-gray-300">
              Legal Experts
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          {/* Tag */}
          <div className="inline-flex">
            <span className="bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00242E] leading-tight">
            We Make Legal &amp; Business Work Easy for You
          </h2>

          {/* Feature List */}
          <div className="flex flex-col gap-7 mt-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-5">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#F0A500] flex items-center justify-center ">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-[#1a2e44] mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" hidden md:block absolute -bottom-36 right-0 translate-x-1/2 w-72 h-72 rounded-full bg-[#197e9a0f] pointer-events-none z-0" />

    </section>
  );
}
