import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Target, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <Link
                    to="/projects"
                    className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Image & Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-dark-border group">
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Github size={20} /> View Code
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                                {project.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                            {project.description}
                        </p>

                        {/* Key Metrics */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary-500" /> Key Highlights
                            </h3>
                            <div className="grid gap-4">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-dark-border shadow-sm">
                                        <div className="mt-1 min-w-[20px] text-green-500">➜</div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 font-medium">{metric}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-indigo-500" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};
