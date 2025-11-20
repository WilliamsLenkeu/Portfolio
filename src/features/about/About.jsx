import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase,
  FaCode, FaServer, FaMobileAlt, FaRocket, FaLightbulb, FaJava, FaPhp, FaAngular, FaBootstrap
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiNestjs, SiDjango, SiSpringboot, 
  SiLaravel, SiFlutter, SiMysql, SiFirebase, SiMongodb, SiDart, SiJavascript, SiPostgresql
} from 'react-icons/si';
import SectionTitle from '../../components/ui/SectionTitle';
import Timeline from '../../components/ui/Timeline';
import Card from '../../components/ui/Card';
import avatarImage from '../../Assets/avatar.webp';

const About = () => {
  // État pour les données GitHub
  const [githubData, setGithubData] = useState({
    repos: 0,
    totalStars: 0,
    followers: 0,
    languages: []
  });
  const [loading, setLoading] = useState(true);

  // Récupération des données GitHub
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Récupérer les informations de l'utilisateur
        const userResponse = await fetch('https://api.github.com/users/WilliamsLenkeu');
        const userData = await userResponse.json();

        // Récupérer les repositories
        const reposResponse = await fetch('https://api.github.com/users/WilliamsLenkeu/repos?per_page=100');
        const reposData = await reposResponse.json();

        // Calculer le total des stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Calculer les langages utilisés
        const languagesCount = {};
        reposData.forEach(repo => {
          if (repo.language) {
            languagesCount[repo.language] = (languagesCount[repo.language] || 0) + 1;
          }
        });

        // Convertir en tableau et trier
        const languagesArray = Object.entries(languagesCount)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / reposData.length) * 100)
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        // Couleurs pour les langages
        const languageColors = {
          JavaScript: "from-yellow-400 to-yellow-600",
          TypeScript: "from-blue-400 to-blue-600",
          PHP: "from-purple-400 to-purple-600",
          Java: "from-red-400 to-red-600",
          Dart: "from-cyan-400 to-cyan-600",
          Python: "from-green-400 to-green-600",
          HTML: "from-orange-400 to-orange-600",
          CSS: "from-pink-400 to-pink-600",
          Blade: "from-red-300 to-red-500"
        };

        const languagesWithColors = languagesArray.map(lang => ({
          ...lang,
          color: languageColors[lang.name] || "from-gray-400 to-gray-600"
        }));

        setGithubData({
          repos: userData.public_repos,
          totalStars,
          followers: userData.followers,
          languages: languagesWithColors
        });
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données GitHub:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Données exactes du CV
  const technicalArsenal = [
    {
      category: "Langages de programmation",
      icon: <FaCode className="text-accent" />,
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Java", icon: <FaJava /> }
      ]
    },
    {
      category: "Frameworks Back End",
      icon: <FaServer className="text-blue-400" />,
      items: [
        { name: "NodeJs", icon: <FaNodeJs /> },
        { name: "NestJs", icon: <SiNestjs /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Java Spring Boot", icon: <SiSpringboot /> },
        { name: "Laravel", icon: <SiLaravel /> }
      ]
    },
    {
      category: "Frameworks Front End",
      icon: <FaMobileAlt className="text-green-400" />,
      items: [
        { name: "ReactJs", icon: <FaReact /> },
        { name: "AngularJS", icon: <FaAngular /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "TailwindCss", icon: <SiTailwindcss /> }
      ]
    },
    {
      category: "Bases de données",
      icon: <FaDatabase className="text-accent-purple" />,
      items: [
        { name: "MySql", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    }
  ];

  const experience = [
    {
      period: "Jan 2025 - Juin 2025",
      title: "Développeur Fullstack",
      subtitle: "Smart Service Hub",
      description: "Développement d'une application mobile Flutter d'aide à l'orientation académique. Mise en place du frontend (Flutter) et du backend (NestJS).",
      tags: ["Flutter", "NestJS", "Mobile", "Backend"]
    },
    {
      period: "Avril 2024 - Juin 2024",
      title: "Assistant service courriel",
      subtitle: "Ministère de l'enseignement supérieur",
      description: "Assistant au service de courriel du ministère.",
      tags: ["Administration", "Support"]
    },
    {
      period: "Juin 2023 - Sept 2023",
      title: "Développeur Frontend Mobile",
      subtitle: "SKLF GROUP",
      description: "Développement d'une application mobile de communication en Flutter.",
      tags: ["Flutter", "Mobile", "Frontend"]
    },
    {
      period: "Juil 2022 - Sept 2022",
      title: "Développeur Back-end",
      subtitle: "IccSoft",
      description: "Développement d'une application web avec Django. Augmentation de l'efficacité du processus de recrutement.",
      tags: ["Django", "Python", "Backend"]
    },
    {
      period: "Juin 2021 - Août 2021",
      title: "Développeur Web",
      subtitle: "SKLF GROUP",
      description: "Création d'un site web responsive. Intégration d'une application web pour la gestion des inscriptions aux formations.",
      tags: ["Web", "Responsive", "Intégration"]
    }
  ];

  const stats = [
    { icon: <FaRocket />, value: "5+", label: "Projets majeurs" },
    { icon: <FaCode />, value: "4+", label: "Années d'expérience" },
    { icon: <FaLightbulb />, value: "100%", label: "Engagement" }
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
                <img 
                  src={avatarImage} 
                  alt="Williams Lenkeu" 
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  Williams Lenkeu
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Ingénieur des Travaux Informatiques et Développeur Fullstack passionné par la conception 
                  d'interfaces innovantes et performantes. Je maîtrise un large éventail de technologies 
                  allant du mobile (Flutter) au web (React, Angular) et au backend (NodeJS, Django, Spring Boot).
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Fort d'une capacité d'adaptation rapide et d'un esprit d'équipe solide, je suis à la recherche 
                  d'opportunités pour appliquer mes compétences et contribuer à des projets ambitieux.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
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

        {/* Arsenal Technique (Nouvelle Section) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Arsenal <span className="gradient-text-animated">Technique</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              L'ensemble des technologies que je maîtrise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalArsenal.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass-strong" className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{group.icon}</div>
                    <h4 className="text-xl font-bold gradient-text">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent/50 transition-colors"
                      >
                        <span className="text-accent text-lg">{item.icon}</span>
                        <span className="text-gray-300 font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
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

        {/* GitHub Contributions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Activité <span className="gradient-text-animated">GitHub</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mon tableau de contributions quotidiennes sur GitHub
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glass-strong" className="w-full max-w-5xl mx-auto overflow-hidden">
              <div className="p-8">
                {/* GitHub Profile Link */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-purple p-0.5">
                      <img 
                        src={avatarImage} 
                        alt="Williams Lenkeu" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold gradient-text">@WilliamsLenkeu</h4>
                      <p className="text-gray-400 text-sm">Développeur Full Stack</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/WilliamsLenkeu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent/50 transition-colors text-accent"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Voir le profil
                  </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Repositories", value: loading ? "..." : githubData.repos, icon: "📦" },
                    { label: "Total Stars", value: loading ? "..." : githubData.totalStars, icon: "⭐" },
                    { label: "Followers", value: loading ? "..." : githubData.followers, icon: "👥" },
                    { label: "Langages", value: loading ? "..." : `${githubData.languages.length}+`, icon: "🔧" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 text-center"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Top Languages */}
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-300 mb-4">Langages les plus utilisés</h5>
                  {loading ? (
                    <div className="text-center text-gray-400 py-8">Chargement des données...</div>
                  ) : githubData.languages.length > 0 ? (
                    githubData.languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{lang.name}</span>
                          <span className="text-gray-400">{lang.percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center text-gray-400 py-8">Aucune donnée disponible</div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
