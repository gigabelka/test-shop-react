# React 18 + TypeScript + Vite

## Основные команды Vite

npm run dev — dev-сервер с HMR
npm run build — продакшен-сборка в dist/
npm run preview — локальный просмотр билда
npx tsc --noEmit — проверка типов без сборки

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package. To deploy your site, simply run:

```bash
npm run deploy
```

This command will first run `npm run build` to create a production build and then deploy the contents of the `dist/` folder to your GitHub repository under the `gh-pages` branch.

https://gigabelka.github.io/test-shop-react/
