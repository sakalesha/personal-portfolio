import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
    >
      <Link to={`/projects/${project.id}`} className="block relative overflow-hidden h-48 bg-slate-100 dark:bg-slate-800 cursor-pointer">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          {project.category}
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <Link to={`/projects/${project.id}`} className="block group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        </Link>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-4 space-y-2">
          {project.metrics.slice(0, 2).map((metric, i) => (
            <div key={i} className="flex items-start text-xs text-slate-500 dark:text-slate-500">
              <span className="text-primary-500 mr-2">➜</span>
              {metric}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-dark-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
          >
            <Github size={16} className="mr-2" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              <ExternalLink size={16} className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
