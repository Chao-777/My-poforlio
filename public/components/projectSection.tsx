
"use client";
import { motion } from 'framer-motion';
import ProjectCard from './projectCard';

const projects = [
   { title: 'Project One', description: 'Description of project one', link: 'https://example.com' },
   { title: 'Project Two', description: 'Description of project two', link: 'https://example.com' },
];

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
};

const ProjectsSection = () => {
   return (
      <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
         <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            Projects
         </motion.h2>
         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
         >
            {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
         </motion.div>
      </div>
      </section>
   );
};

export default ProjectsSection;
