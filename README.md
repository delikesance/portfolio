# Portfolio — Angelo Clauin

Portfolio + CV, une page, en français. Vite 6 · React 18 · TypeScript · Tailwind 3. Direction artistique « le manuel » : papier/encre, Fraunces + JetBrains Mono, un seul accent, thème clair/sombre selon le système.

## Développement

```bash
npm install
npm run dev        # Vite, :5173
npm run build      # tsc -b && vite build → dist/
npm run typecheck
npm run preview -- --port 4180 --strictPort
```

Tout le contenu (projets, expérience, compétences) est dans `src/data/portfolio.ts`.

## Déploiement

Non automatisé. `dist/` est servi par `vite preview` sur `127.0.0.1:4173` derrière Caddy (voir `Caddyfile`).
