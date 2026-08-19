# Décisions

## 2026-08-19 — Repositionnement Backend / DevOps / Data

**Contexte :** le CV a changé de titre : « Développeur Backend & DevOps | Data Analysis ». Le pitch n’est plus fullstack.

**Choix :** hero, about, meta et blurb FarmEase recentrés sur architectures backend, perf, infra et data. React / Flutter restent dans la stack, en secondaire.

## 2026-08-19 — Contenu aligné sur le CV

**Contexte :** le CV PDF a été mis à jour (titre Fullstack & DevOps, Python, certifications, dates d'expérience corrigées). L'ancien `curriculum_vitae.pdf` n'est plus dans `/src/Assets`.

**Choix :**
- Source de vérité : `curriculum_vitae_lenkeu_djache_prince_williams.pdf`.
- Contact : email et téléphone du CV.
- Stack : Python ajouté, Angular retiré (absent du CV). PostgreSQL reste uniquement dans les tags du projet Store Dépôts.
- Parcours : Farmease en Ingénieur Système et DevOps ; doublon Ministère 2023 retiré ; SKLF Flutter / IccSoft / SKLF Web réordonnés selon les dates du CV.
- Certifications en section dédiée (grille 1+2), pas un troisième ledger du parcours.

**Rejeté :** refonte visuelle. Langage cobalt / listes existantes conservés.

## 2026-08-17 — Warnings CRA 5 / Node 24

**Contexte :** `react-scripts start` émettait des warnings (browserslist périmé, `fs.F_OK`, hooks webpack-dev-server dépréciés). CRA 5 est abandonné ; Node 24 n’est pas dans sa matrice de support.

**Choix :**
- Forcer `caniuse-lite@1.0.30001809` et `baseline-browser-mapping@2.11.15` (overrides pnpm).
- Patcher `react-dev-utils@12.0.1` : `fs.constants.F_OK`.
- Patcher `react-scripts@5.0.0` : `setupMiddlewares` à la place de `onBeforeSetupMiddleware` / `onAfterSetupMiddleware`.

**Rejeté :** `NODE_OPTIONS=--no-deprecation` (masque aussi les vraies dépréciations). Migration Vite hors périmètre.
