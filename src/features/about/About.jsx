import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython,
  FaCode, FaServer, FaMobileAlt, FaRocket, FaUsers, FaLightbulb
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss
} from 'react-icons/si';
import SectionTitle from '../../components/ui/SectionTitle';
import SkillCard from '../../components/ui/SkillCard';
import Timeline from '../../components/ui/Timeline';
import Card from '../../components/ui/Card';

const About = () => {
  const skills = [
    {
      name: "React & Next.js",
      icon: <FaReact className="text-accent" />,
      level: 95,
      description: "Développement d'applications web modernes et performantes"
    },
    {
      name: "Node.js & Express",
      icon: <FaNodeJs className="text-green-400" />,
      level: 90,
      description: "Création d'API REST et architectures backend scalables"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" />,
      level: 85,
      description: "Code type-safe et maintenable pour projets complexes"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 92,
      description: "Design systems et interfaces utilisateur modernes"
    },
    {
      name: "MongoDB & PostgreSQL",
      icon: <FaDatabase className="text-accent-purple" />,
      level: 88,
      description: "Modélisation et gestion de bases de données"
    },
    {
      name: "Docker & CI/CD",
      icon: <FaDocker className="text-blue-500" />,
      level: 80,
      description: "Containerisation et déploiement automatisé"
    }
  ];

  const experience = [
    {
      period: "2023 - Présent",
      title: "Développeur Full Stack Senior",
      subtitle: "Tech Company Inc.",
      description: "Lead technique sur des projets d'envergure, architecture microservices, mentorat d'équipe et implémentation de best practices.",
      tags: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      period: "2021 - 2023",
      title: "Développeur Full Stack",
      subtitle: "Startup Innovation",
      description: "Développement de features clés, optimisation des performances et migration vers une architecture moderne.",
      tags: ["Vue.js", "Express", "MongoDB", "Redis"]
    },
    {
      period: "2019 - 2021",
      title: "Développeur Frontend",
      subtitle: "Digital Agency",
      description: "Création d'interfaces utilisateur responsive et accessibles pour des clients variés.",
      tags: ["React", "Tailwind", "Framer Motion"]
    },
    {
      period: "2018 - 2019",
      title: "Développeur Junior",
      subtitle: "Web Solutions",
      description: "Apprentissage des fondamentaux du développement web et contribution à divers projets.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ];

  const stats = [
    { icon: <FaRocket />, value: "50+", label: "Projets réalisés" },
    { icon: <FaUsers />, value: "30+", label: "Clients satisfaits" },
    { icon: <FaCode />, value: "5+", label: "Années d'expérience" },
    { icon: <FaLightbulb />, value: "100%", label: "Passion" }
  ];

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Fond avec gradient animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Introduction */}
        <SectionTitle subtitle="Découvrez mon parcours et mes compétences">
          À propos de <span className="gradient-text-animated">moi</span>
        </SectionTitle>

        {/* Présentation personnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card variant="glass-strong" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-accent via-accent-purple to-accent-pink p-1 glow-accent flex-shrink-0"
              >
                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-5xl font-bold gradient-text-animated">
                  WL
                </div>
              </motion.div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  Williams Lenkeu
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Développeur Full Stack passionné avec plus de 5 ans d'expérience dans la création 
                  d'applications web modernes et performantes. Je transforme des idées complexes en 
                  solutions élégantes et intuitives.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Spécialisé dans l'écosystème JavaScript/TypeScript, j'aime explorer de nouvelles 
                  technologies et partager mes connaissances avec la communauté.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" hover={true} className="text-center">
                <div className="text-4xl text-accent mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compétences */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="gradient-text-animated">Compétences</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions exceptionnelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Parcours professionnel */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Mon <span className="gradient-text-animated">Parcours</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une évolution constante à travers différentes expériences enrichissantes
            </p>
          </motion.div>

          <Timeline items={experience} />
        </div>

        {/* Domaines d'expertise */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Domaines d'<span className="gradient-text-animated">Expertise</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode size={40} />,
                title: "Frontend Development",
                desc: "Création d'interfaces utilisateur réactives et esthétiques avec React, Next.js, Tailwind CSS et Framer Motion. Focus sur l'UX et les performances."
              },
              {
                icon: <FaServer size={40} />,
                title: "Backend Development",
                desc: "Développement d'API REST robustes et scalables avec Node.js, Express et bases de données SQL/NoSQL. Architecture microservices et cloud."
              },
              {
                icon: <FaMobileAlt size={40} />,
                title: "Mobile & Cross-Platform",
                desc: "Conception d'applications mobiles performantes avec React Native et Progressive Web Apps pour une expérience utilisateur optimale."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass-strong" hover={true} className="h-full">
                  <div className="text-accent mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
