import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  children, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignments[align]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {children}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 bg-gradient-to-r from-accent via-accent-purple to-accent-pink rounded-full mt-4 ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionTitle;
