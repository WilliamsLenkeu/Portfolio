import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/WilliamsLenkeu', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/williamslenkeu', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/williamslenkeu', label: 'Twitter' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:contact@williamslenkeu.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/project' },
    { name: 'CV', path: '/resume' },
  ];

  return (
    <footer className="relative bg-primary border-t border-white/10 overflow-hidden mt-10">
      {/* Fond avec gradient animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-4">
              <div className="text-3xl font-bold flex items-center gap-1">
                <span className="gradient-text-animated">WL</span>
                <span className="text-accent">.</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Développeur Full Stack passionné par la création d'expériences web modernes et performantes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass p-3 rounded-lg text-gray-400 hover:text-accent transition-colors hover:border-accent/30 border border-transparent"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@williamslenkeu.com"
                  className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FaEnvelope className="text-accent" />
                  contact@williamslenkeu.com
                </a>
              </li>
              <li className="text-gray-400">
                📍 Disponible pour des projets freelance
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {year} Williams Lenkeu. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Fait avec <FaHeart className="text-red-500 animate-pulse" /> et React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
