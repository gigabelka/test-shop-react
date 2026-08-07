# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. All answers must be in Russian.

## Current state: skeleton, and it does not compile

`src/` holds three files — [main.tsx](src/main.tsx), [App.tsx](src/App.tsx), [index.css](src/index.css). An earlier version of this repo had a full homepage (layout, five home sections, inline-SVG icon/illustration modules, a design-token stylesheet); commits `68e5b14` and `4be25d8`, both labelled as Claude-settings chores, deleted all of it plus `docs/agents/`. That deletion is the intended state going forward — do not restore it unless asked. It remains recoverable from commit `4dbd032` if that ever changes.

Two dangling imports are left over from the deleted tree, so `npm run typecheck` and `npm run build` currently fail:

- `App.tsx` imports `./router/AppRouter`
- `index.css` `@import`s `./styles/theme.css` and `./styles/global.css`

Anything built here starts by either creating those modules or removing the imports. Assume a red baseline: a failing `npm run check` is not necessarily caused by your change.

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

## Conventions carried over from the deleted implementation

Reuse these unless you are deliberately redesigning; they are what the repo's history, remaining config, and skill docs assume.

- **Russian copy, no i18n layer.** `index.html` is `lang="ru"` with a Russian title and description for "SnowdropShop", a fictional CBD store. There is no localization abstraction — do not invent one unless asked.
- **CSS only.** No CSS-in-JS, no utility framework. The pattern was a design-token sheet plus a global reset/utilities sheet, both `@import`ed from [index.css](src/index.css), with a colocated `.css` file per component imported from its `.tsx`, and BEM class names hung off the component root (`newsletter__title`, `topbar__icon--cart`).
- **Fonts are external.** `index.html` preconnects to Google Fonts and pulls Inter + Montserrat over the network — the only remote dependency at runtime.
- **Graphics were code, not assets.** The prior tree had no raster images; icons and illustrations were inline SVG in TSX, keyed off closed string unions. `public/favicon.svg` is the tab icon. `public/icons.svg` is unreferenced.
- **Unused dependencies are installed.** `leaflet`, `react-leaflet`, `qrcode.react`, and `react-router-dom` are all in `package.json` but imported nowhere in the current `src/`. They are available if a feature needs them; they are not evidence that a map, QR code, or router already exists.

## Agent skills

Skills live in [.claude/skills/](.claude/skills/) — a curated subset of [mattpocock/skills](https://github.com/mattpocock/skills), vendored so they travel with the repo. The intended flow is `/grill-me` or `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement`, with `/prototype`, `/tdd`, `/diagnosing-bugs`, `/research`, `/codebase-design`, `/domain-modeling` and `/handoff` as supporting skills.

Matt's `code-review` skill is deliberately **not** installed — use Claude Code's built-in `/code-review`.

- Issue tracker: local markdown under `.scratch/<feature-slug>/`. It is exempt from Prettier but **not** listed in `.gitignore`, so scratch files will show up in `git status`.
- Domain docs: `CONTEXT.md` + `docs/adr/` at the repo root, created lazily by `/domain-modeling`. The `docs/agents/` guides that previously described both were deleted in `4be25d8`; the skill files themselves remain the source of truth.

MCP servers in [.mcp.json](.mcp.json): context7 (library docs) and playwright (browser driving).
