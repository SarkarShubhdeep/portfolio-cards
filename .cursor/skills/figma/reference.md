# Figma API reference (for prototype conversion)

Use this when you need to pull data from Figma programmatically (e.g. layout, styles, assets).

## Authentication

- Create a **Personal Access Token** in Figma: Settings → Account → Personal access tokens.
- Pass it in the request header: `X-Figma-Token: <token>`.
- Do not commit the token; use env vars (e.g. `FIGMA_ACCESS_TOKEN`).

## Useful endpoints

- **Get file**: `GET https://api.figma.com/v1/files/:file_key`  
  Returns full file JSON (document tree, styles, components).

- **Get file nodes**: `GET https://api.figma.com/v1/files/:file_key/nodes?ids=node_id1,node_id2`  
  Returns only the specified nodes (good for single frames/screens).  
  Node IDs come from the Figma URL: `.../file/...?node-id=123-456` → use `123-456` (with hyphen).

- **Get images**: `GET https://api.figma.com/v1/images/:file_key?ids=node_id&format=svg|png&scale=1,2`  
  Returns URLs to exported images for the given nodes.

## Node structure (simplified)

- `document.type`: `FRAME`, `COMPONENT`, `TEXT`, `RECTANGLE`, etc.
- `document.layoutMode`: `HORIZONTAL` | `VERTICAL` → map to flex direction.
- `document.primaryAxisAlignItems`, `counterAxisAlignItems` → justify/align.
- `document.itemSpacing` → gap.
- `document.fills`, `document.strokes` → colors (often in `color` with r,g,b 0–1).
- `document.style`: font family, size, weight for text.
- `document.absoluteBoundingBox` → position/size when exact placement is needed.

Convert Figma’s 0–1 RGB to hex or Tailwind: `rgb(r*255, g*255, b*255)` or use a small helper.

## Rate limits

Figma API is rate-limited; avoid tight loops. Cache file/node responses when iterating on the same design.
