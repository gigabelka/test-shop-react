# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. All answers must be in Russian.

## Architecture

Single-page marketing site for "SnowdropShop", a fictional CBD store. The entry chain is [main.tsx](src/main.tsx) → [App.tsx](src/App.tsx) → [AppRouter](src/router/AppRouter.tsx), a `HashRouter` where both `/` and `*` render [HomePage](src/pages/HomePage.tsx). HomePage composes [TopBar](src/components/layout/TopBar.tsx) plus the sections in [src/components/home/](src/components/home/) (Hero, FeaturesStrip, Products, Why, Newsletter, BottomFeatures as footer).

Two patterns carry the whole page:

- **Data layer.** [src/data/home.ts](src/data/home.ts) is a single typed module — interfaces (`Feature`, `Product`, `Reason`) and const arrays (`NAV_LINKS`, `PRODUCTS`, `REASONS`, …) with all Russian copy. Components import from it directly; there is no state management beyond local `useState` (mobile menu, newsletter form). All links are hash anchors (`#/catalog`, …).
- **Icons.** [Icon.tsx](src/components/ui/Icon.tsx) renders inline SVG keyed off a closed `IconName` string union (15 names).

Styles: [theme.css](src/styles/theme.css) (design tokens) and [global.css](src/styles/global.css) (reset + utilities), both `@import`ed from [index.css](src/index.css); each component has a colocated `.css` with BEM classes off the component root.

Baseline is green — `npm run check` passes on the current tree. (History note: an earlier homepage implementation was deleted in commits `68e5b14`/`4be25d8` and rebuilt since; the old multi-page version remains recoverable from `4dbd032`.)

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — `tsc -b`, then production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run typecheck` / `npm run lint` / `npm run format:check`
- `npm run check` — all three of the above; run before declaring work done
- `npm run format` / `npm run lint:fix` — write-mode fixers
- `npm run deploy` — `predeploy` builds, then `gh-pages` publishes `dist/`. Live site: https://gigabelka.github.io/test-shop-react/

No test runner is configured, so there is no single-test command.

## Toolchain constraints

These are the things that will bite you; they are spread across four config files.

**React Compiler is on and enforced.** [vite.config.ts](vite.config.ts) runs `@rolldown/plugin-babel` with `reactCompilerPreset({ target: '18' })` — React is 18, so the compiler is paired with the `react-compiler-runtime` shim rather than React 19's built-in support. [eslint.config.js](eslint.config.js) sets `react-compiler/react-compiler: 'error'`. Write components that obey the Rules of React; the compiler memoizes for you, so skip manual `useMemo`/`useCallback` unless you have a specific reason.

**GitHub Pages shapes the routing and asset story.** `base: '/test-shop-react/'` in the Vite config means any absolute asset path must account for that prefix — [index.html](index.html) uses a relative `./favicon.svg` for exactly this reason. Pages serves no server-side rewrites, so a router here must be `HashRouter`, not `BrowserRouter`, and in-page nav belongs in plain `<a href="#/...">` anchors.

**TypeScript is configured in ways that reject ordinary-looking code.** [tsconfig.app.json](tsconfig.app.json): `verbatimModuleSyntax` (type-only imports must say `import type`), `erasableSyntaxOnly` (no `enum`, no constructor parameter properties), plus `noUnusedLocals` / `noUnusedParameters`. Note it does **not** set `strict` — that is a deliberate gap in the current config, not something to rely on.

**ESLint is type-checked and project-scoped.** `recommendedTypeChecked` + `stylisticTypeChecked` run against `tsconfig.app.json` (`include: ["src"]`) and `tsconfig.node.json` (`include: ["vite.config.ts"]`). A new `.ts` file outside those two globs will fail linting with a "not included in any project" parser error until you add it to a tsconfig. `eslint-config-prettier` sits last in the `extends` chain so stylistic rules never fight Prettier; keep it there.

**Prettier owns formatting** ([.prettierrc.json](.prettierrc.json): single quotes, semicolons, width 100, trailing commas everywhere). `.prettierignore` exempts `src/assets`, `.scratch`, and `.claude/skills` — do not reformat those.

## Conventions

Reuse these unless you are deliberately redesigning; they are what the current code and remaining config assume.

- **Russian copy, no i18n layer.** `index.html` is `lang="ru"` with a Russian title and description for "SnowdropShop", a fictional CBD store. There is no localization abstraction — do not invent one unless asked.
- **CSS only.** No CSS-in-JS, no utility framework. The pattern is a design-token sheet plus a global reset/utilities sheet, both `@import`ed from [index.css](src/index.css), with a colocated `.css` file per component imported from its `.tsx`, and BEM class names hung off the component root (`newsletter__title`, `topbar__icon-btn`).
- **Fonts are external.** `index.html` preconnects to Google Fonts and pulls Inter + Montserrat over the network — the only remote dependency at runtime.
- **Graphics: raster PNGs for imagery, inline SVG for icons.** [src/assets/](src/assets/) holds 14 PNGs (logo, hero, products, avatars) cropped out of the design mockup `.scratch/asset-extraction/mockup.jpg` by [scripts/crop-assets.py](scripts/crop-assets.py) — a Pillow utility run manually, not wired into npm. UI icons stay inline SVG via [Icon.tsx](src/components/ui/Icon.tsx). `public/favicon.svg` is the tab icon. `public/icons.svg` is unreferenced.
- **Unused dependencies are installed.** `leaflet`, `react-leaflet`, and `qrcode.react` are in `package.json` but imported nowhere in `src/`. They are available if a feature needs them; they are not evidence that a map or QR code already exists. (`react-router-dom` v7 is also installed and **is** used — by [AppRouter](src/router/AppRouter.tsx).)

## Agent skills

Skills live in [.claude/skills/](.claude/skills/) — a curated subset of [mattpocock/skills](https://github.com/mattpocock/skills), vendored so they travel with the repo. The intended flow is `/grill-me` or `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement`, with `/prototype`, `/tdd`, `/diagnosing-bugs`, `/research`, `/codebase-design`, `/domain-modeling`, `/handoff`, `/setup-pre-commit` and `/resolving-merge-conflicts` as supporting skills.

Matt's `code-review` skill is deliberately **not** installed — use Claude Code's built-in `/code-review`.

- Issue tracker: local markdown under `.scratch/<feature-slug>/`. It is exempt from Prettier but **not** listed in `.gitignore`, so scratch files will show up in `git status`.
- Domain docs: `CONTEXT.md` + `docs/adr/` at the repo root, created lazily by `/domain-modeling`. The `docs/agents/` guides that previously described both were deleted in `4be25d8`; the skill files themselves remain the source of truth.

MCP servers in [.mcp.json](.mcp.json): context7 (library docs) and playwright (browser driving).
