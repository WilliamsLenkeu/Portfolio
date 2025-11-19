import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass-strong rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
    >
      {/* Icône */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 + 0.2, type: "spring" }}
        className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent-purple/20 flex items-center justify-center text-3xl"
      >
        {skill.icon}
      </motion.div>

      {/* Nom de la compétence */}
      <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
      
      {/* Niveau */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Niveau</span>
          <span className="text-sm font-semibold text-accent">{skill.level}%</span>
        </div>
        
        {/* Barre de progression */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-accent via-accent-purple to-accent-pink rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400">{skill.description}</p>
    </motion.div>
  );
};

export default SkillCard;
