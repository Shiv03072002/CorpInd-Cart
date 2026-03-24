"use client";

import { useRef, useEffect } from "react";
import { Quote, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const testimonialsContainerRef = useRef(null);
  const testimonialCardsRef = useRef([]);
  const ctaSectionRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // 1. Heading animation with SplitText
      if (headingRef.current) {
        const headingSplit = new SplitText(headingRef.current, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
        });
        
        gsap.fromTo(
          headingSplit.lines,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Testimonials container animation
      if (testimonialsContainerRef.current) {
        gsap.fromTo(
          testimonialsContainerRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: testimonialsContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 3. Individual testimonial cards animation with stagger
      const testimonialCards = testimonialCardsRef.current.filter(card => card);
      if (testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: testimonialsContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 4. CTA section animation
      if (ctaSectionRef.current) {
        gsap.fromTo(
          ctaSectionRef.current,
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
              trigger: ctaSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 5. CTA content text masking
      if (ctaContentRef.current) {
        const ctaHeading = ctaContentRef.current.querySelector('.cta-heading');
        const ctaText = ctaContentRef.current.querySelector('.cta-text');
        
        if (ctaHeading) {
          const headingSplit = new SplitText(ctaHeading, {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
          });
          
          gsap.fromTo(
            headingSplit.lines,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "expo.out",
              scrollTrigger: {
                trigger: ctaSectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        
        if (ctaText) {
          const textSplit = new SplitText(ctaText, {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
          });
          
          gsap.fromTo(
            textSplit.lines,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              delay: 0.2,
              ease: "expo.out",
              scrollTrigger: {
                trigger: ctaSectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // 6. CTA button animation
      if (ctaButtonRef.current) {
        gsap.fromTo(
          ctaButtonRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "back.out(0.7)",
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Add hover animations to testimonial cards
    const testimonialCards = testimonialCardsRef.current.filter(card => card);
    testimonialCards.forEach((card) => {
      const quoteIcon = card.querySelector('.quote-icon');
      const authorName = card.querySelector('.author-name');
      const authorRole = card.querySelector('.author-role');
      
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 20px 30px -12px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            scale: 1.1,
            rotate: 5,
            duration: 0.3,
            ease: "back.out(0.5)",
          });
        }
        
        if (authorName) {
          gsap.to(authorName, {
            x: 5,
            color: "#c49a20",
            duration: 0.3,
            ease: "power2.out",
          });
        }
        
        if (authorRole) {
          gsap.to(authorRole, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (quoteIcon) {
          gsap.to(quoteIcon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
        
        if (authorName) {
          gsap.to(authorName, {
            x: 0,
            color: "#0d2b2b",
            duration: 0.3,
            ease: "power2.out",
          });
        }
        
        if (authorRole) {
          gsap.to(authorRole, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Add hover animation to CTA button
    if (ctaButtonRef.current) {
      const ctaButton = ctaButtonRef.current;
      
      const handleButtonMouseEnter = () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          backgroundColor: "#d4aa30",
          duration: 0.3,
          ease: "back.out(0.5)",
        });
      };
      
      const handleButtonMouseLeave = () => {
        gsap.to(ctaButton, {
          scale: 1,
          backgroundColor: "#c49a20",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      
      ctaButton.addEventListener("mouseenter", handleButtonMouseEnter);
      ctaButton.addEventListener("mouseleave", handleButtonMouseLeave);
      
      return () => {
        ctaButton.removeEventListener("mouseenter", handleButtonMouseEnter);
        ctaButton.removeEventListener("mouseleave", handleButtonMouseLeave);
      };
    }

    // Add floating animation to quote icons
    testimonialCards.forEach((card, index) => {
      const quoteIcon = card.querySelector('.quote-icon');
      if (quoteIcon) {
        gsap.to(quoteIcon, {
          y: -5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#F2F6F7] overflow-hidden">
      {/* ── Testimonials ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2
            ref={headingRef}
            className="text-center text-4xl md:text-5xl font-black text-[#0d2b2b] mb-12"
          >
            What Our Clients Say
          </h2>

          <div
            ref={testimonialsContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                ref={(el) => (testimonialCardsRef.current[index] = el)}
                className="bg-white rounded-xl p-9 flex flex-col justify-between relative cursor-pointer group"
              >
                {/* Quote icon */}
                <div className="quote-icon absolute top-6 right-6 text-[rgba(131,85,0,0.20)]">
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
                    <p className="author-name text-base font-bold text-[#0d2b2b] mb-0.5">
                      {t.name}
                    </p>
                    <p className="author-role text-[0.65rem] font-bold tracking-[0.09em] uppercase text-[#c49a20]">
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
      <section ref={ctaSectionRef} className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#0d2b2b] px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            {/* Text */}
            <div ref={ctaContentRef} className="relative z-10 max-w-[520px]">
              <h2 className="cta-heading text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start or Grow<br />Your Business?
              </h2>
              <p className="cta-text text-base text-[#8ab0b0] leading-relaxed">
                Contact our New Delhi office today for a free consultation with our senior partners.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex flex-col items-center gap-3 flex-shrink-0">
              <button
                ref={ctaButtonRef}
                className="bg-[#c49a20] hover:bg-[#d4aa30] text-white font-bold px-10 py-4 rounded-xl text-base tracking-wide transition-colors cursor-pointer"
              >
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