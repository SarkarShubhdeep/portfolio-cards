# MeInfoCards

## Function & description

**MeInfoCards** are “about me” overlay cards that appear when the user toggles `MeCard` (clicking `apps/web/components/MeCard.tsx`).

- Function: show extra info (currently Technical skills) inside a full grid cell as a dark-inverted overlay.
- Placement: the overlay is rendered on top of the existing card in a specific **grid cell index** per viewport.
- When toggled off: the overlay disappears immediately and the original card beneath becomes visible again.

## How they work in code

- Implementation lives in `apps/web/app/page.tsx`:
  - the viewport-dependent cell index where the overlay should show is computed there
  - the overlay is rendered as an absolute overlay on top of the base grid cell
- Overlay UI lives in `apps/web/components/MeInfoCard.tsx`.

`MeInfoCard` expects:

- `title: string`
- `bodyText: string` (use newline `\n` for line breaks)

## Card definitions

For now, we only render **Technical skills**. When you’re ready to add more cards, copy the “Technical skills” block below and fill in the fields, then update the cell placement logic in `apps/web/app/page.tsx` accordingly.

---

### Technical skills

- **title:** Technical skills
- **bodyText:**

```text
React / Next.js
TypeScript + Node.js
SQL (Postgres) + Tailwind
Framer Motion + GSAP
```

| Viewport      | Cell | Size / position        |
| ------------- | ---- | ---------------------- |
| default (<sm) | 2    | full grid cell overlay |
| sm            | 5    | full grid cell overlay |
| md            | 6    | full grid cell overlay |
| lg            | 1    | full grid cell overlay |

---

### Latest Qualification

- **title:** Masters in Computer Science from Purdue University, 2025
- **bodyText:**

```text
Rapid Prototyping and App Designing, Full Stack Web Dev, Machine Learning, Natural Language Processing, Heuristics and Algorithms
```

| Viewport      | Cell | Size / position        |
| ------------- | ---- | ---------------------- |
| default (<sm) | 3    | full grid cell overlay |
| sm            | 6    | full grid cell overlay |
| md            | 7    | full grid cell overlay |
| lg            | 2    | full grid cell overlay |

---

### [Add next card below — copy this block and fill in]

- **title:**
- **bodyText:**

```text
(line 1)
(line 2)
```

| Viewport      | Cell | Size / position        |
| ------------- | ---- | ---------------------- |
| default (<sm) |      | full grid cell overlay |
| sm            |      | full grid cell overlay |
| md            |      | full grid cell overlay |
| lg            |      | full grid cell overlay |
