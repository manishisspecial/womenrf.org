# Women's Rights First (womenrf.org) – Replica

Next.js + Tailwind CSS replica of the [Women's Rights First](https://womenrf.org) homepage, matching the original layout, sections, and styling.

## Stack

- **Node.js** – runtime
- **Next.js 14** – React framework (App Router)
- **Tailwind CSS** – styling (WRF brand colors, responsive layout)
- **TypeScript** – type safety

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `npm run dev` | Start dev server           |
| `npm run build` | Production build          |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project structure

```
src/
  app/           # App Router: layout, page, globals.css
  components/    # Header, Hero, Partners, ExploreImpact, Programs, Footer
```

Design tokens (purple, coral, gray-bg, etc.) are in `tailwind.config.ts` under `theme.extend.colors.wrf`.

## Original static files

The previous static site (`index.html`, `styles.css`, `script.js`) is still in the repo root. You can remove them once you are fully on the Next.js build.
