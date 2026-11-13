import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";

const groups = [
  { category: "Langages", items: ["JavaScript", "PHP", "Python", "Dart"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Django", "Spring Boot", "Laravel"] },
  { category: "Frontend", items: ["React", "Flutter", "Bootstrap", "Tailwind"] },
  { category: "Bases de données", items: ["MySQL", "Firebase", "MongoDB"] },
];

const Stack = () => {
  return (
    <section id="stack" className="border-b border-ink/10 bg-paper">
      <div className="border-b border-ink/10 px-gutter py-8">
        <SectionTitle side subtitle="Stack en production.">
          Stack
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <div
            key={group.category}
            className={`border-b border-ink/10 px-gutter py-7 last:border-b-0 sm:border-b lg:border-b-0 lg:py-9 ${
              i % 2 === 0 ? "sm:border-r" : ""
            } ${i < 3 ? "lg:border-r" : ""}`}
          >
            <p className="text-xs text-muted">{group.category}</p>
            <ul className="mt-3 space-y-1">
              {group.items.map((name) => (
                <li key={name} className="text-xl font-semibold tracking-tight text-ink lg:text-2xl">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
