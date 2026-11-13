import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";

const experiences = [
  {
    period: "2025-26",
    detail: "Nov.–Juin",
    title: "Ingénieur Système et DevOps",
    company: "Farmease, Yaoundé",
    description:
      "Cycle de vie de l'infra backend : développement, déploiement, tests, config serveur, maintenance.",
  },
  {
    period: "2025-26",
    detail: "Nov.–Mai",
    title: "Développeur IT",
    company: "Brain-Booster, Yaoundé",
    description: "Développement logiciel et support informatique.",
  },
  {
    period: "2024-25",
    detail: "Déc.–Juin",
    title: "Développeur Fullstack",
    company: "Smart Service Hub, Yaoundé",
    description: "App mobile Flutter d'orientation académique, backend NestJS.",
  },
  {
    period: "2024",
    detail: "Avr.–Août",
    title: "Assistant service courriel",
    company: "Ministère de l'enseignement supérieur",
    description: "Communications et support administratif.",
  },
  {
    period: "2023",
    detail: "Juin–Sept.",
    title: "Développeur back-end Django",
    company: "IccSoft, Yaoundé",
    description: "App web Django, optimisation du recrutement.",
  },
  {
    period: "2023",
    detail: "Avr.–Juin",
    title: "Développeur Frontend Mobile",
    company: "SKLF Group, Yaoundé",
    description: "App mobile de communication, Flutter.",
  },
  {
    period: "2022",
    detail: "Juil.–Sept.",
    title: "Développeur Web",
    company: "SKLF Group, Yaoundé",
    description: "Site web responsive.",
  },
  {
    period: "2021",
    detail: "Juin–Août",
    title: "Développeur Web",
    company: "SKLF Group, Yaoundé",
    description: "Gestion des inscriptions aux formations.",
  },
];

const education = [
  {
    period: "2022-25",
    detail: "Sept.–Juil.",
    title: "Licence Pro. Informatique, ICT4D",
    company: "Université de Yaoundé I",
    description: "Ingénieur des Travaux Informatiques, juil. 2025, mention Assez bien.",
  },
  {
    period: "2021-22",
    detail: "Sept.–Juin",
    title: "Baccalauréat Série TI",
    company: "Collège La Retraite",
    description: "Algorithmique, programmation avancée.",
  },
  {
    period: "2020-21",
    detail: "Sept.–Juin",
    title: "Probatoire Série TI",
    company: "Collège Privé Laïc Pythagore",
    description: "",
  },
];

const Row = ({ item }) => (
  <div className="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-ink/10 py-4 last:border-b-0 sm:grid-cols-[5.5rem_13rem_1fr] sm:gap-6 sm:py-5">
    <div>
      <p className="text-sm font-medium tabular-nums text-ink">{item.period}</p>
      {item.detail && <p className="text-[11px] text-muted">{item.detail}</p>}
    </div>
    <div>
      <h4 className="text-[15px] font-semibold leading-snug text-ink">{item.title}</h4>
      <p className="mt-0.5 text-sm text-muted">{item.company}</p>
    </div>
    {item.description ? (
      <p className="col-span-2 max-w-[52ch] text-sm leading-relaxed text-muted sm:col-span-1">
        {item.description}
      </p>
    ) : (
      <span className="col-span-2 sm:col-span-1" />
    )}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="border-b border-ink/10 bg-paper">
      <div className="px-gutter py-10 lg:py-12">
        <SectionTitle>Parcours</SectionTitle>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="border-t border-ink/10 px-gutter pb-10 lg:border-r">
          <div className="flex items-baseline justify-between border-b border-ink py-3">
            <h3 className="text-sm font-semibold text-ink">Expérience</h3>
            <span className="text-xs tabular-nums text-muted">{experiences.length}</span>
          </div>
          {experiences.map((item) => (
            <Row key={`${item.title}-${item.company}-${item.period}`} item={item} />
          ))}
        </div>

        <div className="border-t border-ink/10 bg-ink/[0.02] px-gutter pb-10 dark:bg-white/[0.03]">
          <div className="flex items-baseline justify-between border-b border-ink py-3">
            <h3 className="text-sm font-semibold text-ink">Formation</h3>
            <span className="text-xs tabular-nums text-muted">{education.length}</span>
          </div>
          {education.map((item) => (
            <Row key={`${item.title}-${item.company}-${item.period}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
