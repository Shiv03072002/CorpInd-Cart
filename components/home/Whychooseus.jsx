"use client";

import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Fixed Upfront Pricing",
    description:
      "No hidden charges or unexpected legal fees. Transparency at every step.",
  },
  {
    title: "Expert Guidance",
    description:
      "Talk directly to experienced CAs, CSs, and Corporate Lawyers.",
  },
  {
    title: "Timely Deliverables",
    description: "We understand the value of time in business operations.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "backOut",
    },
  },
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};

const checkIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: "backOut",
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const statNumberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const statLabelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F2F6F7] px-6 md:px-16 lg:px-24 py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* ── Left: Image + floating card ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full max-w-[460px] shrink-0 mx-auto lg:mx-0"
          >
            {/* Main photo */}
            <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#b8b0a0]">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                src="https://plus.unsplash.com/premium_photo-1661663327020-32f583846094?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold floating card — overlaps bottom-right of image */}
            <motion.div
              variants={floatingCardVariants}
              initial="hidden"
              animate={isInView ? ["visible", "floating"] : "hidden"}
              className="absolute bottom-[-20px] right-[-15px] md:bottom-[-32px] md:right-[-25px] rounded border-2 md:border-4 border-white text-white text-center shadow-2xl bg-[#F0A500] w-[140px] md:w-[180px] py-5 md:py-8 px-3 md:px-5 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-3xl md:text-4xl font-black leading-none"
              >
                10+
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 md:mt-2 leading-snug text-white/85"
              >
                Years of<br />Excellence
              </motion.p>
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <div className="flex-1 pt-0 lg:pt-2">
            {/* Heading */}
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0d2b2b] leading-tight mb-6 md:mb-10"
            >
              We Make Legal &amp; Business<br />Work Easy for You
            </motion.h2>

            {/* Feature list */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-10"
            >
              {features.map((f, index) => (
                <motion.div
                  key={f.title}
                  variants={featureItemVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 md:gap-4"
                >
                  {/* Gold outlined circle check */}
                  <motion.div
                    variants={checkIconVariants}
                    whileHover="hover"
                  >
                    <CheckCircle
                      size={20}
                      className="shrink-0 mt-0.5 text-[#F0A500] md:w-6 md:h-6"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                      className="font-bold text-[#0d2b2b] text-sm md:text-base mb-1"
                    >
                      {f.title}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                      className="text-[#5a6a6a] text-xs md:text-sm leading-relaxed"
                    >
                      {f.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stat cards */}
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center lg:justify-start">
              {/* 98% — teal left border */}
              <motion.div
                custom={0}
                variants={statCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="w-[150px] md:w-[180px] bg-[#0C3B481A] rounded-xl px-4 md:px-6 py-4 md:py-5 border-l-4 border-l-[#0d2b2b] cursor-pointer"
              >
                <motion.p
                  variants={statNumberVariants}
                  className="text-[1.5rem] md:text-[1.8rem] font-black text-[#0d2b2b] leading-none"
                >
                  98%
                </motion.p>
                <motion.p
                  variants={statLabelVariants}
                  className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-widest uppercase mt-2 text-[#41484B] leading-tight"
                >
                  Client Retention
                </motion.p>
              </motion.div>

              {/* A+ — gold left border */}
              <motion.div
                custom={1}
                variants={statCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="w-[150px] md:w-[180px] bg-[#F0A5001A] rounded-xl px-4 md:px-6 py-4 md:py-5 border-l-4 border-l-[#F0A500] cursor-pointer"
              >
                <motion.p
                  variants={statNumberVariants}
                  className="text-[1.5rem] md:text-[1.8rem] font-black text-[#F0A500] leading-none"
                >
                  A+
                </motion.p>
                <motion.p
                  variants={statLabelVariants}
                  className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-widest uppercase mt-2 text-[#41484B] leading-tight"
                >
                  Service Rating
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}