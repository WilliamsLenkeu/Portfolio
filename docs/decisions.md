# Décisions

## 2026-11-13 - SEO indexable

**Contexte :** meta partielles, pas de canonical absolu, pas de sitemap, OG en favicon relative. Peu indexable.

**Choix :**
- `index.html` : title/description, robots index/follow, canonical, hreflang, OG/Twitter absolus, JSON-LD (WebSite + Person + ProfilePage).
- `robots.txt` + `sitemap.xml` pointant sur `https://portfolio-williams-lenkeu.vercel.app/`.
- `og-image.webp`, manifest à jour, headers Vercel (Referrer-Policy, nosniff).
- Description GitHub du dépôt alignée.

**À améliorer plus tard :** carte OG 1200×630 dédiée (l'avatar carré reste un interim).

## 2026-11-13 - Noir/blanc, portrait bust, projets égaux

**Contexte :** le cobalt et la mise en avant d'un projet lisaient encore "template IA". Portrait trop croppé.

**Choix :**
- Palette monochrome (ink/paper). Plus de bleu.
- Hero : fond paper, portrait rectangle ~36% avec `object-top` (buste visible).
- Projets : liste égale, FarmEase en dernier.
- Copy : tirets cadratins retirés, formulations plus plates.
- Light par défaut. Gutters serrés. Impeccable 4.9 + hook Cursor.

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
