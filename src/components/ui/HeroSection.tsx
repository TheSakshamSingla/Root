"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaPuzzlePiece, FaBook } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[rgba(18,18,18,0.8)]"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 230, 118, 0.15) 2%, transparent 0%), 
                            radial-gradient(circle at 75px 75px, rgba(0, 176, 255, 0.1) 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-[#ffffff]">Unlock Your </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] to-[#00b0ff]">
                  Android&apos;s Full Potential
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Advanced guides, premium Magisk modules, and expert tips for the ultimate rooted Android experience.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/rooting" className="btn-primary inline-flex items-center">
                  <FaRocket className="mr-2" />
                  Explore Rooting
                </Link>
                <Link href="/modules" className="btn-secondary inline-flex items-center">
                  <FaPuzzlePiece className="mr-2" />
                  Find Modules
                </Link>
                <Link href="/guides" className="btn-outline inline-flex items-center">
                  <FaBook className="mr-2" />
                  Read Guides
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="neomorphic p-2 rounded-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00e676] to-transparent opacity-20 blur-xl rounded-full -mr-6 -mt-6"></div>
              <div className="glass-card h-full w-full rounded-xl overflow-hidden aspect-[9/16] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(0,230,118,0.2)] mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00e676] text-black">
                        <FaRocket size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#ffffff]">Root Things</h3>
                    <p className="text-gray-400 text-sm">@Rootthings</p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-48 bg-gradient-to-t from-[#121212] to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-2 text-sm">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-[#00e676] rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-[#00e676] rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 