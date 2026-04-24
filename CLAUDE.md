# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run lint` — ESLint across the repo (flat config, type-checked rules)
- `npx tsc --noEmit` — type-check only, no build
- `npm run deploy` — `predeploy` runs the build, then `gh-pages` publishes `dist/` to the `gh-pages` branch. Live site: https://gigabelka.github.io/test-shop-react/

No test runner is configured.

## Architecture

Single-page React 18 + TypeScript + Vite storefront for a fictional gelato shop. All data is static (in `src/data/`) — no backend, no API calls. State lives in React contexts and `localStorage`.

### Build / deploy specifics
- `vite.config.ts` sets `base: '/test-shop-react/'` for GitHub Pages hosting. Any absolute asset path must respect this base.
- Routing uses `HashRouter` (see [src/router/AppRouter.tsx](src/router/AppRouter.tsx)) specifically so GitHub Pages can serve the SPA without server-side rewrites. Do not swap to `BrowserRouter` without also solving the 404 problem.
- The React Compiler is enabled via `@rolldown/plugin-babel` + `babel-plugin-react-compiler` (target '18'), and ESLint enforces `react-compiler/react-compiler: error`. Write components that satisfy the Rules of React — the compiler will memoize automatically, so avoid manual `useMemo`/`useCallback` unless there's a specific reason.

### Provider stack
[src/App.tsx](src/App.tsx) composes four context providers in this order (outer → inner): `ThemeProvider` → `LanguageProvider` → `UserProvider` → `CartProvider`, then `AppRouter`. Each context in [src/context/](src/context/) exposes a `useXxx` hook that throws if called outside its provider. `CartContext` and `ThemeContext` persist to `localStorage` (keys `shop.cart`, etc.) and rehydrate on load.

### Layout / routing
Every route renders inside [Layout](src/components/layout/Layout.tsx) (TopBar + `<Outlet />` + BottomNav). Routes are declared flat in [AppRouter.tsx](src/router/AppRouter.tsx); unknown paths redirect to `/`. When adding a page: create `PageName.tsx` + `PageName.css` in [src/pages/](src/pages/), register the route, and add nav entries/translation keys.

### i18n
All user-facing strings go through the translation layer:
- `LocalizedText = { ru: string; en: string }` ([src/types/index.ts](src/types/index.ts))
- Static UI strings live in [src/i18n/dict.ts](src/i18n/dict.ts) keyed by dotted namespace (`nav.*`, `catalog.*`, etc.)
- [useTranslation](src/i18n/useTranslation.ts) returns `t(key)` for dict lookups and `tl(localizedText)` for inline `LocalizedText` objects (used on product/news/review data).
- When adding UI copy, add both `ru` and `en` entries; the picker falls back per `pickLocale` in `dict.ts`.

### Data model
Domain types are centralized in [src/types/index.ts](src/types/index.ts) (`Product`, `NewsItem`, `Certificate`, `User`, `CartItem`, `Review`, `SortKey`, `CategoryId`, `Tier`). Data is hardcoded in [src/data/](src/data/) — `products.ts` is the source of truth for pricing that `CartContext.total` multiplies against `CartItem.qty`.

### Styling
Global styles + CSS variables (theme tokens) live in [src/styles/](src/styles/) (`global.css`, `theme.css`). Theme switching toggles a class/attribute consumed by those variables. Each page/component ships a colocated `.css` file — keep that convention rather than introducing CSS-in-JS or a utility framework.
