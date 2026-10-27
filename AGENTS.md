# Portfolio

Portfolio + CV of Angelo Clauin (French copy). Static SPA: Vite 6, React 18, TypeScript (strict), Tailwind 3. Art direction "le manuel": warm paper/ink palette, Fraunces (display) + JetBrains Mono, one accent colour, system light/dark via `prefers-color-scheme`. Brief in `IDEA.md`.

## Commands
- `npm install`
- `npm run dev` (Vite, :5173)
- `npm run build` (`tsc -b && vite build` → `dist/`)
- `npm run typecheck`
- `npm run preview -- --port 4180 --strictPort`: use a non-default port; **:4173 is the live preview of the old site** (`/srv/portfolio`, behind Caddy at delikesance.cloud). Never kill it with a broad `pkill`.
- No test or lint scripts exist.

## Layout
- `src/data/portfolio.ts`: ALL content (person, `FEATURED`, `INDEX`, `EXPERIENCE`, `SKILLS`). Edit text here, not in `App.tsx`.
- `src/App.tsx`: sections; `src/index.css`: theme tokens (CSS vars) consumed by `tailwind.config.js`.
- `public/shots/`: screenshots copied from sibling repos in `~/Projects`; `public/resume.pdf` copied from `~/Projects/portfolio/` (old site; may be stale).

## Conventions
- Claims about a project must be checked against that repo's README/manifests in `~/Projects/<name>`; no invented metrics.
- Accent colour only via `text-accent` / `var(--accent)`; rules via `border-rule`.
- Animations must stay disabled under `prefers-reduced-motion` (see `index.css`).
- Excluded on purpose: `vlc` (third-party clone), `slim-ews-mcp` (other author), `metis` internals/secrets (employer; only the Experience summary).

## Pitfalls
- `metis.zip`, `~/Projects/metis/secrets`, `.env` files: never read into or copy to this repo.
- Large PNGs: `magick in.png -resize 1600x -quality 82 out.webp`.
