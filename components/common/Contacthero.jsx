"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const pageConfig = {
  contact: {
    title: "Contact Us",
    subtitle:
      "We're here to help. Reach out and our team will get back to you within 24 hours.",
    breadcrumb: "Contact",
    stats: [
      { value: "24hr", label: "Response Time" },
      { value: "800+", label: "Clients Served" },
      { value: "10+", label: "Years Experience" },
      { value: "Free", label: "Initial Consultation" },
    ],
  },

  blogs: {
    title: "Insights & Updates",
    subtitle:
      "Expert articles on law, taxation, compliance, and business growth, written by our professionals.",
    breadcrumb: "Blog",
    stats: [
      { value: "50+", label: "Articles Published" },
      { value: "10+", label: "Topics Covered" },
      { value: "icon", label: "Updated Weekly" },
    ],
  },

  services: {
    title: "Our Services",
    subtitle:
      "Comprehensive solutions tailored to your needs. Discover how we can help your business grow.",
    breadcrumb: "Services",
    stats: [
      { value: "100%", label: "Compliance Support" },
      { value: "6+", label: "Service Categories" },
      { value: "25+", label: "Services Offered" },
      { value: "24hr", label: "Response Time" },
    ],
  },
};

export default function DynamicHero() {
  const pathname = usePathname();
  const [path, setPath] = useState("contact");

  useEffect(() => {
    if (!pathname) return; // Add this check
    
    let firstSegment =
      pathname.split("/").filter(Boolean)[0] || "contact";

    // Normalize routes
    if (firstSegment === "blog") firstSegment = "blogs";

    console.log("Pathname:", pathname); // Add this to debug
    console.log("First segment:", firstSegment); // Add this to debug
    
    setPath(firstSegment);
  }, [pathname]);

  const currentPage = pageConfig[path] || pageConfig.contact;

  return (
    <section className="bg-[#00242E] min-h-[420px] px-6 pt-10 pb-16 md:px-16 lg:px-24">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-300 mb-10">
        <Link
          href="/"
          className="relative hover:text-[#F0A500] transition-colors"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F0A500]" />
        </Link>

        <span className="text-gray-400">›</span>
        <span className="text-gray-200">
          {currentPage.breadcrumb}
        </span>
      </nav>

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-5">
        {currentPage.title}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-base md:text-lg max-w-xl mb-14 leading-relaxed">
        {currentPage.subtitle}
      </p>

      {/* Stats */}
     
     <div
  className={`grid gap-4 max-w-4xl ${
    currentPage.stats.length === 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4"
  }`}
>
  {currentPage.stats.map(({ value, label }) => {
    const isBlog = path === "blogs";

    return (
      <div
        key={label}
        className={`px-6 py-3 flex flex-col gap-1 ${
          isBlog
            ? "border-l-2 border-[#F0A500] bg-transparent"
            : "bg-[#0C3B48] rounded-md"
        }`}
      >
        {value === "icon" ? (
          <Clock className="text-[#F0A500]" size={26} />
        ) : (
          <span className="text-[#F0A500] text-2xl font-bold">
            {value}
          </span>
        )}

        <span className="text-gray-300 text-sm">
          {label}
        </span>
      </div>
    );
  })}
</div>
    </section>
  );
}