# LinkCard prompt template

Copy the block below, fill in the placeholders, and paste into the chat to add a new LinkCard.

---

Add another LinkCard with these details:

- **Label:** [e.g. Email, Resume, LinkedIn]
- **Link:** [e.g. mailto:you@example.com or https://...]
- **Open in new tab:** [yes / no]

**Position and props per viewport:**

- **default (<sm):** cell [0–5 or -1 to hide], [full OR: isHalfHeight, isHalfWidth, cellPosition?]
- **isSM:** cell [index], [full OR: isHalfHeight?, isHalfWidth?, cellPosition?]
- **isMD:** cell [index], [full OR: isHalfHeight?, isHalfWidth?, cellPosition?]
- **isLG:** cell [index], [full OR: isHalfHeight?, isHalfWidth?, cellPosition?]

**CellPosition options (only when card is half-size):**

- isHalfWidth only: `left` | `right`
- isHalfHeight only: `top` | `bottom`
- both: `topLeft` | `topRight` | `bottomLeft` | `bottomRight`

Use `-1` for the cell index to hide the card on that viewport.

---

## Example (filled)

Add another LinkCard with these details:

- **Label:** Email
- **Link:** mailto:me@example.com
- **Open in new tab:** no

**Position and props per viewport:**

- **default (<sm):** cell 0, full
- **isSM:** cell 1, isHalfHeight, isHalfWidth, topRight
- **isMD:** cell 1, isHalfHeight, bottom
- **isLG:** cell 7, full

---
