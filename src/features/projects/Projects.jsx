import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectFilter from '../../components/ui/ProjectFilter';
import SectionTitle from '../../components/ui/SectionTitle';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Mon site personnel construit avec React, Tailwind CSS et Framer Motion. Il présente mes projets et mes compétences avec des animations modernes et un design premium.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com/WilliamsLenkeu/Portfolio",
      demo: "https://williamslenkeu.com",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "Web"
    },
    {
      title: "E-commerce App",
      description: "Une application de commerce électronique complète avec panier d'achat, système de paiement Stripe, gestion des utilisateurs et interface d'administration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Next.js", "Stripe", "MongoDB", "Node.js"],
      category: "Full Stack"
    },
    {
      title: "Task Manager",
      description: "Outil de gestion de tâches collaboratif avec synchronisation en temps réel, notifications push et interface intuitive pour les équipes.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Vue.js", "Firebase", "Vuex"],
      category: "Web"
    },
    {
      title: "API REST Microservices",
      description: "Architecture microservices avec API REST, authentification JWT, documentation Swagger et déploiement Docker.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["Node.js", "Express", "Docker", "PostgreSQL"],
      category: "Backend"
    },
    {
      title: "Mobile Fitness App",
      description: "Application mobile de fitness avec suivi d'activités, plans d'entraînement personnalisés et intégration avec wearables.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["React Native", "Redux", "Firebase"],
      category: "Mobile"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique avec visualisations de données interactives, rapports personnalisables et export de données.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "#",
      demo: "#",
      tags: ["React", "D3.js", "Chart.js", "TypeScript"],
      category: "Web"
    }
  ];

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
