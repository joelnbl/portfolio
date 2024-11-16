import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-16" />
      <Skills />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-16" />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-16" />
      <Contact />
    </div>
  );
}