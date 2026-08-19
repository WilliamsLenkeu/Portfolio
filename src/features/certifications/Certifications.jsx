import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const certifications = [
  {
    issuer: "Coursera, IBM",
    title: "Python for Data Science, AI & Development",
    period: "Fév. 2026 - Août 2026",
  },
  {
    issuer: "Udemy",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    period: "Mai 2026 - Août 2026",
  },
  {
    issuer: "ACMT",
    title: "Gestion de projet",
    period: "Juil. 2024",
    note: "Académie Canadienne de Management et de Technologie",
  },
];

const Certifications = () => {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const cells = grid.querySelectorAll("[data-cert]");
    const tween = gsap.from(cells, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: grid,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const featured = certifications[0];
  const rest = certifications.slice(1);

  return (
    <section id="certifications" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <SectionTitle subtitle="Python pour la data et l'IA, bootcamp de code, puis un socle en gestion de projet.">
          Certifications
        </SectionTitle>

        <div ref={gridRef} className="grid grid-cols-1 border border-ink/10 lg:grid-cols-2">
          <article
            data-cert
            className="on-cobalt flex flex-col justify-between bg-cobalt px-7 py-10 text-white lg:row-span-2 lg:px-10 lg:py-12"
          >
            <p className="font-mono text-xs text-frost">{featured.issuer}</p>
            <div className="mt-16 lg:mt-24">
              <h3 className="text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[1.15] tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-4 font-mono text-xs tabular-nums text-frost">{featured.period}</p>
            </div>
          </article>

          {rest.map((cert, index) => (
            <article
              key={cert.title}
              data-cert
              className={`flex flex-col justify-between border-t border-ink/10 px-7 py-8 lg:border-l lg:px-8 lg:py-10 ${
                index === 0 ? "lg:border-t-0" : ""
              }`}
            >
              <p className="font-mono text-xs text-muted">{cert.issuer}</p>
              <div className="mt-8">
                <h3 className="text-balance text-xl font-bold leading-snug tracking-tight text-ink">
                  {cert.title}
                </h3>
                {cert.note && <p className="mt-2 text-sm leading-relaxed text-muted">{cert.note}</p>}
                <p className="mt-4 font-mono text-xs tabular-nums text-cobalt">{cert.period}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
