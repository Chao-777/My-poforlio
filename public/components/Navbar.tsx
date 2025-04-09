"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <motion.header
         className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-[#0a192f] shadow-md" : "bg-transparent"
         }`}
         initial={{ y: -60 }}
         animate={{ y: 0 }}
      >
         <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
            {/* Left: Logo */}
            <div className="flex items-center">
               <Image
                  src="/favicon.png"
                  alt="My Logo"
                  width={33}
                  height={33}
                  className="full"
               />
            </div>

            {/* Middle: Navigation links */}
            <ul className="flex items-center space-x-6 list-none m-0 p-0 text-[#ccd6f6]">
               <li>
                  <a
                     href="#about"
                     className="hover:text-[#64ffda] transition-colors"
                  >
                     About
                  </a>
               </li>
               <li>
                  <a
                     href="#experience"
                     className="hover:text-[#64ffda] transition-colors"
                  >
                     Experience
                  </a>
               </li>
               <li>
                  <a
                     href="#projects"
                     className="hover:text-[#64ffda] transition-colors"
                  >
                     Projects
                  </a>
               </li>
            </ul>

            {/* Right: "Contact Me" Button */}
            <a
               href="#contact"
               className="border border-purple-500 text-purple-500 py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
               Contact Me
            </a>
         </nav>
      </motion.header>
   );
}
