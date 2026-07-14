import { useEffect, useState } from "react";

const USERNAME = "WilliamsLenkeu";

let cachedPromise = null;

const fetchStats = async () => {
  const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
  const user = await userRes.json();

  const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`);
  const repos = await reposRes.json();

  const stars = Array.isArray(repos)
    ? repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
    : 0;

  const counts = {};
  if (Array.isArray(repos)) {
    repos.forEach((repo) => {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    });
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const languages = Object.entries(counts)
    .map(([name, count]) => ({ name, percentage: Math.round((count / total) * 100) }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);

  return {
    repos: user.public_repos || 0,
    stars,
    followers: user.followers || 0,
    languages,
  };
};

export const USERNAME_GITHUB = USERNAME;

export const useGithubStats = () => {
  const [state, setState] = useState({ data: null, loading: true, error: false });

  useEffect(() => {
    if (!cachedPromise) {
      cachedPromise = fetchStats().catch((err) => {
        cachedPromise = null;
        throw err;
      });
    }

    let active = true;
    cachedPromise
      .then((data) => {
        if (active) setState({ data, loading: false, error: false });
      })
      .catch(() => {
        if (active) setState({ data: null, loading: false, error: true });
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
};
