"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { IconSearch, IconShield, IconBatteryFilled, IconDeviceMobile, IconLock, IconRocket } from "@tabler/icons-react";
import Link from "next/link";

// Mock data - to be replaced with real data later
const guides = [
  {
    id: 1,
    title: "How to Pass Play Integrity API",
    description: "Complete guide to bypass Play Integrity on rooted devices, including Shamiko and other techniques",
    category: "Root Hide",
    difficulty: "Advanced",
    tags: ["Play Integrity", "Banking Apps", "Shamiko", "MagiskHide"],
    updatedAt: "2023-12-10"
  },
  {
    id: 2,
    title: "Optimize Battery Life with Root Access",
    description: "Learn how to optimize your Android battery life using root permissions and special modules",
    category: "Optimization",
    difficulty: "Intermediate",
    tags: ["Battery", "Optimization", "Performance", "Modules"],
    updatedAt: "2023-11-18"
  },
  {
    id: 3,
    title: "Complete KernelSU Installation Guide",
    description: "Step-by-step instructions for installing KernelSU on compatible Android devices",
    category: "Installation",
    difficulty: "Intermediate",
    tags: ["KernelSU", "Root", "Installation"],
    updatedAt: "2023-12-05"
  },
  {
    id: 4,
    title: "Magisk Module Development Guide",
    description: "Learn how to create your own Magisk modules from scratch with this comprehensive guide",
    category: "Development",
    difficulty: "Expert",
    tags: ["Magisk", "Modules", "Development", "Coding"],
    updatedAt: "2023-10-20"
  },
  {
    id: 5,
    title: "Fix SafetyNet on Custom ROMs",
    description: "Complete guide to passing SafetyNet attestation on custom ROMs with various workarounds",
    category: "Root Hide",
    difficulty: "Advanced",
    tags: ["SafetyNet", "Custom ROM", "Banking"],
    updatedAt: "2023-11-30"
  },
  {
    id: 6,
    title: "Debloat Your Device with Root",
    description: "Learn how to properly remove bloatware and system apps without breaking functionality",
    category: "Optimization",
    difficulty: "Beginner",
    tags: ["Debloat", "System Apps", "Performance"],
    updatedAt: "2023-09-25"
  },
  {
    id: 7,
    title: "LSPosed Module Installation & Setup",
    description: "Complete guide to installing and configuring LSPosed framework and modules",
    category: "Installation",
    difficulty: "Intermediate",
    tags: ["Xposed", "LSPosed", "Modules"],
    updatedAt: "2023-11-10"
  },
  {
    id: 8,
    title: "Secure Your Rooted Device",
    description: "Best practices for keeping your rooted Android device secure and private",
    category: "Security",
    difficulty: "Intermediate",
    tags: ["Security", "Privacy", "Protection"],
    updatedAt: "2023-10-15"
  }
];

const categories = [
  { name: "All Categories", icon: <IconRocket size={18} stroke={1.5} /> },
  { name: "Root Hide", icon: <IconShield size={18} stroke={1.5} /> },
  { name: "Optimization", icon: <IconBatteryFilled size={18} stroke={1.5} /> },
  { name: "Installation", icon: <IconDeviceMobile size={18} stroke={1.5} /> },
  { name: "Security", icon: <IconLock size={18} stroke={1.5} /> },
  { name: "Development", icon: <IconRocket size={18} stroke={1.5} /> }
];

const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"];

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All Categories" || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All Levels" || guide.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-[#121212]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Advanced <span className="text-[#00e676]">Guides</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step-by-step tutorials to master your rooted Android device.
            </p>
          </motion.div>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 bg-[#1e1e1e] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00e676] shadow-md"
              placeholder="Search for guides, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? "bg-[#00e676] text-black"
                      : "bg-[#1e1e1e] text-gray-300 hover:bg-[#2d2d2d] hover:text-[#00e676]"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedDifficulty === difficulty
                    ? "bg-[#00b0ff] text-black"
                    : "bg-[#1e1e1e] text-gray-300 hover:bg-[#2d2d2d]"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-10 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-[#00e676] mr-2">#</span>
              {filteredGuides.length} Guides Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="bg-[#1e1e1e] p-8 text-center rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">No guides found</h3>
              <p className="text-gray-400">
                Try changing your search query or filter settings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="bg-[#1e1e1e] p-6 md:p-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-[#00b0ff]">#</span> Featured Guide
                </h2>
                <h3 className="text-xl md:text-2xl font-bold mb-3">How to Pass Play Integrity API</h3>
                <p className="text-gray-300 mb-6">
                  Play Integrity is Google's latest security measure that has replaced SafetyNet. This comprehensive 
                  guide walks you through all the methods to bypass it on rooted devices.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#00b0ff] mr-2">✓</span>
                      <span>Understanding Play Integrity API architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00b0ff] mr-2">✓</span>
                      <span>Configuring Shamiko for optimal hiding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00b0ff] mr-2">✓</span>
                      <span>Using props to spoof device fingerprint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00b0ff] mr-2">✓</span>
                      <span>Troubleshooting common issues</span>
                    </li>
                  </ul>
                </div>
                
                <Link href="/guides/1" className="inline-block px-6 py-3 bg-[#00e676] text-black font-medium rounded-lg hover:bg-[#00c853] transition-colors">
                  Read Full Guide
                </Link>
              </div>
              
              <div className="bg-[#2d2d2d] p-2 rounded-xl relative">
                <div className="bg-[#1e1e1e] h-full w-full rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#00b0ff] to-transparent"></div>
                  <div className="p-6 relative z-10">
                    <div className="border border-[#333] rounded-lg p-4 mb-4 bg-[rgba(26,26,26,0.6)]">
                      <h4 className="font-mono text-[#00b0ff] mb-2">Step 1: Install Prerequisites</h4>
                      <div className="font-mono text-sm text-gray-300">
                        <p className="mb-2">• Latest Magisk (v25.2+)</p>
                        <p className="mb-2">• Shamiko module</p>
                        <p>• Universal SafetyNet Fix</p>
                      </div>
                    </div>
                    
                    <div className="border border-[#333] rounded-lg p-4 mb-4 bg-[rgba(26,26,26,0.6)]">
                      <h4 className="font-mono text-[#00b0ff] mb-2">Step 2: Configure Settings</h4>
                      <div className="font-mono text-sm text-gray-300">
                        <p className="mb-2">1. Enable Zygisk in Magisk</p>
                        <p className="mb-2">2. Install Shamiko</p>
                        <p>3. Reboot device</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-400">10 more steps...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

function GuideCard({ guide }: { guide: any }) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{guide.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[rgba(0,230,118,0.1)] text-[#00e676] text-xs font-semibold px-2 py-1 rounded">
            {guide.category}
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${
            guide.difficulty === "Beginner" ? "bg-[rgba(0,176,255,0.1)] text-[#00b0ff]" :
            guide.difficulty === "Intermediate" ? "bg-[rgba(255,171,64,0.1)] text-[#ffab40]" :
            guide.difficulty === "Advanced" ? "bg-[rgba(255,82,82,0.1)] text-[#ff5252]" :
            "bg-[rgba(156,39,176,0.1)] text-[#9c27b0]"
          }`}>
            {guide.difficulty}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-2">{guide.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {guide.tags.map((tag: string, index: number) => (
            <span key={index} className="text-xs text-gray-400 bg-[#2d2d2d] px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Updated: {formatDate(guide.updatedAt)}</span>
          <Link href={`/guides/${guide.id}`} className="text-[#00b0ff] hover:text-white transition-colors font-medium">
            Read Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper function
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
} 