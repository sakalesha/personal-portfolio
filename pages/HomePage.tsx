import React from 'react';
import { Hero } from '../components/Hero';
import { PROJECTS, SKILLS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);
  
  return (
    <div className="space-y-24 pb-16">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A selection of projects where I've applied Full Stack development and Machine Learning techniques to solve real problems.
            </p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link to="/projects" className="inline-flex items-center text-primary-600 font-medium">
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Expertise Summary */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400">My technical skill set spans across the entire development lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-border">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Full Stack Web</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Building responsive, secure, and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-1">
                <li>• React.js & TypeScript</li>
                <li>• RESTful API Design</li>
                <li>• Authentication (JWT)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-border">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Science</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Extracting insights from data using Python libraries. Experience in data cleaning, visualization, and statistical analysis.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-1">
                <li>• Pandas & NumPy</li>
                <li>• Matplotlib & Seaborn</li>
                <li>• Exploratory Data Analysis</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-border">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Machine Learning</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Developing predictive models and feature engineering to solve classification and regression problems.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-500 space-y-1">
                <li>• Scikit-Learn & XGBoost</li>
                <li>• Model Evaluation</li>
                <li>• Feature Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
