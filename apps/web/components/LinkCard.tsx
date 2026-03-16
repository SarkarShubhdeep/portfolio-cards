"use client"

import {
  DynamicCard,
  type DynamicCardProps,
  type CellPosition,
} from "@/components/DynamicCard"

export type { CellPosition }

/**
 * LinkCard supports all DynamicCard props including cellPosition.
 * Use cellPosition with isHalfWidth / isHalfHeight to pin the card to a corner or edge of the cell.
 * Combine with rendering the card at different grid indices per breakpoint to reposition responsively.
 */
export interface LinkCardProps extends DynamicCardProps {}

export function LinkCard(props: LinkCardProps) {
  return <DynamicCard {...props} />
}
