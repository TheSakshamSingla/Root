"use client";

import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export default function CommunitySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,230,118,0.05)] to-[rgba(0,176,255,0.05)]"></div>
      
      {/* Animated circuit-like lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00e676] to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#00b0ff] to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#00e676] to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e676] to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00b0ff] to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e676] to-transparent"></div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="neomorphic rounded-3xl overflow-hidden">
          <div className="glass-card p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the <span className="text-[#00e676]">Root Things</span> Community
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect with fellow Android enthusiasts, get personalized support, and be the first to 
                know about the latest modules and tutorials.
              </p>
              
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="https://t.me/Rootthings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  <FaTelegram size={24} className="mr-3" />
                  Join @Rootthings on Telegram
                </a>
              </motion.div>
              
              <div className="mt-8 text-gray-400">
                <p>Already over <span className="text-[#ffffff] font-bold">10,000+</span> members in our community!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 