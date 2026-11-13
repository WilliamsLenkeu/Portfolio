import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";

const certifications = [
  {
    issuer: "Coursera · IBM",
    title: "Python for Data Science, AI & Development",
    period: "Fév.–Août 2026",
  },
  {
    issuer: "Udemy",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    period: "Mai–Août 2026",
  },
  {
    issuer: "ACMT",
    title: "Gestion de projet",
    period: "Juil. 2024",
    note: "Académie Canadienne de Management et de Technologie",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="border-b border-ink/10 bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr]">
        <div className="border-b border-ink/10 px-gutter py-10 lg:border-b-0 lg:border-r lg:py-14">
          <SectionTitle>Certifs</SectionTitle>
        </div>

        <ul className="px-gutter">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="grid grid-cols-1 gap-1 border-b border-ink/10 py-7 last:border-b-0 sm:grid-cols-[10rem_1fr_8rem] sm:items-baseline sm:gap-8"
            >
              <p className="text-sm text-muted">{cert.issuer}</p>
              <div>
                <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{cert.title}</h3>
                {cert.note && <p className="mt-1 text-sm text-muted">{cert.note}</p>}
              </div>
              <p className="text-sm tabular-nums text-muted sm:text-right">{cert.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
