# LinkCards

## Function & description

**LinkCards** are grid cards that wrap a single external or internal link (e.g. GitHub, Email, Resume). They are built from `DynamicCard` and support the same responsive behavior: different **grid cell index** and **size/position** per viewport (default &lt;sm, sm, md, lg).

- **Function:** Show one link per card with consistent styling; place and resize each card per breakpoint (e.g. full in one cell on lg, half-height in another on md, quarter-cell on sm).
- **Props used:** `staggerIndex`, `isHalfWidth`, `isHalfHeight`, `cellPosition`. Cell index is controlled by where the card is rendered in the grid (one index per viewport).
- **CellPosition** (only when the card is half-size in that dimension):
  - `isHalfWidth` only: `left` \| `right`
  - `isHalfHeight` only: `top` \| `bottom`
  - Both: `topLeft` \| `topRight` \| `bottomLeft` \| `bottomRight`  
    Use `-1` for the cell index to hide the card on that viewport.

Implementation lives in `apps/web/app/page.tsx`. Add or edit cards below; the code can be updated from this spec.

---

## Card definitions

Add one block per LinkCard. Copy a block, rename the heading, and fill in the fields. Values are read from here to implement or update the cards in the app.

---

### GitHub

- **label:** GitHub
- **href:** https://github.com/sarkarshubhdeep
- **newTab:** yes

| Viewport         | Cell | Size / position                |
| ---------------- | ---- | ------------------------------ |
| default (&lt;sm) | 1    | halfHeight, halfWidth, topLeft |
| sm               | 1    | halfHeight, halfWidth, topLeft |
| md               | 1    | halfHeight, top                |
| lg               | 6    | full                           |

---

### Email

- **label:** Email
- **href:** sarkarshubhdeep2@email.com
- **newTab:** no

| Viewport         | Cell | Size / position    |
| ---------------- | ---- | ------------------ |
| default (&lt;sm) | 1    | halfHeight, bottom |
| sm               | 1    | halfHeight, bottom |
| md               | 1    | halfHeight, bottom |
| lg               | 7    | full               |

---

### Resume

- **label:** Resume
- **href:** #
- **newTab:** yes

| Viewport         | Cell | Size / position                 |
| ---------------- | ---- | ------------------------------- |
| default (&lt;sm) | 1    | halfHeight, halfWidth, topRight |
| sm               | 1    | halfHeight, halfWidth, topRight |
| md               | 2    | full                            |
| lg               | 8    | full                            |

---

### [Add next card below — copy this block and fill in]

- **label:**
- **href:**
- **newTab:** yes / no

| Viewport         | Cell | Size / position                                          |
| ---------------- | ---- | -------------------------------------------------------- |
| default (&lt;sm) |      | full / halfHeight, halfWidth, cellPosition / hidden (-1) |
| sm               |      | full / halfHeight?, halfWidth?, cellPosition?            |
| md               |      | full / halfHeight?, halfWidth?, cellPosition?            |
| lg               |      | full / halfHeight?, halfWidth?, cellPosition?            |

---
