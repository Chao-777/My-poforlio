"use client";
import { motion } from 'framer-motion';

const heroVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const Hero = () => {
   return (
      <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4"
      >
      <motion.h1 
         className="text-5xl md:text-7xl font-bold mb-4 text-gray-900"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
         Chao Yuan
      </motion.h1>
      <motion.p 
         className="text-xl md:text-2xl text-gray-600 mb-8 text-center max-w-2xl"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { delay: 0.7 } }}
      >
         IT graduate with a Master’s in Software Development (GPA 6.5/7) and
         hands-on experience building APIs, mobile apps, and cloud-based
         systems. Skilled in Python, PHP, JavaScript, AWS, and Agile. Currently
         interning as a Junior Developer on a real-world project with an ex-
         FAANG team.
         <br />
      </motion.p>
      <motion.a
         href="#projects"
         className="px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.5 } }}
      >
         View My Work
      </motion.a>
      </motion.section>
   );
};

export default Hero;
