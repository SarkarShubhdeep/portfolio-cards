---
name: figma
description: Converts Figma designs into working prototypes (React/Next.js + Tailwind). Use when the user shares Figma links, screenshots, or specs; when they say "build from Figma", "implement this design", "convert design to code", or invoke /figma.
---

# Figma to Prototype

Convert Figma frames and components into real UI in this project (Next.js 16, React 19, Tailwind v4, TypeScript). Prefer the app in `apps/web` and shared UI in `packages/ui`.

## Workflow

1. **Gather design input**  
   Prefer: Figma file URL + node/frame IDs, or Dev Mode specs (CSS, spacing, fonts). Otherwise: screenshots plus written specs (colors, fonts, spacing, breakpoints).

2. **Map Figma → code**  
   - **Frames / sections** → `<section>` or semantic `<div>`, use Tailwind for layout.  
   - **Auto layout** → `flex` or `grid`; use gap for spacing.  
   - **Text** → Match font family, size, weight, line-height in Tailwind (or CSS vars if in design system).  
   - **Colors** → Tailwind classes or design tokens; use opacity (e.g. `bg-black/10`) when Figma shows opacity.  
   - **Borders, radius, shadows** → `border`, `rounded-*`, `shadow-*`.  
   - **Components** → Reusable React components in `apps/web` or `packages/ui` when they repeat.

3. **Assets**  
   - Export SVGs from Figma (or use Figma API) and add under `apps/web/public` or import in components.  
   - Prefer SVG for icons and logos; use Next.js `<Image>` for photos/bitmaps.

4. **Implement**  
   - Create or update pages in `apps/web/app/` and components in `apps/web/components/` or `packages/ui`.  
   - Use Tailwind only (no inline styles unless necessary).  
   - Keep responsive behavior: use Figma breakpoints or standard ones (sm/md/lg/xl).

5. **Verify**  
   - Compare layout, spacing, typography, and colors to the design; fix mismatches.

## Conventions

- **Naming**: Components PascalCase; files match component name (e.g. `HeroSection.tsx`).  
- **Structure**: One main component per screen/section; extract repeated pieces into smaller components.  
- **Accessibility**: Semantic HTML, `aria-*` where needed, focus states for interactive elements.

## Getting specs from Figma

- **Figma REST API**: Use with a personal access token to read file/node data (see [reference.md](reference.md)).  
- **Dev Mode**: Copy CSS, measure spacing, and note fonts from the right panel.  
- **Export**: Use “Copy as CSS” or “Export” for assets; use 1x and 2x where relevant.

## Output

Deliver runnable UI: new or updated routes and components that match the design and work in the existing Next.js + Tailwind setup. Do not leave placeholder “Figma image” blocks when the goal is a real prototype.
