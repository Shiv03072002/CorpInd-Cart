"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SERVICES = [
  "Company/LLP Incorporation",
  "Annual Filing Compliances",
  "ROC Services",
  "IPR Services",
  "Legal Services",
  "Accounting Services",
  "License And Registrations",
  "Miscellaneous Services",
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "G-76, Bali Nagar, New Delhi – 110015",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@corpindcart.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 1234567891",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 10:00 AM – 7:00 PM",
  },
];

const SOCIALS = [
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaWhatsapp, href: "#" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="bg-white py-16 px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">

        {/* LEFT — Form (60%) */}
        <div className="flex-[8] min-w-0">
          {/* Badge */}
          <span className="inline-block bg-[#8355001A] text-[#835500] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            We Are Here
          </span>

          <h2 className="text-4xl font-bold text-[#1a1a18] mb-3 leading-tight">
            Send Us a Message
          </h2>
          <p className="text-[#6b6b62] text-[15px] mb-8">
            Fill in the form and we'll get back to you shortly.
          </p>

          <div className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Mano Selva Vijay"
                  className="w-full rounded border border-[#E6E8EA] bg-[#F8F9FB] px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. mano@company.com"
                  className="w-full rounded border border-[#E6E8EA] bg-[#F8F9FB]  px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567891"
                  className="w-full rounded border border-[#E6E8EA] bg-[#F8F9FB]  px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full rounded border border-[#E6E8EA] bg-[#F8F9FB]  px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                Service Required
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded border border-[#E6E8EA] bg-[#F8F9FB] px-4 py-3 text-sm text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition cursor-pointer"
                  style={{ color: form.service ? "#1a1a18" : "#bdbab2" }}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} style={{ color: "#1a1a18" }}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b62]">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a18] mb-1.5">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded border border-[#E6E8EA] bg-[#F8F9FB]  px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#bdbab2] focus:outline-none focus:border-[#1e2d2a] focus:ring-2 focus:ring-[#1e2d2a]/10 transition"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-[#0C3B48] hover:bg-[#16231f] text-white text-sm font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:gap-3 group"
            >
              Send Message
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* RIGHT — Get in Touch Card (40%) */}
       <div className="flex-[3.5] flex-shrink-0 bg-[#0C3B48] rounded-2xl p-10 text-white flex flex-col">
  <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
  <p className="text-white/60 text-base leading-relaxed mb-6">
    Our team of experts is ready to assist you with all your legal, tax,
    and compliance needs.
  </p>

  {/* Contact Info with dividers */}
  <div className="flex flex-col flex-1">
    {CONTACT_INFO.map(({ icon: Icon, label, value }, index) => (
      <div key={label}>
        <div className="flex items-start gap-5 py-6">
          <div className="mt-0.5 text-amber-400 flex-shrink-0">
            <Icon size={22} />
          </div>
          <div>
            <p className="text-amber-400 text-sm font-semibold mb-1.5">
              {label}
            </p>
            <p className="text-white/70 text-base leading-snug">
              {value}
            </p>
          </div>
        </div>
        {index < CONTACT_INFO.length - 1 && (
          <div className="border-t border-white/10" />
        )}
      </div>
    ))}
  </div>

  {/* Social Icons */}
  <div className="flex gap-4 mt-6">
    {SOCIALS.map(({ icon: Icon, href }, i) => (
      <a
        key={i}
        href={href}
        className="w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
      >
        <Icon size={18} />
      </a>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}