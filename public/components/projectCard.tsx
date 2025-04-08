"use client";
import { motion } from 'framer-motion';

interface Project {
   title: string;
   description: string;
   link: string;
}

interface ProjectCardProps {
   project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
   return (
      <motion.div
      className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      >
      <div className="p-6">
         <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            {project.title}
         </h3>
         <p className="text-gray-600 mb-4">{project.description}</p>
         <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:underline font-medium"
         >
            View Project
         </a>
      </div>
      </motion.div>
   );
}
