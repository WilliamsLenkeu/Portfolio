import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, FaBriefcase, FaGraduationCap, FaAward, 
  FaCode, FaLanguage
} from 'react-icons/fa';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import cvPDF from '../../Assets/curriculum_vitae.pdf';

const Resume = () => {
  const experiences = [
    {
      title: "Développeur Fullstack",
      company: "Smart Service Hub",
      period: "Jan 2025 - Juin 2025",
      description: "Développement d'une application mobile Flutter d'aide à l'orientation académique.",
      achievements: [
        "Mise en place du frontend avec Flutter",
        "Développement du backend avec NestJS",
        "Architecture complète de l'application"
      ]
    },
    {
      title: "Assistant service courriel",
      company: "Ministère de l'enseignement supérieur",
      period: "Avril 2024 - Juin 2024",
      description: "Assistant au service de courriel du ministère.",
      achievements: [
        "Gestion des communications",
        "Support administratif"
      ]
    },
    {
      title: "Développeur Frontend Mobile",
      company: "SKLF GROUP",
      period: "Juin 2023 - Sept 2023",
      description: "Développement d'une application mobile de communication en Flutter.",
      achievements: [
        "Développement d'une application mobile de communication",
        "Interface utilisateur intuitive",
        "Intégration temps réel"
      ]
    },
    {
      title: "Développeur Back-end",
      company: "IccSoft",
      period: "Juil 2022 - Sept 2022",
      description: "Développement d'une application web avec Django.",
      achievements: [
        "Développement d'une application web de recrutement",
        "Augmentation de l'efficacité du processus de recrutement",
        "Optimisation des flux de travail"
      ]
    },
    {
      title: "Développeur Web",
      company: "SKLF GROUP",
      period: "Juin 2021 - Août 2021",
      description: "Création d'un site web responsive et intégration d'une application web.",
      achievements: [
        "Création d'un site web responsive",
        "Intégration d'une application web pour la gestion des inscriptions aux formations",
        "Interface administrateur"
      ]
    }
  ];

  const education = [
    {
      degree: "Licence Professionnelle d'Informatique",
      school: "Université de Yaoundé 1, Filière ICT4D",
      period: "Sept 2022 - Juil 2025",
      description: "Ingénieur des Travaux Informatiques - Mention Excellente"
    },
    {
      degree: "Baccalauréat Série TI",
      school: "Collège La Retraite",
      period: "Sept 2021 - Juin 2022",
      description: "Projets scolaires en développement web. Matières principales : algorithmique, programmation avancée"
    }
  ];

  const skills = [
    { category: "Langages", items: ["JavaScript", "PHP", "Dart", "Java"] },
    { category: "Backend", items: ["NodeJs", "NestJs", "Django", "Spring Boot", "Laravel"] },
    { category: "Frontend", items: ["ReactJs", "AngularJS", "Flutter", "Bootstrap", "TailwindCss"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] }
  ];

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" }
  ];

  const certifications = [];

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
                  onClick={() => {
                    try {
                      // Créer un lien de téléchargement avec le fichier importé
                      const link = document.createElement('a');
                      link.href = cvPDF;
                      link.download = 'curriculum_vitae.pdf';
                      link.target = '_blank';
                      link.rel = 'noopener noreferrer';
                      
                      // Ajouter au DOM, cliquer et nettoyer
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      
                      console.log('✅ Téléchargement du CV lancé avec succès');
                    } catch (error) {
                      console.error('❌ Erreur lors du téléchargement du CV:', error);
                      alert('Une erreur est survenue lors du téléchargement du CV. Veuillez réessayer.');
                    }
                  }}
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
          {certifications.length > 0 && (
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
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
