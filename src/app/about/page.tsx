"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FaRocket, FaHistory, FaUsers, FaMobileAlt } from "react-icons/fa";

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

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#00e676]">Root Things</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your comprehensive resource for Android rooting, customization, and advanced tweaks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                Root Things was created with a simple yet powerful mission: to empower Android users 
                with the knowledge and tools to take full control of their devices.
              </p>
              <p className="text-gray-300 mb-4">
                We believe that your device should work for you, not the other way around. Through rooting 
                and system modifications, we help you unlock features, improve performance, and 
                customize your Android experience in ways the manufacturers never intended.
              </p>
              <p className="text-gray-300">
                Whether you're a seasoned developer or a curious beginner, our guides and modules 
                are designed to be accessible, reliable, and cutting-edge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="neomorphic p-2 rounded-2xl w-full max-w-md">
                <div className="glass-card rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00e676] to-transparent opacity-20 blur-xl rounded-full -mr-6 -mt-6"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mr-4">
                      <FaRocket className="text-[#00e676] text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold">@Rootthings</h3>
                  </div>
                  <p className="text-gray-300">
                    Founded in 2021, our Telegram channel has grown to become one of the most trusted 
                    sources for Android rooting information, with a community of over 10,000 members 
                    sharing knowledge and helping each other.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <motion.div variants={itemVariants} className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mb-4">
                <FaHistory className="text-[#00e676] text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Root Evolution</h3>
              <p className="text-gray-300">
                We've witnessed and documented the evolution of Android rooting, from the early 
                superuser days to modern solutions like Magisk, KernelSU, and Apatch.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,176,255,0.2)] flex items-center justify-center mb-4">
                <FaUsers className="text-[#00b0ff] text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Driven</h3>
              <p className="text-gray-300">
                Everything we create is inspired by our community's needs. We listen, adapt, and develop 
                solutions that address real challenges faced by rooted Android users.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mb-4">
                <FaMobileAlt className="text-[#00e676] text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Device Freedom</h3>
              <p className="text-gray-300">
                We believe in digital freedom and the right to fully control your own device. 
                Our guides help you break free from manufacturer limitations and carrier restrictions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="neomorphic p-2 rounded-2xl"
          >
            <div className="glass-card p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Timeline of Android Rooting</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e676] via-[#00b0ff] to-[#00e676] transform md:translate-x-[-0.5px]"></div>
                
                {/* Timeline events */}
                <div className="space-y-12 relative">
                  <TimelineEvent 
                    year="2009" 
                    title="Android Rooting Begins" 
                    content="Early methods of gaining root access emerge for Android devices, starting with the G1/Dream."
                    right={false}
                  />
                  
                  <TimelineEvent 
                    year="2010-2012" 
                    title="SuperUser Era" 
                    content="SuperUser becomes the standard for root management, with various exploits used to gain initial access."
                    right={true}
                  />
                  
                  <TimelineEvent 
                    year="2013-2015" 
                    title="SuperSU Dominance" 
                    content="SuperSU becomes the most popular root solution, offering advanced control over root permissions."
                    right={false}
                  />
                  
                  <TimelineEvent 
                    year="2016-2017" 
                    title="Magisk Introduction" 
                    content="Magisk is introduced, offering systemless root that can bypass SafetyNet and hide root from apps."
                    right={true}
                  />
                  
                  <TimelineEvent 
                    year="2018-2020" 
                    title="Magisk Evolution" 
                    content="Magisk becomes the dominant rooting solution, introducing modules for easy system modifications."
                    right={false}
                  />
                  
                  <TimelineEvent 
                    year="2021-2022" 
                    title="Play Integrity Challenges" 
                    content="Google introduces Play Integrity API, creating new challenges for root hiding methods."
                    right={true}
                  />
                  
                  <TimelineEvent 
                    year="2023-Present" 
                    title="KernelSU & Apatch" 
                    content="New kernel-based solutions emerge, offering alternatives to traditional rooting methods."
                    right={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

function TimelineEvent({ year, title, content, right = false }: { year: string, title: string, content: string, right: boolean }) {
  return (
    <div className={`flex flex-col ${right ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-4`}>
      <div className="md:w-[calc(50%-20px)] flex-grow-0 flex-shrink-0">
        <div className="glass-card p-6 rounded-xl">
          <div className="mb-2">
            <span className="text-xs font-semibold bg-[rgba(0,230,118,0.1)] text-[#00e676] px-2 py-1 rounded">
              {year}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
      
      <div className="md:w-10 flex items-center justify-center relative">
        <div className="w-4 h-4 rounded-full bg-[#00e676] z-10"></div>
      </div>
      
      <div className="md:w-[calc(50%-20px)] hidden md:block"></div>
    </div>
  );
} 