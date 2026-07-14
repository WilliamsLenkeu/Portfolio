import React from "react";
import CountUp from "../../components/ui/CountUp";
import { useReveal } from "../../lib/useReveal";
import { useSplitText } from "../../lib/useSplitText";

const facts = [
  { value: 5, label: "Années d'expérience" },
  { value: 6, label: "Projets livrés" },
  { value: 12, label: "Technologies maîtrisées" },
];

const About = () => {
  const statementRef = useSplitText({ stagger: 0.035, duration: 0.7 });
  const proseRef = useReveal({ stagger: 0.1 });
  const factsRef = useReveal({ stagger: 0.08 });

  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_280px] lg:gap-24">
          <div>
            <p
              ref={statementRef}
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-ink"
            >
              Ingénieur des Travaux Informatiques, je conçois des produits
              <span className="text-cobalt"> de bout en bout</span> — interface,
              logique métier, infrastructure.
            </p>

            <div ref={proseRef} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
              <p className="text-base leading-relaxed text-muted">
                Je travaille aussi bien avec <strong className="font-semibold text-ink">React et Flutter</strong> côté
                client qu'avec <strong className="font-semibold text-ink">Node.js, Django ou Spring Boot</strong> côté
                serveur, et je m'appuie sur MySQL, PostgreSQL, Firebase ou MongoDB selon le contexte du projet.
              </p>
              <p className="text-base leading-relaxed text-muted">
                <strong className="font-semibold text-ink">Curieux et rigoureux</strong>, j'aime comprendre un problème
                avant de le coder, et je reste disponible pour des missions freelance ou des collaborations
                ponctuelles.
              </p>
            </div>
          </div>

          <aside
            ref={factsRef}
            className="border-t-2 border-ink lg:border-t-0 lg:border-l lg:border-ink/10 lg:pl-10"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-ink/10 py-7 first:pt-6 last:border-none lg:first:pt-0">
                <div className="font-mono text-4xl font-medium text-ink sm:text-5xl">
                  <CountUp value={fact.value} />
                  <span className="text-cobalt">+</span>
                </div>
                <div className="mt-2 text-xs text-muted">{fact.label}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
