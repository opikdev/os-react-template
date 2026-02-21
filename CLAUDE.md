# CLAUDE.md

## Project

React + Vite + Tailwind CSS v4 starter template.

## Stack

- React 19 with TypeScript (strict mode)
- Vite 7 (dev server & bundler)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- Bun as package manager

## Commands

- `bun dev` — start dev server
- `bun run build` — typecheck with `tsc -b` then build with Vite
- `bun run lint` — run ESLint
- `bun run preview` — preview production build

## Project Structure

- `src/` — application source code
- `src/main.tsx` — app entry point
- `src/index.css` — global styles with `@import "tailwindcss"`
- `public/` — static assets

## Conventions

- Use Tailwind utility classes for all styling; avoid custom CSS
- Tailwind v4 config goes in CSS via `@theme` — no `tailwind.config.js`
- TypeScript strict mode is enabled; no `any` types
- Use functional components with hooks
