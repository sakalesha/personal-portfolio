import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
