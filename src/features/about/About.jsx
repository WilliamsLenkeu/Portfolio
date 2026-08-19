import React from "react";
import CountUp from "../../components/ui/CountUp";
import { useReveal } from "../../lib/useReveal";
import { useSplitText } from "../../lib/useSplitText";

const facts = [
  { value: 5, label: "Années d'expérience" },
  { value: 8, label: "Missions professionnelles" },
  { value: 16, label: "Technologies maîtrisées" },
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
              Ingénieur des Travaux Informatiques, je conçois des architectures
              <span className="text-cobalt"> backend et DevOps</span>, de la
              performance au traitement de données.
            </p>

            <div ref={proseRef} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
              <p className="text-base leading-relaxed text-muted">
                Côté serveur : <strong className="font-semibold text-ink">Node.js, NestJS, Django, Laravel ou Spring Boot</strong>,
                avec MySQL, Firebase ou MongoDB. Python pour la data, l'IA et l'automatisation.
                React et Flutter quand le produit l'exige.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Français et anglais. <strong className="font-semibold text-ink">Curieux et rigoureux</strong>,
                j'aime comprendre un problème avant de le coder. Disponible pour du freelance
                ou des collaborations ponctuelles.
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
