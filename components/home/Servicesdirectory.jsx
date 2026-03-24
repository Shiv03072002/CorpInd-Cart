"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  FileSignature,
  UserCircle,
  Globe,
  ShieldCheck,
  Receipt,
  BadgeCheck,
  ScrollText,
  Scale,
  FilePen,
  ClipboardList,
  BookOpen,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const categories = [
  "Company & LLP",
  "IPR & Trademark",
  "GST & Income Tax",
  "Annual Compliance",
  "Legal Drafting",
];

const servicesByCategory = {
  "Company & LLP": [
    {
      icon: <Building2 size={28} className="text-[#00242E]" />,
      title: "Pvt Ltd Registration",
      description: "Fast-track incorporation for new startups.",
    },
    {
      icon: <FileSignature size={28} className="text-[#00242E]" />,
      title: "LLP Incorporation",
      description: "Legal structure for professional service firms.",
    },
    {
      icon: <UserCircle size={28} className="text-[#00242E]" />,
      title: "One Person Company",
      description: "Enjoy benefits of a company as a sole owner.",
    },
    {
      icon: <Globe size={28} className="text-[#00242E]" />,
      title: "Section 8 (NGO)",
      description: "Registration for non-profit organizations.",
    },
    {
      icon: <ShieldCheck size={28} className="text-[#00242E]" />,
      title: "Trademark Filing",
      description: "Protect your brand name and logo identity.",
    },
    {
      icon: <Receipt size={28} className="text-[#00242E]" />,
      title: "GST Registration",
      description: "Simple GST setup for traders and services.",
    },
  ],
  "IPR & Trademark": [
    {
      icon: <ShieldCheck size={28} className="text-[#00242E]" />,
      title: "Trademark Registration",
      description: "Register your brand identity with full legal protection.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "Copyright Filing",
      description: "Secure your creative works under Indian copyright law.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Patent Application",
      description: "File provisional or complete patents for inventions.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Trademark Objection",
      description: "Expert response to trademark examination reports.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "IP Litigation Support",
      description: "Legal support for IP disputes and infringement cases.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Design Registration",
      description: "Protect the visual design of your products.",
    },
  ],
  "GST & Income Tax": [
    {
      icon: <Receipt size={28} className="text-[#00242E]" />,
      title: "GST Registration",
      description: "Hassle-free GST setup for all business types.",
    },
    {
      icon: <ClipboardList size={28} className="text-[#00242E]" />,
      title: "GST Return Filing",
      description: "Monthly, quarterly, and annual GST return filing.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Income Tax Filing",
      description: "ITR filing for individuals, firms, and companies.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liability legally.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "GST Notices & Appeals",
      description: "Expert handling of GST notices and litigation.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "TDS Compliance",
      description: "TDS deduction, filing, and compliance management.",
    },
  ],
  "Annual Compliance": [
    {
      icon: <ClipboardList size={28} className="text-[#00242E]" />,
      title: "ROC Annual Filing",
      description: "File annual returns with the Registrar of Companies.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "Board Meetings",
      description: "Minutes, resolutions, and board meeting compliance.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Director KYC",
      description: "Annual Director KYC filing with MCA portal.",
    },
    {
      icon: <Building2 size={28} className="text-[#00242E]" />,
      title: "LLP Annual Return",
      description: "Form 11 & Form 8 filing for LLP entities.",
    },
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Statutory Audit",
      description: "Audit support for companies under Companies Act.",
    },
    {
      icon: <Globe size={28} className="text-[#00242E]" />,
      title: "FEMA Compliance",
      description: "Reporting and compliance for foreign transactions.",
    },
  ],
  "Legal Drafting": [
    {
      icon: <FilePen size={28} className="text-[#00242E]" />,
      title: "Founders Agreement",
      description: "Define roles, equity, and responsibilities clearly.",
    },
    {
      icon: <FileSignature size={28} className="text-[#00242E]" />,
      title: "NDA Drafting",
      description: "Non-disclosure agreements for business partnerships.",
    },
    {
      icon: <ScrollText size={28} className="text-[#00242E]" />,
      title: "Employment Contracts",
      description: "Legally sound offer letters and employment terms.",
    },
    {
      icon: <Scale size={28} className="text-[#00242E]" />,
      title: "Legal Notices",
      description: "Draft and send legal notices for disputes.",
    },
    {
      icon: <BookOpen size={28} className="text-[#00242E]" />,
      title: "Shareholder Agreement",
      description: "Protect investor and promoter rights effectively.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#00242E]" />,
      title: "MOU Drafting",
      description: "Memorandum of Understanding for business tie-ups.",
    },
  ],
};

export default function ServicesDirectory() {
  const [activeTab, setActiveTab] = useState("Company & LLP");
  const services = servicesByCategory[activeTab] || [];
  
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Main section entrance
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(0.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Subheading animation
    if (subheadingRef.current) {
      gsap.fromTo(
        subheadingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Tabs container animation
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animate cards when tab changes or when new cards appear
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.05,
              ease: "back.out(0.6)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab, services]);

  // Add hover animations to cards
  useEffect(() => {
    const cards = cardsRef.current.filter(card => card);
    
    cards.forEach((card) => {
      const hoverIn = () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      
      const hoverOut = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      
      card.addEventListener("mouseenter", hoverIn);
      card.addEventListener("mouseleave", hoverOut);
      
      return () => {
        card.removeEventListener("mouseenter", hoverIn);
        card.removeEventListener("mouseleave", hoverOut);
      };
    });
  }, [activeTab, services]);

  return (
    <section ref={sectionRef} className="bg-[#F2F6F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-4">
            Our Services Directory
          </h2>
          <p ref={subheadingRef} className="text-[#6b7a7a] text-base max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive list of specialized business and legal
            solutions designed for Indian entrepreneurs.
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#0d2b2b] text-white scale-105"
                  : "bg-white text-[#0d2b2b] hover:bg-[#e8e2da] hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-7 flex flex-col gap-3 transition-colors cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00242E0D] flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2b] mt-1">
                {service.title}
              </h3>
              <p className="text-[#6b7a7a] text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <button className="flex items-center gap-1 text-[#835500] font-semibold text-sm mt-2 hover:gap-2 transition-all w-fit group">
                Get Started
                <span className="text-base leading-none transition-transform group-hover:translate-x-1 inline-block">
                  &rsaquo;
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}