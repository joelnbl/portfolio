import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Social Network Data Management",
    description: "Developed a robust system for managing social network data with optimized performance and scalability.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    tags: ["React", "NestJS", "TypeORM", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "User Profile Repository",
    description: "Created a comprehensive user profile management system with advanced search capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Angular", "TypeScript", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Accounts Catalog Table",
    description: "Built a dynamic Angular component featuring advanced search and pagination functionality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Angular", "RxJS", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "YouTube Subtitle Translator",
    description: "Chrome extension for real-time translation of YouTube subtitles across multiple languages.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["JavaScript", "Chrome API", "i18n"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Showcasing some of my most impactful work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="h-4 w-4" /> View Code
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}