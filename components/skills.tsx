import { Code2, Database, Globe, Server, Smartphone, Terminal, GitBranch, Brain } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Frontend Development",
    description: "React, Next.js, Angular, TypeScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "NestJS, TypeORM, Go, Python, Java, Ruby 3.3.0",
  },
  {
    icon: Database,
    title: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, Redis",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Cross-platform solutions",
  },
  {
    icon: Terminal,
    title: "Development Tools",
    description: "Neovim, Lua configurations, Git, Docker",
  },
  {
    icon: Code2,
    title: "Languages",
    description: "TypeScript, Go, Python, Java, Ruby",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git, GitHub, GitLab, Code Review",
  },
  {
    icon: Brain,
    title: "Interests",
    description: "Crypto, Chrome Extensions, AI Integration",
  },
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400">
          26 years of experience across multiple technologies and domains
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20">
                <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}