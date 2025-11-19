import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, FaBriefcase, FaGraduationCap, FaAward, 
  FaCode, FaLanguage
} from 'react-icons/fa';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Resume = () => {
  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "Tech Company Inc.",
      period: "2023 - Présent",
      description: "Lead technique sur des projets d'envergure, architecture microservices et mentorat d'équipe.",
      achievements: [
        "Migration vers une architecture microservices",
        "Amélioration des performances de 40%",
        "Mentorat de 5 développeurs juniors"
      ]
    },
    {
      title: "Développeur Full Stack",
      company: "Startup Innovation",
      period: "2021 - 2023",
      description: "Développement de features clés et optimisation des performances.",
      achievements: [
        "Développement de 15+ features majeures",
        "Réduction du temps de chargement de 60%",
        "Mise en place de CI/CD"
      ]
    }
  ];

  const education = [
    {
      degree: "Master en Informatique",
      school: "École d'Ingénieurs",
      period: "2019 - 2021",
      description: "Spécialisation en développement web et architecture logicielle"
    },
    {
      degree: "Licence en Informatique",
      school: "Université",
      period: "2016 - 2019",
      description: "Fondamentaux de l'informatique et programmation"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST API"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] }
  ];

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
    { name: "Allemand", level: "Intermédiaire" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "MongoDB Certified Developer",
    "React Advanced Patterns"
  ];

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Fond avec gradient animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Découvrez mon parcours professionnel et mes qualifications">
          Mon <span className="gradient-text-animated">CV</span>
        </SectionTitle>

        {/* Bouton de téléchargement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Card variant="glass-strong" className="inline-block">
            <div className="flex flex-col md:flex-row items-center gap-6 p-4">
              <div className="text-6xl text-accent">
                <FaDownload />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Télécharger mon CV</h3>
                <p className="text-gray-400 mb-4">
                  Version PDF complète avec toutes mes expériences et compétences
                </p>
                <Button
                  variant="primary"
                  onClick={() => window.open('#', '_blank')}
                  icon={<FaDownload />}
                >
                  Télécharger le PDF
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Expérience Professionnelle */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <FaBriefcase className="text-3xl text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
              Expérience Professionnelle
            </h3>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass-strong" hover={true}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold gradient-text mb-1">{exp.title}</h4>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-4 py-1 text-sm rounded-full bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent border border-accent/30">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-accent mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <FaGraduationCap className="text-3xl text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Formation</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass-strong" hover={true} className="h-full">
                  <h4 className="text-lg font-bold gradient-text mb-2">{edu.degree}</h4>
                  <p className="text-gray-300 font-medium mb-2">{edu.school}</p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 mb-3">
                    {edu.period}
                  </span>
                  <p className="text-sm text-gray-400">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compétences Techniques */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <FaCode className="text-3xl text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
              Compétences Techniques
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass-strong" hover={true}>
                  <h4 className="text-lg font-bold gradient-text mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent border border-accent/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Langues et Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaLanguage className="text-2xl text-accent" />
              <h3 className="text-xl font-bold gradient-text">Langues</h3>
            </div>
            <Card variant="glass-strong">
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-accent">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaAward className="text-2xl text-accent" />
              <h3 className="text-xl font-bold gradient-text">Certifications</h3>
            </div>
            <Card variant="glass-strong">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-accent mt-1">🏆</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
