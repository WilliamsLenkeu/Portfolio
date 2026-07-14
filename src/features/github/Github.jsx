import React, { useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";
import Arrow from "../../components/ui/Arrow";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { useReveal } from "../../lib/useReveal";
import { useGithubStats, USERNAME_GITHUB } from "../../lib/useGithubStats";

const segmentOpacities = ["opacity-100", "opacity-75", "opacity-55", "opacity-40", "opacity-25"];

const Github = () => {
  const { data, loading } = useGithubStats();
  const [chartError, setChartError] = useState(false);
  const languages = data?.languages ?? [];

  const statsRef = useReveal({ stagger: 0.08 });
  const chartRef = useReveal();
  const langBlockRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const block = langBlockRef.current;
    const bar = barRef.current;
    if (!block || !bar || languages.length === 0 || prefersReducedMotion()) return;

    const legend = block.querySelectorAll("[data-lang]");

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(bar, { scaleX: 1, duration: 0.7, ease: "power2.out" });
    tl.from(legend, { autoAlpha: 0, duration: 0.35, ease: "power2.out", stagger: 0.05 }, "-=0.25");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [languages.length]);

  const stats = [
    { label: "Dépôts publics", value: loading || !data ? "—" : data.repos },
    { label: "Étoiles", value: loading || !data ? "—" : data.stars },
    { label: "Abonnés", value: loading || !data ? "—" : data.followers },
  ];

  return (
    <section id="github" className="bg-paper">
      <div className="mx-auto max-w-page px-6 py-28">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionTitle
            className="mb-0"
            subtitle="Activité et contributions publiques, mesurées en direct via l'API GitHub."
          >
            Activité GitHub
          </SectionTitle>
        </div>

        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-1 divide-y divide-ink/10 border-y border-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <CountUp value={stat.value} className="font-mono text-4xl font-medium text-ink sm:text-5xl" />
              <div className="mt-2 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {!loading && languages.length > 0 && (
          <div ref={langBlockRef} className="mt-14">
            <h3 className="text-sm font-semibold text-ink">Répartition des langages sur les dépôts</h3>
            <div
              ref={barRef}
              className="mt-4 flex h-2 w-full overflow-hidden"
              role="img"
              aria-label="Répartition des langages"
            >
              {languages.map((lang, index) => (
                <span
                  key={lang.name}
                  style={{ width: `${lang.percentage}%` }}
                  className={`bg-cobalt ${segmentOpacities[index] ?? "opacity-25"}`}
                />
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {languages.map((lang, index) => (
                <li key={lang.name} data-lang className="flex items-center gap-2 text-sm text-muted">
                  <span aria-hidden="true" className={`h-2 w-2 bg-cobalt ${segmentOpacities[index] ?? "opacity-25"}`} />
                  {lang.name}
                  <span className="font-mono text-xs text-ink">{lang.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!chartError && (
          <div ref={chartRef} className="mt-14 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/1533d9/${USERNAME_GITHUB}`}
              alt={`Graphique de contributions GitHub de ${USERNAME_GITHUB}`}
              className="min-w-[640px] w-full"
              loading="lazy"
              onError={() => setChartError(true)}
            />
          </div>
        )}

        <a
          href={`https://github.com/${USERNAME_GITHUB}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-cobalt"
        >
          Voir le profil complet <Arrow dir="out" className="ml-1" />
        </a>
      </div>
    </section>
  );
};

export default Github;
