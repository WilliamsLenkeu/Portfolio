import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Arrow from "../../components/ui/Arrow";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const projects = [
  {
    title: "FarmEase",
    description:
      "Application de gestion d'exploitations agricoles en Afrique : suivi d'élevage, finances, alertes intelligentes, rapports et mode hors ligne. Développeur backend et consultant sur la plateforme.",
    url: "https://farmease.io",
    tags: ["Backend", "API", "Offline-first", "Mission client"],
  },
  {
    title: "EduManage",
    description:
      "Application de gestion scolaire pour le système éducatif camerounais : desktop (Tauri) et PWA, fonctionnement hors ligne avec synchronisation multi-appareils.",
    url: "https://github.com/WilliamsLenkeu/EduManage",
    tags: ["React", "TypeScript", "Rust", "Tauri", "MongoDB"],
  },
  {
    title: "Fidelity",
    description:
      "API de gestion d'un programme de fidélité client : authentification par jeton et back-office pour administrer clients et services.",
    url: "https://github.com/WilliamsLenkeu/backend-fidelity",
    tags: ["Laravel", "Sanctum", "TypeScript"],
  },
  {
    title: "Kamer Forge",
    description:
      "Landing page à accès restreint par phrase secrète, avec back-office d'administration et notifications par email.",
    url: "https://github.com/WilliamsLenkeu/Kamer_forge_",
    tags: ["Astro", "MongoDB", "Resend"],
  },
  {
    title: "Store Dépôts",
    description:
      "Application de suivi de dépôts et de contributeurs, avec export des données en CSV, Excel et PDF.",
    url: "https://github.com/WilliamsLenkeu/store_",
    tags: ["Next.js", "MongoDB", "PostgreSQL"],
  },
];

const Projects = () => {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || prefersReducedMotion()) return;

    const rows = list.querySelectorAll("[data-project]");
    const tweens = [];

    rows.forEach((row) => {
      const curtain = row.querySelector("[data-curtain]");

      const enter = gsap.from(row, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
      });
      tweens.push(enter);

      if (!curtain) return;

      const onEnter = () => gsap.to(curtain, { scaleY: 1, duration: 0.35, ease: "power3.out" });
      const onLeave = () => gsap.to(curtain, { scaleY: 0, duration: 0.3, ease: "power3.inOut" });

      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);
      row.addEventListener("focusin", onEnter);
      row.addEventListener("focusout", onLeave);

      tweens.push({
        kill: () => {
          row.removeEventListener("mouseenter", onEnter);
          row.removeEventListener("mouseleave", onLeave);
          row.removeEventListener("focusin", onEnter);
          row.removeEventListener("focusout", onLeave);
        },
      });
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill?.();
      });
    };
  }, []);

  return (
    <section id="projects" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <SectionTitle subtitle="Missions client et projets personnels, du prototype à l'application en production. Chaque titre mène au code source ou au produit en ligne.">
          Projets
        </SectionTitle>

        <div ref={listRef}>
          {projects.map((project) => (
            <a
              key={project.title}
              data-project
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border-t border-ink/10 last:border-b"
            >
              <span
                data-curtain
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-cobalt"
              />
              <div className="relative grid grid-cols-1 gap-4 px-2 py-10 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
                <div>
                  <h3 className="flex items-baseline gap-3 text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-white">
                    {project.title}
                    <Arrow dir="out" className="text-xl text-cobalt transition-colors duration-300 group-hover:text-white" />
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-frost">
                    {project.description}
                  </p>
                </div>
                <p className="font-mono text-xs leading-6 text-muted transition-colors duration-300 group-hover:text-frost sm:max-w-[180px] sm:pt-2 sm:text-right">
                  {project.tags.join(" · ")}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
