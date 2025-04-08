import ProjectCard from './projectCard';

const projects = [
   {
      title: 'Project One',
      description: 'A brief description of your project.',
      link: 'https://example.com',
   },
  // Add more project objects here
];

export default function ProjectSection() {
   return (
      <section className="py-16 bg-white">
         <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))}
         </div>
         </div>
      </section>
   );
}
