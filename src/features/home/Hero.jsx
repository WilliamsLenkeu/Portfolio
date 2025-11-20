import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import ParticlesBackground from '../../components/ui/ParticlesBackground';
import Button from '../../components/ui/Button';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
      {/* Particules animées en arrière-plan */}
      <ParticlesBackground />
      
      {/* Orbes flottants pour effet de profondeur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pulse-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-2xl float-animation" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center mt-10">
          {/* Avatar avec effet 3D et Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-pink rounded-full blur-xl opacity-50 animate-pulse-glow" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent via-accent-purple to-accent-pink p-1 glow-accent">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text-animated">
                WL
              </div>
            </div>
          </motion.div>

          {/* Badge de statut */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Disponible pour de nouveaux projets
            </span>
          </motion.div> */}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Salut, je suis{' '}
            <span className="gradient-text-animated">Williams Lenkeu</span>
          </motion.h1>
          
          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-3xl text-gray-300 mb-8 h-20 flex items-center"
          >
            <Typewriter
              options={{
                strings: [
                  "Développeur Full Stack",
                  "Passionné par le développement web et mobile",
                  "Créateur d'expériences web",
                  "Architecte de solutions modernes",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed"
          >
            Je transforme des idées en{' '}
            <span className="text-accent font-semibold">applications web modernes</span> et performantes.
            Spécialisé dans React, Node.js et les technologies cloud.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = 'mailto:contact@williamslenkeu.com'}
              icon={<HiArrowRight className="w-5 h-5" />}
            >
              Me contacter
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/resume'}
            >
              Voir mon CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-4 mb-10"
          >
            <motion.a
              href="https://github.com/WilliamsLenkeu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-4 rounded-full text-gray-400 hover:text-accent transition-colors hover:border-accent/30 border border-transparent"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/williams-lenkeu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-4 rounded-full text-gray-400 hover:text-accent transition-colors hover:border-accent/30 border border-transparent"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:williamslenkeu.u@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-4 rounded-full text-gray-400 hover:text-accent transition-colors hover:border-accent/30 border border-transparent"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="text-sm">Scroll</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
