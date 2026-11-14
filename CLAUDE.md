# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run lint` — ESLint across the repo (flat config, type-checked rules)
- `npx tsc --noEmit` — type-check only, no build
- `npm run deploy` — `predeploy` runs the build, then `gh-pages` publishes `dist/` to the `gh-pages` branch. Live site: https://snowdropshop.ru/ (custom domain via `public/CNAME`)

No test runner is configured.

## Architecture

The site is currently a **single maintenance stub page** ("Ведутся технические работы"). The former storefront (router, contexts, i18n, catalog data) was removed.

- [src/App.tsx](src/App.tsx) renders only [MaintenancePage](src/pages/MaintenancePage.tsx).
- The page is the poster image [src/assets/maintenance.jpg](src/assets/maintenance.jpg) (720×1280) scaled to the viewport height, with a blurred copy behind it on wide screens. Two transparent `<a>` overlays, positioned in % in [MaintenancePage.css](src/pages/MaintenancePage.css), sit over the Telegram (https://t.me/SNOWDROPSHOP_1) and VK (https://vk.ru/snowdropshop_1) buttons drawn in the image. If the image changes, re-measure those percentages.
- Visually hidden `<h1>`/`<p>` duplicate the poster text for screen readers/SEO.

### Build / deploy specifics

- `vite.config.ts` sets `base: '/'` because the site is served from the root of the custom domain snowdropshop.ru. Import assets through Vite (as the poster is) so the base is respected.
- The React Compiler is enabled via `@rolldown/plugin-babel` + `babel-plugin-react-compiler` (target '18'), and ESLint enforces `react-compiler/react-compiler: error`.

### Formatting

Prettier owns formatting (`.prettierrc.json`); `eslint-config-prettier` sits last in the ESLint `extends` chain so stylistic rules never fight it. Run `npm run format` to write, `npm run check` for typecheck + lint + format check in one go.

## Agent skills

Skills live in [.claude/skills/](.claude/skills/) — a curated subset of [mattpocock/skills](https://github.com/mattpocock/skills), copied in so they travel with the repo. The flow is `/grill-me` or `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement`, with `/prototype`, `/tdd`, `/diagnosing-bugs`, `/research` and `/handoff` as supporting skills.

Matt's `code-review` skill is deliberately **not** installed — use Claude Code's built-in `/code-review`.

### Issue tracker

Local markdown under `.scratch/<feature-slug>/`. See [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md).

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root, both created lazily by `/domain-modeling`. See [docs/agents/domain.md](docs/agents/domain.md).
