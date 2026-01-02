import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Here is a collection of my technical projects, ranging from Algorithmic Trading systems and specialized Bots to Full Stack web applications.
            Each project represents a challenge I've solved and a skill I've refined.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center p-8 bg-slate-50 dark:bg-dark-card rounded-2xl border border-dashed border-slate-300 dark:border-dark-border">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">More coming soon...</h3>
          <p className="text-slate-600 dark:text-slate-400">I am constantly building and learning. Check out my GitHub for more experiments.</p>
        </div>
      </div>
    </div>
  );
};
