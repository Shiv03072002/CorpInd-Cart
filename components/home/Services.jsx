"use client";

import {
  Building2,
  Gavel,
  Landmark,
  ReceiptText,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const tags = ["FEMA", "FCRA", "NGO DARPAN", "NITI AAYOG", "ISO 9001"];

const services = [
  {
    icon: <Gavel size={32} className="text-[#835500]" />,
    title: "Legal Matters",
    description:
      "Expert drafting of contracts, legal notices, and comprehensive corporate litigation support.",
  },
  {
    icon: <Landmark size={32} className="text-[#835500]" />,
    title: "IPR & Trademark",
    description:
      "Protecting your intellectual assets through trademark, patent, and copyright registrations.",
  },
  {
    icon: <ReceiptText size={32} className="text-[#835500]" />,
    title: "Tax & Accounting",
    description:
      "GST filing, Income Tax planning, and full-spectrum corporate accounting services.",
  },
  {
    icon: <FileCheck2 size={32} className="text-[#835500]" />,
    title: "Licenses & Registrations",
    description:
      "MSME, FSSAI, Import Export Code (IEC), and specialized central licenses.",
  },
];

// ─── Lightweight SplitText helper (no premium plugin needed) ───────────────
function splitIntoLines(el) {
  if (!el) return [];
  const text = el.innerText;
  const words = text.split(" ");
  el.innerHTML = "";
  const lineWrapper = document.createElement("span");
  lineWrapper.style.cssText = "display:block;overflow:hidden;";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.innerText = word + (i < words.length - 1 ? " " : "");
    span.style.cssText = "display:inline-block;";
    lineWrapper.appendChild(span);
  });
  el.appendChild(lineWrapper);
  return lineWrapper.querySelectorAll("span");
}

function splitIntoWords(el) {
  if (!el) return [];
  const text = el.innerText;
  const words = text.split(" ");
  el.innerHTML = words
    .map(
      (w) =>
        `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;"><span class="word-inner" style="display:inline-block;">${w}</span></span>`
    )
    .join(" ");
  return el.querySelectorAll(".word-inner");
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const tagsBarRef = useRef(null);
  const tagsContainerRef = useRef(null);
  const headingRef = useRef(null);
  const underlineRef = useRef(null);
  const featuredCardRef = useRef(null);
  const featuredTitleRef = useRef(null);
  const featuredDescRef = useRef(null);
  const servicesGridRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const serviceTitlesRef = useRef([]);
  const serviceDescsRef = useRef([]);
  const tagsTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. Section entrance ────────────────────────────────────────────────
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 2. Tags bar slide down ─────────────────────────────────────────────
      gsap.fromTo(
        tagsBarRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: tagsBarRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 3. Tag pills stagger pop in ────────────────────────────────────────
      if (tagsContainerRef.current) {
        const tagEls = tagsContainerRef.current.querySelectorAll(".tag-item");
        gsap.fromTo(
          tagEls,
          { opacity: 0, scale: 0.8, x: -10 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: tagsContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── 4. "Specialized Filings:" text — word mask reveal ─────────────────
      if (tagsTextRef.current) {
        const words = splitIntoWords(tagsTextRef.current);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "expo.out",
          scrollTrigger: {
            trigger: tagsBarRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── 5. Heading — word mask reveal ─────────────────────────────────────
      if (headingRef.current) {
        const words = splitIntoWords(headingRef.current);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── 6. Gold underline grow ─────────────────────────────────────────────
      gsap.fromTo(
        underlineRef.current,
        { width: 0, opacity: 0 },
        {
          width: "3.5rem",
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 7. Featured card entrance ──────────────────────────────────────────
      gsap.fromTo(
        featuredCardRef.current,
        { opacity: 0, x: -40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.65,
          ease: "back.out(0.7)",
          scrollTrigger: {
            trigger: featuredCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 8. Featured card title — word mask reveal ──────────────────────────
      if (featuredTitleRef.current) {
        const words = splitIntoWords(featuredTitleRef.current);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: {
            trigger: featuredCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── 9. Featured card description — word mask reveal ────────────────────
      if (featuredDescRef.current) {
        const words = splitIntoWords(featuredDescRef.current);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.035,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: featuredCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── 10. Service cards stagger pop in ──────────────────────────────────
      const validCards = serviceCardsRef.current.filter(Boolean);
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 11. Service card titles — word mask reveal ─────────────────────────
      serviceTitlesRef.current.forEach((titleRef, index) => {
        if (!titleRef) return;
        const words = splitIntoWords(titleRef);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: index * 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── 12. Service card descriptions — word mask reveal ───────────────────
      serviceDescsRef.current.forEach((descRef, index) => {
        if (!descRef) return;
        const words = splitIntoWords(descRef);
        gsap.from(words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.45,
          stagger: 0.025,
          delay: 0.15 + index * 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: descRef,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── 13. Service card hover animations ─────────────────────────────────
      validCards.forEach((card) => {
        const icon = card.querySelector(".card-icon");
        const title = card.querySelector(".card-title");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
          if (icon) gsap.to(icon, { scale: 1.1, rotate: 5, duration: 0.3, ease: "back.out(1.5)" });
          if (title) gsap.to(title, { x: 5, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out",
          });
          if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
          if (title) gsap.to(title, { x: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // ── 14. Featured card hover animation ─────────────────────────────────
      if (featuredCardRef.current) {
        const card = featuredCardRef.current;
        const icon = card.querySelector(".featured-icon");
        const btn = card.querySelector(".featured-button");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
          if (icon) gsap.to(icon, { rotate: 5, scale: 1.05, duration: 0.3, ease: "back.out(1.5)" });
          if (btn) gsap.to(btn, { x: 5, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
          if (icon) gsap.to(icon, { rotate: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          if (btn) gsap.to(btn, { x: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#ffffff] font-sans overflow-hidden" ref={sectionRef}>
      {/* Specialized Filings Bar */}
      <div
        ref={tagsBarRef}
        className="bg-[#f3f4f6] px-6 md:px-16 lg:px-24 py-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <div
              ref={tagsTextRef}
              className="text-xs font-bold tracking-widest text-[#42484b] uppercase mr-2"
            >
              Specialized Filings:
            </div>
            <div ref={tagsContainerRef} className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-item bg-[#0C3B48] text-white text-xs font-semibold tracking-wider px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#163f3f] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-10">
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-3"
            >
              What We Do
            </h2>
            <div
              ref={underlineRef}
              className="w-14 h-1 bg-[#c49a20] rounded-full"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
            {/* Featured Card — Company & LLP */}
            <div
              ref={featuredCardRef}
              className="lg:col-span-3 bg-[#0d2b2b] rounded-xl p-8 flex flex-col justify-between min-h-[420px] cursor-pointer"
            >
              <div>
                <div className="featured-icon inline-block">
                  <Building2 size={40} className="text-[#F0A500] mb-6" />
                </div>
                <h3
                  ref={featuredTitleRef}
                  className="text-2xl font-black text-white leading-tight mb-4"
                >
                  Company &amp; LLP Services
                </h3>
                <p
                  ref={featuredDescRef}
                  className="text-[#8ab0b0] text-sm leading-relaxed"
                >
                  End-to-end formation and compliance for Private Limited, LLP,
                  One Person Company, and Section 8 entities.
                </p>
              </div>
              <button className="featured-button flex items-center gap-2 text-[#F0A500] font-bold text-sm mt-8">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            {/* Regular Service Cards */}
            <div
              ref={servicesGridRef}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                  className="bg-[#F8F9FB] rounded-lg p-7 flex flex-col gap-3 cursor-pointer group"
                >
                  <div className="card-icon inline-block w-fit">
                    {service.icon}
                  </div>
                  <h3
                    ref={(el) => (serviceTitlesRef.current[index] = el)}
                    className="card-title text-lg font-bold text-[#0d2b2b] mt-1"
                  >
                    {service.title}
                  </h3>
                  <p
                    ref={(el) => (serviceDescsRef.current[index] = el)}
                    className="text-[#6b7a7a] text-sm leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}