"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, User, Bell, Calendar, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const featuredArticle = {
  tag: "Compliance Guide",
  title: "Key Changes in Companies Act 2026 Every Startup Should Know",
  excerpt:
    "Navigating the new regulatory landscape in India requires a deep understanding of the recent amendments aimed at ease of doing business. From simplified compliance procedures to enhanced corporate governance, these changes will reshape how businesses operate in 2026 and beyond.",
  author: "Rajesh Kumar",
  role: "Legal Consultant",
  date: "Oct 12, 2026",
  readTime: "5 min read",
};

const sideArticles = [
  {
    title: "5 Benefits of Trademark Registration for Small Businesses",
    date: "Oct 10, 2026",
    readTime: "3 min read",
    image: "1450101499163-c8848c66ca85",
  },
  {
    title: "Understanding GST Composition Scheme for Small Traders",
    date: "Oct 08, 2026",
    readTime: "4 min read",
    image: "1589578228447-e1a4e481c6e8",
  },
  {
    title: "New CSR Compliance Rules for Companies in 2026",
    date: "Oct 05, 2026",
    readTime: "3 min read",
    image: "1557804506-669a67965ba0",
  },
];

export default function LatestArticles() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const featuredCardRef = useRef(null);
  const featuredImageRef = useRef(null);
  const featuredTagRef = useRef(null);
  const featuredTitleRef = useRef(null);
  const featuredExcerptRef = useRef(null);
  const featuredMetaRef = useRef(null);
  const sideArticlesContainerRef = useRef(null);
  const sideArticlesRef = useRef([]);
  const updatesSectionRef = useRef(null);
  const updatesHeaderRef = useRef(null);
  const updatesItemsRef = useRef([]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // Set initial opacity for split elements
      gsap.set(".split-text", { opacity: 1 });

      // 1. Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: -30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. View All Posts button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 3. Featured card animation
      if (featuredCardRef.current) {
        gsap.fromTo(
          featuredCardRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredCardRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 4. Featured image animation
      if (featuredImageRef.current) {
        gsap.fromTo(
          featuredImageRef.current,
          {
            scale: 1.1,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredImageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 5. Featured tag animation
      if (featuredTagRef.current) {
        gsap.fromTo(
          featuredTagRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: featuredTagRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 6. Featured title text masking
      if (featuredTitleRef.current) {
        const titleSplit = new SplitText(featuredTitleRef.current, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
        });
        
        gsap.fromTo(
          titleSplit.lines,
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
              trigger: featuredTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 7. Featured excerpt text masking
      if (featuredExcerptRef.current) {
        const excerptSplit = new SplitText(featuredExcerptRef.current, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
        });
        
        gsap.fromTo(
          excerptSplit.lines,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            delay: 0.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: featuredExcerptRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 8. Featured meta animation
      if (featuredMetaRef.current) {
        gsap.fromTo(
          featuredMetaRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredMetaRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 9. Side articles container animation
      if (sideArticlesContainerRef.current) {
        gsap.fromTo(
          sideArticlesContainerRef.current,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sideArticlesContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 10. Individual side articles animation with stagger
      const sideArticles = sideArticlesRef.current.filter(article => article);
      if (sideArticles.length > 0) {
        gsap.fromTo(
          sideArticles,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: sideArticlesContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 11. Updates section animation
      if (updatesSectionRef.current) {
        gsap.fromTo(
          updatesSectionRef.current,
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
              trigger: updatesSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 12. Updates header animation
      if (updatesHeaderRef.current) {
        gsap.fromTo(
          updatesHeaderRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: updatesHeaderRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 13. Updates items animation with stagger
      const updateItems = updatesItemsRef.current.filter(item => item);
      if (updateItems.length > 0) {
        gsap.fromTo(
          updateItems,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: updatesSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Add hover animations to side articles
    const sideArticles = sideArticlesRef.current.filter(article => article);
    sideArticles.forEach((article) => {
      const thumbnail = article.querySelector('.article-thumbnail');
      const title = article.querySelector('.article-title');
      
      const handleMouseEnter = () => {
        gsap.to(article, {
          x: 5,
          borderColor: "#835500",
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (thumbnail) {
          gsap.to(thumbnail, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
        
        if (title) {
          gsap.to(title, {
            color: "#835500",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      const handleMouseLeave = () => {
        gsap.to(article, {
          x: 0,
          borderColor: "#e8e2da",
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (thumbnail) {
          gsap.to(thumbnail, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
        
        if (title) {
          gsap.to(title, {
            color: "#0d2b2b",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      article.addEventListener("mouseenter", handleMouseEnter);
      article.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        article.removeEventListener("mouseenter", handleMouseEnter);
        article.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Add hover animation to featured card
    if (featuredCardRef.current) {
      const featuredCard = featuredCardRef.current;
      const featuredImg = featuredImageRef.current;
      const featuredTitle = featuredTitleRef.current;
      
      const handleFeaturedMouseEnter = () => {
        gsap.to(featuredCard, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (featuredImg) {
          gsap.to(featuredImg, {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
        }
        
        if (featuredTitle) {
          gsap.to(featuredTitle, {
            color: "#835500",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      const handleFeaturedMouseLeave = () => {
        gsap.to(featuredCard, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (featuredImg) {
          gsap.to(featuredImg, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
        
        if (featuredTitle) {
          gsap.to(featuredTitle, {
            color: "#0d2b2b",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      featuredCard.addEventListener("mouseenter", handleFeaturedMouseEnter);
      featuredCard.addEventListener("mouseleave", handleFeaturedMouseLeave);
      
      return () => {
        featuredCard.removeEventListener("mouseenter", handleFeaturedMouseEnter);
        featuredCard.removeEventListener("mouseleave", handleFeaturedMouseLeave);
      };
    }

    // Add hover animation to update items
    const updateItems = updatesItemsRef.current.filter(item => item);
    updateItems.forEach((item) => {
      const dateBadge = item.querySelector('.date-badge');
      
      const handleMouseEnter = () => {
        gsap.to(item, {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (dateBadge) {
          gsap.to(dateBadge, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(0.5)",
          });
        }
      };
      
      const handleMouseLeave = () => {
        gsap.to(item, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (dateBadge) {
          gsap.to(dateBadge, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d2b2b] mb-2">
              Latest Articles
            </h2>
            <p className="text-[#6b7a7a] text-base">
              Stay updated with legal insights and business trends
            </p>
          </div>
          <button
            ref={buttonRef}
            className="flex items-center gap-2 text-[#835500] font-semibold text-sm group cursor-pointer"
          >
            View All Posts 
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Articles Grid - 60/40 Split */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Featured Article - 60% */}
          <div ref={featuredCardRef} className="lg:w-[60%] group cursor-pointer">
            {/* Image */}
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-[#c8bfa8] mb-6">
              <img
                ref={featuredImageRef}
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop"
                alt="Featured article"
                className="w-full h-full object-cover"
              />
              {/* Tag */}
              <span
                ref={featuredTagRef}
                className="absolute top-4 left-4 bg-[#835500] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md"
              >
                {featuredArticle.tag}
              </span>
            </div>

            {/* Text */}
            <h3
              ref={featuredTitleRef}
              className="text-2xl md:text-3xl font-black text-[#0d2b2b] mb-3 leading-snug"
            >
              {featuredArticle.title}
            </h3>
            <p
              ref={featuredExcerptRef}
              className="text-[#6b7a7a] text-sm leading-relaxed mb-6"
            >
              {featuredArticle.excerpt}
            </p>

            {/* Author & Meta */}
            <div ref={featuredMetaRef} className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ddd8ce] flex items-center justify-center">
                  <User size={18} className="text-[#8a9a9a]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d2b2b]">
                    {featuredArticle.author}
                  </p>
                  <p className="text-xs text-[#8a9a9a]">
                    {featuredArticle.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8a9a9a]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Side Articles - 40% */}
          <div ref={sideArticlesContainerRef} className="lg:w-[40%] flex flex-col gap-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#0d2b2b]">Popular Articles</h3>
              <span className="text-xs text-[#835500] font-semibold">Latest →</span>
            </div>
            {sideArticles.map((article, idx) => (
              <div
                key={article.title}
                ref={(el) => (sideArticlesRef.current[idx] = el)}
                className="flex gap-4 items-start rounded-xl p-4 cursor-pointer group border border-[#e8e2da]"
              >
                {/* Thumbnail */}
                <div className="w-24 h-20 rounded-xl bg-[#c8bfa8] overflow-hidden shrink-0">
                  <img
                    className="article-thumbnail w-full h-full object-cover"
                    src={`https://images.unsplash.com/photo-${article.image}?w=200&h=150&fit=crop`}
                    alt="Article thumbnail"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col flex-1 gap-1">
                  <p className="article-title text-sm font-bold text-[#0d2b2b] leading-snug line-clamp-2">
                    {article.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-[#8a9a9a] flex items-center gap-1">
                      <Calendar size={10} />
                      {article.date}
                    </p>
                    <p className="text-xs text-[#8a9a9a] flex items-center gap-1">
                      <Clock size={10} />
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Updates Section */}
        <div
          ref={updatesSectionRef}
          className="bg-gradient-to-r from-[#062F34] to-[#0A4046] rounded-2xl p-8 md:p-12 shadow-lg"
        >
          {/* Header */}
          <div ref={updatesHeaderRef} className="flex items-center gap-3 mb-8">
            <div className="bg-[#F4B000]/20 p-2 rounded-lg">
              <Bell className="text-[#F4B000]" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white">
              LATEST GOVERNMENT & TAX UPDATES
            </h3>
          </div>

          {/* Updates List */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div
              ref={(el) => (updatesItemsRef.current[0] = el)}
              className="flex items-start md:items-center gap-5 pb-5 border-b border-[#0E4A4F] flex-col md:flex-row cursor-pointer"
            >
              <div className="date-badge bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                15 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Extension of Deadline for GSTR-9 and GSTR-9C for FY 2022-23
              </p>
            </div>

            {/* Item 2 */}
            <div
              ref={(el) => (updatesItemsRef.current[1] = el)}
              className="flex items-start md:items-center gap-5 flex-col md:flex-row cursor-pointer"
            >
              <div className="date-badge bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                12 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                New Regulations for FCRA Renewal Filings by NGOs - Important
                Changes for Non-Profit Organizations
              </p>
            </div>

            {/* Item 3 */}
            <div
              ref={(el) => (updatesItemsRef.current[2] = el)}
              className="flex items-start md:items-center gap-5 pt-2 flex-col md:flex-row cursor-pointer"
            >
              <div className="date-badge bg-[#F4B000] text-black text-xs font-bold px-4 py-1.5 rounded-md whitespace-nowrap">
                08 OCT 2026
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                MCA Introduces New Forms for DIR-3 KYC and Active Compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}