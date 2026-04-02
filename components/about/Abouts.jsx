import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Abouts() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-7">
          {/* Tag */}
          <span className="inline-flex w-fit bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            Who We Are
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00242E] leading-tight">
            One Platform for All Your Business Needs
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-4 text-[#41484B] text-base leading-relaxed">
            <p>
              CorpInd Cart is a corporate advisory firm that helps startups,
              entrepreneurs, and growing businesses handle the legal and
              financial side — so they don't have to figure it out alone.
            </p>
            <p>
              Our team of Chartered Accountants, Company Secretaries, and
              Advocates provides end-to-end support — from company registration
              and GST filing to trademark protection and ROC compliance.
            </p>
            <p>
              We keep things simple, transparent, and affordable. Whether you're
              just starting out or scaling fast, we're here for the long run.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 mt-2">
            <Link
              href="/services"
              className="bg-[#0C3B48] text-white text-sm font-semibold px-7 py-4 rounded hover:bg-[#243d55] transition-colors duration-200"
            >
              Explore Our Services
            </Link>
            <Link
              href="/profile.pdf"
              className="flex items-center gap-2 text-[#1a2e44] text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Download Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Image + Badge */}
        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden w-full aspect-[3/3] relative">
            <img
              src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CorpInd Cart Advisor"
             
              className="object-cover object-top"
            
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-10 -left-20 bg-[#F0A500] text-white rounded-xl px-4 py-6 shadow-xl">
            <p className="text-4xl font-extrabold leading-none">10+</p>
            <p className="text-xs font-semibold tracking-widest uppercase mt-1 text-amber-100">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}