import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-blue-500 text-white hover:shadow-2xl hover:shadow-accent/50 hover:scale-105',
    secondary: 'glass text-white hover:bg-white/10 border border-accent/30 glow-accent-hover',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: variant === 'ghost' ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
    </motion.button>
  );
};

export default Button;
