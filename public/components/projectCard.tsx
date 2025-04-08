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
      <div className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
         <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 hover:underline"
            >
            View Project
            </a>
         </div>
      </div>
   );
}
