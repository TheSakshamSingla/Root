"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { IconSearch, IconFilter, IconX, IconStar } from "@tabler/icons-react";
import Link from "next/link";

// Mock data - to be replaced with real data later
const modules = [
  {
    id: 1,
    title: "Shamiko",
    description: "Advanced Magisk module for hiding root access from apps that detect root",
    category: "Root Hide",
    downloads: 250000,
    rating: 4.8,
    lastUpdated: "2023-12-15"
  },
  {
    id: 2,
    title: "LSPosed",
    description: "A Riru/Zygisk module that provides Xposed framework for Android 8.1+",
    category: "Framework",
    downloads: 1000000,
    rating: 4.9,
    lastUpdated: "2023-11-30"
  },
  {
    id: 3,
    title: "Riru",
    description: "Inject into zygote process to provide modules with access to runtime Java APIs",
    category: "Framework",
    downloads: 2000000,
    rating: 4.7,
    lastUpdated: "2023-10-20"
  },
  {
    id: 4,
    title: "ViPER4Android FX",
    description: "Audio enhancement suite with various sound effects for better audio quality",
    category: "Audio",
    downloads: 500000,
    rating: 4.6,
    lastUpdated: "2023-09-11"
  },
  {
    id: 5,
    title: "AdAway",
    description: "Ad-blocking module that modifies hosts file to block ad servers",
    category: "Ad Blocking",
    downloads: 1500000,
    rating: 4.8,
    lastUpdated: "2023-11-05"
  },
  {
    id: 6,
    title: "Zygisk",
    description: "Allows modules to run in the zygote process for better integration",
    category: "Framework",
    downloads: 800000,
    rating: 4.7,
    lastUpdated: "2023-12-01"
  },
  {
    id: 7,
    title: "MagiskHide Props Config",
    description: "Change device props and fingerprints to bypass detection",
    category: "Root Hide",
    downloads: 600000,
    rating: 4.5,
    lastUpdated: "2023-10-10"
  },
  {
    id: 8,
    title: "Universal SafetyNet Fix",
    description: "Fix for passing SafetyNet on custom ROMs and rooted devices",
    category: "Root Hide",
    downloads: 700000,
    rating: 4.6,
    lastUpdated: "2023-11-20"
  },
  {
    id: 9,
    title: "Greenify4Magisk",
    description: "System-level Greenify module for better battery optimization",
    category: "Battery",
    downloads: 400000,
    rating: 4.3,
    lastUpdated: "2023-08-15"
  }
];

const categories = ["All", "Framework", "Root Hide", "Audio", "Ad Blocking", "Battery"];

export default function ModulesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("downloads");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || module.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "downloads") {
      return b.downloads - a.downloads;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "newest") {
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    }
    return 0;
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Magisk <span className="text-[#00e676]">Modules</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our curated collection of the best Magisk modules.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="bg-[#1e1e1e] p-5 rounded-xl mb-10 shadow-md">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconSearch size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-10 bg-[#2d2d2d] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00e676] border-none shadow-inner"
                  placeholder="Search for modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <IconX size={18} className="text-gray-400 hover:text-[#ffffff]" />
                  </button>
                )}
              </div>
              
              <div className="flex">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full lg:w-auto py-3 px-5 bg-[#2d2d2d] hover:bg-[#363636] text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <IconFilter size={18} className="mr-2" />
                  Filter & Sort
                </button>
              </div>
            </div>
            
            {isFilterOpen && (
              <div className="mt-5 pt-5 border-t border-[#333]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Filter by Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-[#00e676] text-black font-medium"
                              : "bg-[#2d2d2d] text-gray-300 hover:bg-[#363636]"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Sort by</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSortBy("downloads")}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          sortBy === "downloads"
                            ? "bg-[#00e676] text-black font-medium"
                            : "bg-[#2d2d2d] text-gray-300 hover:bg-[#363636]"
                        }`}
                      >
                        Most Popular
                      </button>
                      <button
                        onClick={() => setSortBy("rating")}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          sortBy === "rating"
                            ? "bg-[#00e676] text-black font-medium"
                            : "bg-[#2d2d2d] text-gray-300 hover:bg-[#363636]"
                        }`}
                      >
                        Highest Rated
                      </button>
                      <button
                        onClick={() => setSortBy("newest")}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          sortBy === "newest"
                            ? "bg-[#00e676] text-black font-medium"
                            : "bg-[#2d2d2d] text-gray-300 hover:bg-[#363636]"
                        }`}
                      >
                        Newest First
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-10 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-[#00e676] mr-2">#</span>
              {filteredModules.length} Modules Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>

          {filteredModules.length === 0 && (
            <div className="bg-[#1e1e1e] p-8 text-center rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">No modules found</h3>
              <p className="text-gray-400">
                Try changing your search query or filter settings.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

function ModuleCard({ module }: { module: any }) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{module.title}</h3>
          <span className="bg-[rgba(0,230,118,0.1)] text-[#00e676] text-xs font-semibold px-2 py-1 rounded">
            {module.category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-5 line-clamp-2">{module.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center">
            <span className="mr-4">{formatNumber(module.downloads)} downloads</span>
            <span className="flex items-center">
              <IconStar size={16} className="text-[#ffab40] mr-1" />
              {module.rating.toFixed(1)}
            </span>
          </div>
          <span>Updated: {formatDate(module.lastUpdated)}</span>
        </div>
      </div>
      
      <div className="px-5 py-3 bg-[#2d2d2d] flex justify-between">
        <Link href={`/modules/${module.id}`} className="text-[#00e676] hover:text-white transition-colors font-medium">
          View Details
        </Link>
        <Link href={`/modules/${module.id}/download`} className="text-[#00b0ff] hover:text-white transition-colors font-medium">
          Download
        </Link>
      </div>
    </div>
  );
}

// Helper functions
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
} 