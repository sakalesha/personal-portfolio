import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-50/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for Opportunities
          </div>
          <a
            href="/resume.pdf"
            download="Ronada_Sakalesha_Resume.pdf"
            className="inline-flex ml-4 items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-card text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:border-primary-300 dark:hover:text-primary-400 dark:hover:border-primary-700 transition-all shadow-sm"
          >
            <Download size={14} /> Resume
          </a>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent gradient-text">
              Ronada Sakalesha
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-4">
            {PERSONAL_DETAILS.title}
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            {PERSONAL_DETAILS.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 dark:text-white bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-12 flex gap-6 text-slate-400">
            <a href="https://github.com/sakalesha" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/ronada-sakalesha" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://picsum.photos/seed/ronada/600/600"
              alt="Ronada Sakalesha"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
