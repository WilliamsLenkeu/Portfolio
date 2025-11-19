import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {/* Background actif */}
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-purple rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          
          {/* Background hover */}
          {activeCategory !== category && (
            <div className="absolute inset-0 glass rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity" />
          )}
          
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilter;
