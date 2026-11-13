import React from "react";
import { useReveal } from "../../lib/useReveal";
import { useSplitText } from "../../lib/useSplitText";

const About = () => {
  const statementRef = useSplitText({ stagger: 0.03, duration: 0.65 });
  const bodyRef = useReveal({ stagger: 0.08 });

  return (
    <section id="about" className="border-b border-ink/10 bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.7fr)]">
        <div className="border-b border-ink/10 px-gutter py-12 lg:border-b-0 lg:border-r lg:py-14">
          <p
            ref={statementRef}
            className="text-[clamp(1.85rem,4.2vw,3.1rem)] font-bold leading-[1.08] tracking-tight text-ink"
          >
            Architectures backend et DevOps. Performance, data, infra.
          </p>
        </div>

        <div
          ref={bodyRef}
          className="flex flex-col justify-between gap-8 px-gutter py-10 lg:py-14"
        >
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-muted">
            Node, Nest, Django, Laravel, Spring. MySQL, Firebase, MongoDB.
            Python pour la data. React et Flutter quand le produit l&apos;exige.
          </p>
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-muted">
            FR / EN. 5+ ans, 8 missions. Disponible en freelance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
