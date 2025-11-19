import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full glass-strong rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
      >
        {/* Image de fond avec overlay */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-90" />
          
          {/* Overlay avec boutons au survol */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-accent/20 via-accent-purple/10 to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-4 rounded-full text-white hover:text-accent transition-colors glow-accent-hover"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={24} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-4 rounded-full text-white hover:text-accent transition-colors glow-accent-hover"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Contenu */}
        <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags de technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent border border-accent/30 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Effet de glow au survol */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-purple/5 to-accent-pink/5 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
