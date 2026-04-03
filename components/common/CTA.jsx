import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-16 bg-[#F2F4F6]">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="relative rounded-3xl overflow-hidden">
          
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1758599543278-32d9d073941e"
            alt="Business"
            className="w-full h-[420px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00242EB2]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 md:px-16 py-10">
            
            {/* Left Content */}
            <div className="max-w-xl text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Ready to Start or Grow <br /> Your Business?
              </h2>

              <p className="text-gray-200 text-lg">
                Contact our New Delhi office today for a free consultation with our
                senior partners.
              </p>
            </div>

            {/* Right Content */}
            <div className="text-white text-center md:text-right">
              <button className="bg-[#F59E0B] hover:bg-[#e08b00] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                Get a Free Quote →
              </button>

              <p className="mt-4 text-sm tracking-widest text-center text-gray-200">OR</p>

              <p className="mt-2 font-semibold tracking-wider">
                CALL +91 1234567890
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}