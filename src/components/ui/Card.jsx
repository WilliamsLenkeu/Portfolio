import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'glass', 
  hover = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const variants = {
    glass: 'glass',
    'glass-strong': 'glass-strong',
    solid: 'bg-secondary border border-white/10',
    gradient: 'bg-gradient-to-br from-secondary to-primary border border-white/10',
  };
  
  const hoverStyles = hover ? 'hover-lift hover:border-accent/30' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
