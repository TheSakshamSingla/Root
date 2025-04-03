"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { IconWand, IconShield, IconCode, IconQuestionMark, IconChevronDown, IconChevronUp } from "@tabler/icons-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RootingPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Android <span className="text-[#00e676]">Rooting</span> Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about rooting your Android device.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Root Section */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-5">
                <span className="text-[#00e676]">#</span> What is Root?
              </h2>
              <p className="text-gray-300 mb-4">
                Rooting is the process of gaining privileged control (known as "root access") over your Android device. 
                Think of it as becoming the "administrator" of your own device.
              </p>
              <p className="text-gray-300 mb-4">
                With root access, you can modify system files, install specialized apps, remove bloatware, and customize 
                your device in ways that aren't possible with a standard user account.
              </p>
              <p className="text-gray-300">
                It's the digital equivalent of opening the hood of your car to modify the engine, 
                rather than just driving it as the manufacturer intended.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-[#1e1e1e] p-2 rounded-xl shadow-md">
                <div className="bg-[#2d2d2d] rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#00e676] to-transparent opacity-10 blur-xl rounded-full -mr-10 -mt-10"></div>
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[rgba(0,230,118,0.15)] flex items-center justify-center">
                      <IconShield className="text-[#00e676]" size={36} stroke={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Why Root?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00e676] mr-2">✓</span>
                      <span className="text-gray-300">Full system control and customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00e676] mr-2">✓</span>
                      <span className="text-gray-300">Remove bloatware and system apps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00e676] mr-2">✓</span>
                      <span className="text-gray-300">Install powerful root-only apps and modules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00e676] mr-2">✓</span>
                      <span className="text-gray-300">Optimize performance and battery life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00e676] mr-2">✓</span>
                      <span className="text-gray-300">Advanced backup and restore capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooting Methods Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-5">
              <span className="text-[#00e676]">#</span> Popular Rooting Methods
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different ways to gain root access on your Android device
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Magisk Method */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.15)] flex items-center justify-center">
                    <IconWand className="text-[#00e676]" size={28} stroke={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Magisk</h3>
                <p className="text-gray-300 mb-6 text-center">
                  The most popular systemless root solution, known for its modules and ability to bypass SafetyNet.
                </p>
                
                <div className="space-y-4">
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("magisk-1")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">How it works</h4>
                      {openAccordion === "magisk-1" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "magisk-1" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <p className="text-gray-400 text-sm">
                            Magisk modifies the boot partition to inject its code during the boot process.
                            It creates a "systemless" environment where modifications are applied without
                            altering the actual system partition, making it safer and easier to revert changes.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("magisk-2")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Requirements</h4>
                      {openAccordion === "magisk-2" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "magisk-2" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Unlocked bootloader</li>
                            <li>• Custom recovery (TWRP) or fastboot support</li>
                            <li>• Stock boot image for your exact firmware</li>
                            <li>• USB debugging enabled</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("magisk-3")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Advantages</h4>
                      {openAccordion === "magisk-3" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "magisk-3" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Systemless: Doesn't modify system partition</li>
                            <li>• Module support for easy modifications</li>
                            <li>• MagiskHide for concealing root from apps</li>
                            <li>• OTA update compatible (with some manual steps)</li>
                            <li>• Active development and community support</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* KernelSU Method */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,176,255,0.15)] flex items-center justify-center">
                    <IconCode className="text-[#00b0ff]" size={28} stroke={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">KernelSU</h3>
                <p className="text-gray-300 mb-6 text-center">
                  A kernel-based root solution that offers excellent security and compatibility with modern devices.
                </p>
                
                <div className="space-y-4">
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("kernelsu-1")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">How it works</h4>
                      {openAccordion === "kernelsu-1" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "kernelsu-1" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <p className="text-gray-400 text-sm">
                            KernelSU implements root access directly within the kernel, offering a more
                            secure approach. It modifies the kernel to manage superuser access, which 
                            provides better integrity and security than userspace solutions.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("kernelsu-2")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Requirements</h4>
                      {openAccordion === "kernelsu-2" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "kernelsu-2" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Unlocked bootloader</li>
                            <li>• Supported device with GKI kernel</li>
                            <li>• ADB and fastboot tools installed</li>
                            <li>• Ability to compile custom kernels (for some devices)</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("kernelsu-3")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Advantages</h4>
                      {openAccordion === "kernelsu-3" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "kernelsu-3" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Kernel-level implementation for better security</li>
                            <li>• Support for Zygisk modules</li>
                            <li>• Better SafetyNet/Play Integrity passing</li>
                            <li>• More difficult to detect by apps</li>
                            <li>• Works well on GKI devices (Android 12+)</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Apatch Method */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.15)] flex items-center justify-center">
                    <IconShield className="text-[#00e676]" size={28} stroke={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Apatch</h3>
                <p className="text-gray-300 mb-6 text-center">
                  A newer kernel-based root solution focused on simplicity and compatibility with Magisk modules.
                </p>
                
                <div className="space-y-4">
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("apatch-1")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">How it works</h4>
                      {openAccordion === "apatch-1" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "apatch-1" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <p className="text-gray-400 text-sm">
                            Apatch works similarly to KernelSU, implementing root at the kernel level.
                            However, it focuses on simplicity and broad compatibility, especially with
                            existing Magisk modules and apps.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("apatch-2")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Requirements</h4>
                      {openAccordion === "apatch-2" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "apatch-2" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Unlocked bootloader</li>
                            <li>• GKI kernel support (Android 12+) or compatible device</li>
                            <li>• Stock boot image for your exact firmware</li>
                            <li>• USB debugging enabled</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div
                    className="bg-[#2d2d2d] p-4 rounded-lg cursor-pointer"
                    onClick={() => toggleAccordion("apatch-3")}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Advantages</h4>
                      {openAccordion === "apatch-3" ? 
                        <IconChevronUp size={20} stroke={1.5} /> : 
                        <IconChevronDown size={20} stroke={1.5} />
                      }
                    </div>
                    <AnimatePresence>
                      {openAccordion === "apatch-3" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4"
                        >
                          <ul className="text-gray-400 text-sm space-y-2">
                            <li>• Kernel-level security</li>
                            <li>• Compatibility with Magisk modules</li>
                            <li>• Good for GKI devices</li>
                            <li>• Potentially easier installation than KernelSU</li>
                            <li>• Simpler user interface for managing root</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks & Benefits Section */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="bg-[#1e1e1e] p-6 md:p-10 rounded-xl mb-10 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,82,82,0.2)] flex items-center justify-center mr-4">
                <IconQuestionMark className="text-[#ff5252]" size={24} stroke={1.5} />
              </div>
              <h3 className="text-2xl font-bold">Risks of Rooting</h3>
            </div>
            
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-[#ff5252] mr-2">!</span>
                <span>Security vulnerabilities if not managed properly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5252] mr-2">!</span>
                <span>Voiding device warranty in most cases</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5252] mr-2">!</span>
                <span>Potential for bricking your device if done incorrectly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5252] mr-2">!</span>
                <span>Some apps (especially banking apps) may detect root and refuse to work</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5252] mr-2">!</span>
                <span>OTA updates typically won't work without additional steps</span>
              </li>
            </ul>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mr-4">
                <IconShield className="text-[#00e676]" size={24} stroke={1.5} />
              </div>
              <h3 className="text-2xl font-bold">Benefits of Rooting</h3>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Complete control over your device's software and hardware</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Ability to remove pre-installed bloatware and system apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Access to powerful root-only apps and Magisk modules</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Ability to modify system behaviors and appearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Advanced backup options including full system backups</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00e676] mr-2">✓</span>
                <span>Custom ROM installation for extended device support</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Explore More?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/Rootthings"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00e676] text-black font-medium rounded-lg hover:bg-[#00c853] transition-colors"
              >
                Join Our Community
              </a>
              <a
                href="/guides"
                className="px-6 py-3 bg-[#00b0ff] text-black font-medium rounded-lg hover:bg-[#0091ea] transition-colors"
              >
                Browse Guides
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 