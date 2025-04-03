"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconHome, IconTerminal, IconPackage, IconBook, IconInfoCircle, IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = [
  { href: "/", label: "Home", icon: <IconHome size={22} stroke={1.5} /> },
  { href: "/rooting", label: "Rooting", icon: <IconTerminal size={22} stroke={1.5} /> },
  { href: "/modules", label: "Modules", icon: <IconPackage size={22} stroke={1.5} /> },
  { href: "/guides", label: "Guides", icon: <IconBook size={22} stroke={1.5} /> },
  { href: "/about", label: "About", icon: <IconInfoCircle size={22} stroke={1.5} /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0f0f0f] shadow-lg" 
          : "bg-[#121212]"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 mr-3">
              <Image src="/logo.svg" alt="Root Things Logo" width={48} height={48} />
            </div>
            <span className="font-bold text-xl text-[#00e676]">Root Things</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="flex items-center text-gray-300 hover:text-[#00e676] transition-colors duration-200 px-3 py-2"
            >
              <span className="mr-2">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Always visible for smaller screens */}
        <div className="md:hidden relative">
          <button 
            className="flex items-center justify-center bg-[#1a1a1a] hover:bg-[#2d2d2d] p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? 
              <IconX size={32} stroke={1.5} className="text-[#00e676]" /> : 
              <IconMenu2 size={32} stroke={1.5} className="text-[#00e676]" />
            }
          </button>
          
          {/* Mobile Navigation - Always visible on hover */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="absolute top-[52px] right-0 w-64 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#0f0f0f] border border-[#222] rounded-lg shadow-xl overflow-hidden">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="flex items-center p-4 px-6 text-gray-200 hover:bg-[#1a1a1a] hover:text-[#00e676] transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-8 text-[#00e676]">{link.icon}</span>
                      <span className="text-lg font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 