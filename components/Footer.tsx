import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'mail': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0 block sm:inline">
            Ronada S.
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.platform}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-500 me-4 md:me-6 flex items-center gap-2 transition-colors">
                  {getIcon(link.icon)}
                  <span className="hidden sm:inline">{link.platform}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-dark-border lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Ronada Sakalesha. Built with React & Tailwind.
        </span>
      </div>
    </footer>
  );
};
