import React from 'react';
import { PERSONAL_DETAILS, SKILLS, TIMELINE, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, FileText, ExternalLink } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap size={18} />;
      case 'Work': return <Briefcase size={18} />;
      case 'Hackathon': return <Trophy size={18} />;
      default: return <Briefcase size={18} />;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Bio Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p className="mb-6">{PERSONAL_DETAILS.about}</p>
            <p>
              I thrive on the intersection of data and development. Whether it's architecting a secure MERN stack application,
              fine-tuning an XGBoost model, or designing resilient software architectures that solve complex real-world problems,
              I am driven by impact. My academic journey at Dayananda Sagar University (CGPA 8.48) has equipped me with strong theoretical
              reasoning in Algorithms and Statistics, which I actively apply to build systems that scale.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            Experience & Education
          </h2>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute -left-[9px] top-1 bg-white dark:bg-dark-bg p-1 border-2 border-primary-500 rounded-full text-primary-500">
                  {getIcon(item.type)}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                    {item.date}
                  </span>
                </div>
                <div className="text-base font-medium text-primary-600 dark:text-primary-400 mb-2">{item.company}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATES.map((cert) => (
              <a
                key={cert.id}
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-xl hover:border-primary-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors">
                    <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{cert.issuer}</p>

                {cert.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    {cert.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h2>
          <div className="space-y-8">
            {SKILLS.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
