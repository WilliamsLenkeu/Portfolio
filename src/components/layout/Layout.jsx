import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen animated-gradient-bg text-white font-sans flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20 z-10 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
