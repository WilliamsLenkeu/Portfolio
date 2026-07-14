import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const groups = [
  { category: "Langages", items: ["JavaScript", "PHP", "Dart", "Java"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Django", "Spring Boot", "Laravel"] },
  { category: "Frontend", items: ["React", "Angular", "Flutter", "Bootstrap", "Tailwind CSS"] },
  { category: "Bases de données", items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
];

const Stack = () => {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || prefersReducedMotion()) return;

    const rows = list.querySelectorAll("[data-stack-row]");
    const tweens = [];

    rows.forEach((row) => {
      const tween = gsap.from(row, {
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
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  return (
    <section id="stack" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <SectionTitle subtitle="Les langages, frameworks et outils que j'utilise au quotidien.">
          Stack technique
        </SectionTitle>

        <div ref={listRef} className="border-b border-ink/10">
          {groups.map((group) => (
            <div
              key={group.category}
              data-stack-row
              className="grid grid-cols-1 gap-3 border-t border-ink/10 py-9 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <span className="pt-2 font-mono text-xs text-muted">{group.category}</span>
              <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                {group.items.map((name, i) => (
                  <React.Fragment key={name}>
                    <span className="cursor-default text-2xl font-bold tracking-tight text-ink transition-colors duration-200 hover:text-cobalt sm:text-3xl">
                      {name}
                    </span>
                    {i < group.items.length - 1 && (
                      <span aria-hidden="true" className="text-2xl font-bold text-cobalt sm:text-3xl">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
