import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectFilter from '../../components/ui/ProjectFilter';
import SectionTitle from '../../components/ui/SectionTitle';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const projects = useMemo(() => [
    {
      title: "Orientation Académique App",
      description: "Application mobile d'aide à l'orientation académique. Solution complète incluant une interface mobile intuitive et un backend robuste.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Flutter", "NestJS", "Mobile"],
      category: "Mobile"
    },
    {
      title: "Communication App",
      description: "Application mobile de communication en temps réel développée avec Flutter pour faciliter les échanges au sein d'une organisation.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Flutter", "Dart", "Mobile"],
      category: "Mobile"
    },
    {
      title: "Recruitment Platform",
      description: "Application web de gestion du processus de recrutement. Optimisation des flux de travail et gestion des candidats.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Django", "Python", "Web"],
      category: "Web"
    },
    {
      title: "Gestion Inscriptions",
      description: "Plateforme web pour la gestion des inscriptions aux formations. Interface responsive et tableau de bord administratif.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Web", "Responsive", "Management"],
      category: "Web"
    },
    {
      title: "Portfolio Personnel",
      description: "Mon site personnel construit avec React, Tailwind CSS et Framer Motion. Il présente mes projets et mes compétences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com/WilliamsLenkeu/Portfolio",
      demo: "https://williamslenkeu.com",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "Web"
    }
  ], []);

  // Extraire toutes les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(p => p.category))];
    return ['Tous', ...uniqueCategories];
  }, [projects]);

  // Filtrer les projets selon la catégorie active
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Tous') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Fond avec gradient animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Découvrez mes réalisations et projets récents">
          Mes <span className="gradient-text-animated">Projets</span>
        </SectionTitle>

        {/* Filtre de catégories */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grille de projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
