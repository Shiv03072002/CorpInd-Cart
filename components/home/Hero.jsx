"use client";

import {
  BadgeCheck,
  Timer,
  Users,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ── Split text helpers ──────────────────────────────────────────────────────

/** Splits a string into word spans, each animated individually */
function SplitWords({ text, className = "", delay = 0, staggerDelay = 0.08 }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/** Splits a string into character spans, each animated individually */
function SplitChars({ text, className = "", delay = 0, staggerDelay = 0.04 }) {
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            initial={{ y: "120%", opacity: 0, rotateX: 40 }}
            animate={{ y: "0%", opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ── Counter Animation Component ─────────────────────────────────────────────

function AnimatedCounter({ targetValue, suffix = "", duration = 2, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;
    const startValue = 0;
    const endValue = parseInt(targetValue);
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuad);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, targetValue, duration, delay]);

  return (
    <span ref={ref} className="inline-block">
      {count}{suffix}
    </span>
  );
}

// ── Masked / clipped gradient text ─────────────────────────────────────────

function MaskedGradientText({ children, gradient, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      style={{
        display: "inline-block",
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  );
}

// ── Floating card animation ─────────────────────────────────────────────────

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── Main component ──────────────────────────────────────────────────────────

export default function HeroSection() {
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isStatsInView && !statsTriggered) {
      setStatsTriggered(true);
    }
  }, [isStatsInView, statsTriggered]);

  return (
    <section className="bg-[#FFFFFF] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Trusted Badge — fade + slide in */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 bg-[#8355001A] border border-[#e2ddd5] rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-[#835500] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#835500] inline-block" />
            Trusted by 2500+ Businesses
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

          {/* ── Left Content ── */}
          <div className="flex-1 max-w-xl">

            {/* Headline — split words with masked gradient on key phrase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] text-[#0d2b2b] mb-6">
              {/* Line 1 */}
              <span style={{ display: "block" }}>
                <SplitWords text="One Place for" delay={0.1} staggerDelay={0.09} />
              </span>

              {/* Line 2 — "All Your" plain + "Business" masked gradient */}
              <span style={{ display: "block" }}>
                <SplitWords text="All Your " delay={0.4} staggerDelay={0.09} />
                <SplitWords
                  text="Business" delay={0.4} staggerDelay={0.09}
                  
                >
                  Business
                </SplitWords>
              </span>

              {/* Line 3 — "&" plain + "Legal Needs" masked in teal */}
              <span style={{ display: "block" }}>
                <SplitWords text="& " delay={0.85} staggerDelay={0.09} />
                <SplitWords
                
                   text=" Legal Needs"
                  delay={0.95}
                >
                  Legal Needs
                </SplitWords>
              </span>
            </h1>

            {/* Sub-paragraph — fade up */}
            <motion.p
              className="text-[#4a5a5a] text-base md:text-lg leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              We handle company registration, trademark, GST, licenses, and legal
              matters so you can focus on building your empire from the heart of
              New Delhi.
            </motion.p>

            {/* CTA Buttons — staggered fade up */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25, ease: "easeOut" }}
            >
              <button className="flex items-center gap-2 bg-[#0d2b2b] text-white px-7 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-[#163f3f] transition-colors shadow-md">
                See All Services
                <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 border-2 border-[#0d2b2b] text-[#0d2b2b] px-7 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-[#0d2b2b] hover:text-white transition-colors">
                <MessageCircle size={16} />
                Talk to Us
              </button>
            </motion.div>

            {/* Stats — with counter animation */}
            <div ref={statsRef} className="flex gap-8 md:gap-10 flex-wrap">
              {[
                { value: "800", label: "Trademarks", suffix: "+", delay: 1.4, duration: 2 },
                { value: "500", label: "Companies Registered", suffix: "+", delay: 1.55, duration: 2 },
                { value: "1200", label: "GST Filings", suffix: "+", delay: 1.7, duration: 2 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay, ease: "easeOut" }}
                >
                  {/* Stat number — with counter animation */}
                  <p className="text-2xl md:text-3xl font-black leading-none">
                    <MaskedGradientText
                      gradient="linear-gradient(135deg, #c49a20 0%, #f0c840 60%, #835500 100%)"
                      delay={stat.delay}
                    >
                      <AnimatedCounter
                        targetValue={stat.value}
                        suffix={stat.suffix}
                        duration={stat.duration}
                        delay={stat.delay}
                      />
                    </MaskedGradientText>
                  </p>
                  <p className="text-[#6b7a7a] text-xs font-semibold tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Image Collage ── */}
          <div className="flex-1 relative w-full max-w-lg min-h-[520px] md:min-h-[560px]">

            {/* Top image — slide in from right */}
            <motion.div
              className="absolute top-0 right-0 w-[65%] h-[320px] rounded-2xl overflow-hidden z-9"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661574631918-8221a63dabc0?q=80&w=987&auto=format&fit=crop"
                alt="Professional business team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom image — slide in from left */}
            <motion.div
              className="absolute bottom-8 left-0 w-[60%] h-[280px] rounded-2xl overflow-hidden shadow-xl z-0"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661766807790-78b8da531177?q=80&w=987&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Cards */}

            {/* 100% Compliance */}
            <motion.div
              variants={floating}
              animate="animate"
              className="absolute top-6 left-10 bg-[#835500] text-white rounded-xl px-4 py-4 flex items-center gap-3 shadow-lg z-10"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
            >
              <BadgeCheck size={22} className="text-[#f0c840]" />
              <div>
                <p className="text-lg font-black leading-none">100%</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#f0c840] mt-0.5">
                  Compliance Rate
                </p>
              </div>
            </motion.div>

            {/* Fast Track */}
            <motion.div
              variants={floating}
              animate="animate"
              className="absolute top-[43%] left-50 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl z-10 border border-[#e8e2da]"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1, ease: "backOut" }}
            >
              <Timer size={22} className="text-[#c49a20]" />
              <div>
                <p className="text-sm font-black text-[#0d2b2b]">Fast-Track</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9a9a]">
                  Approvals
                </p>
              </div>
            </motion.div>

            {/* 15+ Legal Experts */}
            <motion.div
              variants={floating}
              animate="animate"
              className="absolute bottom-[20%] right-0 bg-[#0d2b2b] text-white rounded-xl px-4 py-4 flex items-center gap-3 shadow-xl z-10"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3, ease: "backOut" }}
            >
              <Users size={20} className="text-[#c49a20]" />
              <div>
                <p className="text-lg font-black leading-none">15+</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7aafaf] mt-0.5">
                  Legal Experts
                </p>
              </div>
            </motion.div>

            {/* Based in New Delhi */}
            <motion.div
              variants={floating}
              animate="animate"
              className="absolute bottom-0 left-[25%] bg-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg z-10 border border-[#e8e2da]"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5, ease: "backOut" }}
            >
              <MapPin size={16} className="text-[#c49a20]" />
              <p className="text-sm font-semibold text-[#0d2b2b]">
                Based in New Delhi
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}