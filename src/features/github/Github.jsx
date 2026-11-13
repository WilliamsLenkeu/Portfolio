import React, { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import CountUp from "../../components/ui/CountUp";
import Arrow from "../../components/ui/Arrow";
import { useGithubStats, USERNAME_GITHUB } from "../../lib/useGithubStats";

const opacities = ["opacity-100", "opacity-70", "opacity-50", "opacity-35", "opacity-25"];

const Github = () => {
  const { data, loading } = useGithubStats();
  const [chartError, setChartError] = useState(false);
  const languages = data?.languages ?? [];

  const stats = [
    { label: "Dépôts", value: loading || !data ? "…" : data.repos },
    { label: "Étoiles", value: loading || !data ? "…" : data.stars },
    { label: "Abonnés", value: loading || !data ? "…" : data.followers },
  ];

  return (
    <section id="github" className="border-b border-ink/10 bg-paper">
      <div className="grid grid-cols-1 gap-10 px-gutter py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-14">
        <div>
          <SectionTitle subtitle="Stats publiques GitHub.">GitHub</SectionTitle>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <CountUp
                  value={stat.value}
                  className="text-3xl font-semibold tabular-nums text-ink"
                />
                <p className="mt-0.5 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href={`https://github.com/${USERNAME_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm text-ink underline underline-offset-4 hover:opacity-60"
          >
            Profil complet <Arrow dir="out" className="ml-1" />
          </a>
        </div>

        <div className="min-w-0">
          {!loading && languages.length > 0 && (
            <div className="mb-8">
              <div
                className="flex h-1.5 w-full overflow-hidden"
                role="img"
                aria-label="Répartition des langages"
              >
                {languages.map((lang, index) => (
                  <span
                    key={lang.name}
                    style={{ width: `${lang.percentage}%` }}
                    className={`bg-ink ${opacities[index] ?? "opacity-25"}`}
                  />
                ))}
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {languages.map((lang, index) => (
                  <li key={lang.name} className="flex items-center gap-1.5 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 bg-ink ${opacities[index] ?? "opacity-25"}`}
                    />
                    {lang.name}
                    <span className="tabular-nums text-ink">{lang.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!chartError && (
            <div className="overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/111111/${USERNAME_GITHUB}`}
                alt={`Contributions GitHub de ${USERNAME_GITHUB}`}
                className="min-w-[560px] w-full"
                loading="lazy"
                onError={() => setChartError(true)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Github;
