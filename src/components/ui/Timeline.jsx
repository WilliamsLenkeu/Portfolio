import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-purple to-accent-pink" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Point sur la timeline */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-accent to-accent-purple rounded-full border-4 border-primary transform -translate-x-1/2 z-10 glow-accent"
          />

          {/* Contenu */}
          <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              {/* Période */}
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent border border-accent/30">
                {item.period}
              </span>

              {/* Titre */}
              <h3 className="text-xl font-bold mb-2 gradient-text">{item.title}</h3>

              {/* Sous-titre */}
              {item.subtitle && (
                <h4 className="text-md text-gray-300 mb-3">{item.subtitle}</h4>
              )}

              {/* Description */}
              <p className="text-gray-400 text-sm">{item.description}</p>

              {/* Tags optionnels */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
