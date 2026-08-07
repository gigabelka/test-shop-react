# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — `tsc -b` then production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run typecheck` / `npm run lint` / `npm run format:check`
- `npm run check` — all three of the above in one go; run this before declaring work done
- `npm run format` — Prettier write
- `npm run deploy` — `predeploy` builds, then `gh-pages` publishes `dist/` to the `gh-pages` branch. Live site: https://gigabelka.github.io/test-shop-react/

No test runner is configured.

## Architecture

Single-page React 18 + TypeScript + Vite marketing site ("SnowdropShop", a fictional CBD store). Everything is static — no backend, no API calls, no global state, no persistence. The only React state in the app is local `useState` (mobile menu toggle in `TopBar`, the newsletter form in `NewsletterSection`).

### Build / deploy specifics

- `vite.config.ts` sets `base: '/test-shop-react/'` for GitHub Pages. Any absolute asset path must respect this base.
- Routing uses `HashRouter` ([src/router/AppRouter.tsx](src/router/AppRouter.tsx)) specifically so GitHub Pages serves the SPA without server-side rewrites. Do not swap to `BrowserRouter` without solving the 404 problem. In-page nav links are plain `<a href="#/...">` anchors, not `<Link>` — consistent with the hash router.
- The React Compiler runs via `@rolldown/plugin-babel` + `reactCompilerPreset({ target: '18' })`, and ESLint enforces `react-compiler/react-compiler: error`. Write components that satisfy the Rules of React; the compiler memoizes automatically, so avoid manual `useMemo`/`useCallback` without a specific reason.
- `tsconfig.app.json` is strict-adjacent: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no enums, no parameter properties).

### Structure

`main.tsx` → `App` → `AppRouter` → `Layout` (TopBar + `<Outlet />` + SiteFooter) → `HomePage`. Only one route exists; `*` redirects to `/`.

`HomePage` is a stack of five section components in [src/components/home/](src/components/home/): Hero → Advantages → Products → Why → Newsletter. Adding a homepage section means adding a `Section.tsx` + `Section.css` pair there and slotting it into [HomePage.tsx](src/pages/HomePage.tsx). Adding a page means `PageName.tsx` + `PageName.css` in [src/pages/](src/pages/) plus a route in `AppRouter` and an entry in `navLinks`.

### Content and types

Copy is hardcoded Russian, in two places: repeated/list-shaped content lives in [src/data/home.ts](src/data/home.ts) (`navLinks`, `heroFeatures`, `trustItems`, `advantages`, `productCategories`, `whyCards`); one-off headings and body copy sit inline in the JSX. There is no i18n layer and no `LocalizedText` type — do not invent one unless asked.

[src/types/index.ts](src/types/index.ts) holds the small shared vocabulary: `IconName`, `ProductArtId`, `HeroFeature`, `FeatureItem`, `ProductCategory`. `IconName` and `ProductArtId` are closed unions that gate the two switchboard components below — adding a variant means editing the union *and* the component's record.

### Graphics are code, not assets

There are no raster images. All artwork is inline SVG in TSX:

- [src/components/ui/Icon.tsx](src/components/ui/Icon.tsx) — a `Record<IconName, ReactNode>` of stroke paths on a 24×24 viewBox, rendered with shared stroke props. New icon = new `IconName` member + new record entry.
- [src/components/illustrations/ProductArt.tsx](src/components/illustrations/ProductArt.tsx) — product "photo" placeholders keyed by `ProductArtId`; the file docblock says real images replace this file alone.
- [src/components/illustrations/Decor.tsx](src/components/illustrations/Decor.tsx) (snowflakes, gift box, blobs; styled by the colocated `Decor.css`, imported once from `HomePage`) and [Mascot.tsx](src/components/illustrations/Mascot.tsx).

`public/favicon.svg` is the tab icon. `public/icons.svg` is currently unreferenced.

### Styling

CSS only — no CSS-in-JS, no utility framework. [src/index.css](src/index.css) imports [styles/theme.css](src/styles/theme.css) (design tokens: brand blues, text/surface colors, radii, shadows, container width) then [styles/global.css](src/styles/global.css) (reset, base typography, and the shared utility classes `.container`, `.section`, `.section-head`, `.section-title`, `.section-subtitle`, `.btn` + `.btn--primary/--ghost/--white/--lg/--block`, `.sr-only`). There is no dark theme.

Every component and page ships a colocated `.css` file imported from its `.tsx`. Class names follow BEM off the component root (`newsletter__title`, `topbar__icon--cart`). Prefer reusing a token from `theme.css` over a literal color; prefer a global utility class over redefining button/section styles locally.

### Formatting

Prettier owns formatting (`.prettierrc.json`: single quotes, semicolons, width 100, trailing commas). `eslint-config-prettier` sits last in the ESLint `extends` chain so stylistic rules never fight it.

## Agent skills

Skills live in [.claude/skills/](.claude/skills/) — a curated subset of [mattpocock/skills](https://github.com/mattpocock/skills), copied in so they travel with the repo. The flow is `/grill-me` or `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement`, with `/prototype`, `/tdd`, `/diagnosing-bugs`, `/research` and `/handoff` as supporting skills.

Matt's `code-review` skill is deliberately **not** installed — use Claude Code's built-in `/code-review`.

- Issue tracker: local markdown under `.scratch/<feature-slug>/`. See [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md).
- Domain docs: single-context `CONTEXT.md` + `docs/adr/` at the repo root, both created lazily by `/domain-modeling`. See [docs/agents/domain.md](docs/agents/domain.md).

MCP servers configured in `.mcp.json`: context7 (library docs) and playwright (browser driving).
