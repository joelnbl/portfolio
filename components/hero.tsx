"use client";

import { Code2, Download, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 relative" id="about">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      <div className="relative">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/20">
              <Code2 className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Joel Bello</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Remote Developer based in Spain</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A versatile software developer specializing in full-stack development
            with expertise in React, Next.js, NestJS, and TypeORM. Passionate about creating efficient,
            scalable solutions and optimizing developer workflows.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Get in Touch
            </a>
            <button className="px-6 py-3 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" /> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}