import ProjectCard from './projectCard';

const projects = [
   {
      title: 'Project One',
      description: 'A brief description of your project that is concise and engaging.',
      link: 'https://example.com',
   },
   {
      title: 'Project Two',
      description: 'Another project description that showcases your skills.',
      link: 'https://example.com',
   },
];

export default function ProjectSection() {
   return (
      <section className="py-16 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Projects
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
         </div>
      </div>
      </section>
   );
}
