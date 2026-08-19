import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const experiences = [
  {
    period: "2025-26",
    detail: "Nov. - Juin",
    title: "Ingénieur Système et DevOps",
    company: "Farmease, Yaoundé",
    description:
      "Cycle de vie complet de l'infra backend : développement, déploiement, tests, configuration serveur et maintenance.",
  },
  {
    period: "2025-26",
    detail: "Nov. - Mai",
    title: "Développeur IT",
    company: "Brain-Booster, Yaoundé",
    description: "Développement logiciel et support informatique.",
  },
  {
    period: "2024-25",
    detail: "Déc. - Juin",
    title: "Développeur Fullstack",
    company: "Smart Service Hub, Yaoundé",
    description:
      "Application mobile Flutter d'aide à l'orientation académique, frontend Flutter et backend NestJS.",
  },
  {
    period: "2024",
    detail: "Avr. - Août",
    title: "Assistant service courriel",
    company: "Ministère de l'enseignement supérieur",
    description: "Gestion des communications et support administratif.",
  },
  {
    period: "2023",
    detail: "Juin - Sept.",
    title: "Développeur back-end Django",
    company: "IccSoft, Yaoundé",
    description: "Application web Django, optimisation du processus de recrutement.",
  },
  {
    period: "2023",
    detail: "Avr. - Juin",
    title: "Développeur Frontend Mobile",
    company: "SKLF Group, Yaoundé",
    description: "Application mobile de communication, développée en Flutter.",
  },
  {
    period: "2022",
    detail: "Juil. - Sept.",
    title: "Développeur Web",
    company: "SKLF Group, Yaoundé",
    description: "Site web responsive.",
  },
  {
    period: "2021",
    detail: "Juin - Août",
    title: "Développeur Web",
    company: "SKLF Group, Yaoundé",
    description: "Application web de gestion des inscriptions aux formations.",
  },
];

const education = [
  {
    period: "2022-25",
    detail: "Sept. - Juil.",
    title: "Licence Pro. Informatique, ICT4D",
    company: "Université de Yaoundé I",
    description: "Ingénieur des Travaux Informatiques, obtenue en juillet 2025, mention Assez bien.",
  },
  {
    period: "2021-22",
    detail: "Sept. - Juin",
    title: "Baccalauréat Série TI",
    company: "Collège La Retraite",
    description: "Algorithmique, programmation avancée, projets web scolaires.",
  },
  {
    period: "2020-21",
    detail: "Sept. - Juin",
    title: "Probatoire Série TI",
    company: "Collège Privé Laïc Pythagore",
    description: "",
  },
];

const Ledger = ({ label, rows }) => {
  const wrapRef = useRef(null);
  const ruleRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || prefersReducedMotion()) return;

    const header = wrap.querySelector("[data-ledger-head]");
    const items = wrap.querySelectorAll("[data-ledger-row]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    if (ruleRef.current) {
      gsap.set(ruleRef.current, { scaleX: 0, transformOrigin: "left center" });
      tl.to(ruleRef.current, { scaleX: 1, duration: 0.55, ease: "power2.out" });
    }

    if (header) {
      tl.from(header, { autoAlpha: 0, duration: 0.4, ease: "power2.out" }, "-=0.3");
    }

    tl.from(items, { autoAlpha: 0, duration: 0.4, ease: "power2.out", stagger: 0.05 }, "-=0.2");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <div className="relative flex items-baseline justify-between border-b-2 border-transparent pb-3">
        <span
          ref={ruleRef}
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-ink"
        />
        <div data-ledger-head className="flex w-full items-baseline justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">{label}</h3>
          <span className="font-mono text-xs text-muted">{rows.length} entrées</span>
        </div>
      </div>
      <div>
        {rows.map((item) => (
          <div
            key={`${item.title}-${item.company}-${item.period}-${item.detail}`}
            data-ledger-row
            className="grid grid-cols-[72px_1fr] gap-4 border-b border-ink/10 py-6 transition-colors duration-200 hover:bg-cobalt/[0.04] sm:grid-cols-[110px_260px_1fr] sm:gap-8"
          >
            <div>
              <div className="font-mono text-sm font-medium text-cobalt">{item.period}</div>
              {item.detail && <div className="mt-0.5 font-mono text-[11px] text-muted">{item.detail}</div>}
            </div>
            <div>
              <h4 className="text-base font-semibold leading-snug text-ink">{item.title}</h4>
              <p className="mt-0.5 text-sm text-muted">{item.company}</p>
            </div>
            <p className="col-span-2 max-w-[58ch] text-sm leading-relaxed text-muted sm:col-span-1 sm:pt-0.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <SectionTitle>Parcours</SectionTitle>

        <div className="space-y-16">
          <Ledger label="Expérience" rows={experiences} />
          <Ledger label="Formation" rows={education} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
