"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Mock data - will be replaced with real data later
const featuredModules = [
  {
    id: 1,
    title: "Shamiko",
    description: "Advanced Magisk Module for bypassing root detection and SafetyNet.",
    category: "Root Hide",
    image: "/modules/shamiko.jpg"
  },
  {
    id: 2,
    title: "LSPosed",
    description: "Framework to modify system and apps without changing APKs.",
    category: "Xposed",
    image: "/modules/lsposed.jpg"
  },
  {
    id: 3,
    title: "KernelSU Manager",
    description: "Official KernelSU manager for managing root permissions and modules.",
    category: "Root Manager",
    image: "/modules/kernelsu.jpg"
  }
];

const featuredGuides = [
  {
    id: 1,
    title: "How to Pass Play Integrity",
    description: "A complete guide to bypassing Play Integrity API with root access.",
    category: "Root Hide",
    image: "/guides/play-integrity.jpg"
  },
  {
    id: 2,
    title: "Optimize Battery with Root",
    description: "Advanced tweaks for extending battery life on rooted Android devices.",
    category: "Optimization",
    image: "/guides/battery.jpg"
  },
  {
    id: 3,
    title: "KernelSU Installation Guide",
    description: "Step-by-step instructions for installing KernelSU on supported devices.",
    category: "Installation",
    image: "/guides/kernelsu.jpg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Featured Modules */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              <span className="text-[#00e676]">#</span> Featured Modules
            </h2>
            <Link 
              href="/modules" 
              className="group flex items-center text-gray-300 hover:text-[#00e676]"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredModules.map((module) => (
              <motion.div key={module.id} variants={item}>
                <Link href={`/modules/${module.id}`}>
                  <div className="glass-card overflow-hidden h-full hover:shadow-[0_0_25px_rgba(0,230,118,0.15)] transition-shadow duration-300">
                    <div className="h-48 bg-[#1e1e1e] relative flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#00e676] to-[#00b0ff]"></div>
                      {/* Placeholder for module image */}
                      <span className="text-[#00e676] text-5xl font-mono">M</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-xs font-semibold bg-[rgba(0,230,118,0.1)] text-[#00e676] px-2 py-1 rounded">
                          {module.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#ffffff]">{module.title}</h3>
                      <p className="text-gray-400">{module.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Guides */}
        <div>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              <span className="text-[#00b0ff]">#</span> Latest Guides
            </h2>
            <Link 
              href="/guides" 
              className="group flex items-center text-gray-300 hover:text-[#00b0ff]"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredGuides.map((guide) => (
              <motion.div key={guide.id} variants={item}>
                <Link href={`/guides/${guide.id}`}>
                  <div className="glass-card overflow-hidden h-full hover:shadow-[0_0_25px_rgba(0,176,255,0.15)] transition-shadow duration-300">
                    <div className="h-48 bg-[#1e1e1e] relative flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#00b0ff] to-[#00e676]"></div>
                      {/* Placeholder for guide image */}
                      <span className="text-[#00b0ff] text-5xl font-mono">G</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-xs font-semibold bg-[rgba(0,176,255,0.1)] text-[#00b0ff] px-2 py-1 rounded">
                          {guide.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#ffffff]">{guide.title}</h3>
                      <p className="text-gray-400">{guide.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 