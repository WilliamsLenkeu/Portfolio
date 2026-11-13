# AGENTS

## Projet
Portfolio React (CRA `react-scripts@5.0.0`, React 17, Tailwind 3). Package manager : **pnpm**.

## Contraintes
- Node actuel : v24. CRA n’est plus maintenu ; ne pas ejecter.
- Patches persistants dans `/patches` (voir `pnpm-workspace.yaml`) : `react-scripts@5.0.0`, `react-dev-utils@12.0.1`.
- Overrides : `caniuse-lite`, `baseline-browser-mapping`.

## MCP
- context7 : docs libs
- github : issues / PR
- playwright : verif UI

## Design
- Impeccable v4.9 (`.cursor/skills/impeccable`) + hook `.cursor/hooks.json`
- Config partagée : `.impeccable/config.json` ; locale gitignorée : `.impeccable/config.local.json`
- Mode visiteur : Experience (portfolio). Light par défaut.
- Direction produit : `PRODUCT.md`

## Commandes
- `pnpm start` — dev (`http://localhost:3000`)
- `pnpm build` — prod
- `npx impeccable update` — maj skill / engine
- `npx impeccable hooks status` — état du design hook
