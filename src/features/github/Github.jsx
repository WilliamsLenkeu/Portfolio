import React, { useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { useReveal } from "../../lib/useReveal";
import { useGithubStats, USERNAME_GITHUB } from "../../lib/useGithubStats";

const segmentOpacities = ["opacity-100", "opacity-75", "opacity-55", "opacity-40", "opacity-25"];

const Github = () => {
  const { data, loading } = useGithubStats();
  const [chartError, setChartError] = useState(false);
  const languages = data?.languages ?? [];

  const statsRef = useReveal({ stagger: 0.1 });
  const chartRef = useReveal({ y: 0 });
  const barRef = useRef(null);

  // La barre de langages pousse depuis la gauche
  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar || languages.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(bar, { scaleX: 1 });
      return;
    }

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
    const tween = gsap.to(bar, {
      scaleX: 1,
      duration: 0.9,
      ease: "power3.inOut",
      scrollTrigger: { trigger: bar, start: "top 90%", toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
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
          <span className="inline-flex items-center gap-2 pt-3 font-mono text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
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
          <div className="mt-14">
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
                <li key={lang.name} className="flex items-center gap-2 text-sm text-muted">
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
          Voir le profil complet ↗
        </a>
      </div>
    </section>
  );
};

export default Github;
