import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Arrow from "../../components/ui/Arrow";

const projects = [
  {
    title: "Splenddd",
    description:
      "Sites web pour entreprises et communes : packages à prix fixe, multi-pages, hébergement inclus.",
    url: "https://splenddd.vercel.app/",
    tags: "Next.js · Vercel",
  },
  {
    title: "Back2Mboa",
    description:
      "Plateforme territoire et diaspora : mairies, investisseurs, opportunités d'affaires qualifiées.",
    url: "https://back2mboa.com/",
    tags: "Plateforme",
  },
  {
    title: "Solutionneurs",
    description:
      "Site du cabinet Solutionneurs : academy, consulting et missions d'impact.",
    url: "http://solutionneurs.com/",
    tags: "Institutionnel",
  },
  {
    title: "FarmEase",
    description:
      "Gestion d'exploitations agricoles : élevage, finances, alertes, mode hors ligne. Backend, déploiement, maintenance.",
    url: "https://farmease.io",
    tags: "Backend · DevOps · API",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-b border-ink/10 bg-paper">
      <div className="px-gutter py-10 lg:py-12">
        <SectionTitle side subtitle="Sites et apps en ligne.">
          Projets
        </SectionTitle>
      </div>

      <ul className="border-t border-ink/10">
        {projects.map((project) => (
          <li key={project.title} className="border-b border-ink/10 last:border-b-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-2 px-gutter py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            >
              <span>
                <span className="text-2xl font-bold tracking-tight text-ink group-hover:underline sm:text-3xl">
                  {project.title}
                </span>
                <span className="mt-2 block max-w-[54ch] text-sm leading-relaxed text-muted sm:mt-1">
                  {project.description}
                </span>
              </span>
              <span className="text-xs text-muted sm:text-right">
                {project.tags} <Arrow dir="out" className="ml-1" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
