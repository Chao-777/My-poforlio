"use client"; // Ensure this runs on the client for Framer Motion
import { motion } from "framer-motion";

export default function Hero() {
   return (
      <section
      className="bg-[#0a192f] text-[#ccd6f6] min-h-screen flex flex-col items-center justify-center px-4"
      id="hero"
      >
      {/* Heading with fade-in animation */}
      <motion.h1
         className="text-4xl md:text-6xl font-bold text-center"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
      >
         Hello, I&apos;m <span className="text-[#64ffda]">Chao Yuan</span>.
      </motion.h1>

      {/* Subtitle / Bio with a slight delay */}
      <motion.p
         className="text-base md:text-xl text-[#8892b0] mt-4 max-w-2xl text-center leading-relaxed"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2, duration: 0.8 }}
      >
         I&apos;m an IT graduate with a Master&apos;s in Software Development 
         <strong> (GPA 6.5/7) </strong> and hands-on experience building APIs, 
         mobile apps, and cloud-based systems. Skilled in Python, PHP, JavaScript, 
         AWS, and Agile. Currently interning as a Junior Developer on a real-world 
         project with an ex-FAANG team.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
         href="#projects"
         className="mt-8 inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda11] transition duration-300 rounded font-medium"
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.4, duration: 0.8 }}
      >
         View My Work
      </motion.a>
      </section>
   );
}
