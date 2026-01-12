import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] -z-10 dark:bg-primary-900/10"></div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-50/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for Opportunities
            <span className="mx-2 text-slate-300 dark:text-slate-700">|</span>
            <a
              href="/resume.pdf"
              download="Ronada_Sakalesha_Resume.pdf"
              className="inline-flex items-center gap-1 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent gradient-text">
              Ronada Sakalesha
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-6">
            {PERSONAL_DETAILS.title}
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed mx-auto">
            {PERSONAL_DETAILS.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 dark:text-white bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex gap-8 text-slate-400">
            <a href="https://github.com/sakalesha" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/ronada-sakalesha" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200"><Linkedin size={28} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
