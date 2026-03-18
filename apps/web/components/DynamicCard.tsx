"use client"

import { motion } from "framer-motion"
import { cn } from "@workspace/ui/lib/utils"

const STAGGER_DELAY = 0.04
const DURATION = 0.4

/** Initial x per column (0 = leftmost, 4 = rightmost) for slide-in */
const INITIAL_X_BY_COLUMN = [-200, -160, -120, -80, -40]

/** Press/release: scale down on press, spring back on release */
const PRESS_SCALE = 0.96
const PRESS_TRANSITION = { type: "tween" as const, duration: 0.08 }
const RELEASE_TRANSITION = {
  type: "spring" as const,
  stiffness: 400,
  damping: 15,
}

/** In-cell position when card is smaller than the grid cell. Options depend on isHalfWidth / isHalfHeight. */
export type CellPosition =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"

const CELL_POSITION_CLASSES: Record<CellPosition, string> = {
  left: "justify-self-start",
  right: "justify-self-end",
  top: "self-start",
  bottom: "self-end",
  topLeft: "self-start justify-self-start",
  topRight: "self-start justify-self-end",
  bottomLeft: "self-end justify-self-start",
  bottomRight: "self-end justify-self-end",
}

export interface DynamicCardProps {
  children?: React.ReactNode
  className?: string
  /** Order index for entry animation (left→right, top→down). 0 = first card. */
  staggerIndex?: number
  /** When true, card height is half of the grid cell. */
  isHalfHeight?: boolean
  /** When true, card width is half of the grid cell. */
  isHalfWidth?: boolean
  /**
   * Position within the grid cell when card is half-size.
   * - isHalfWidth only: "left" | "right"
   * - isHalfHeight only: "top" | "bottom"
   * - both: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
   */
  cellPosition?: CellPosition
  /** When false, disables the press/release bounce animation (e.g. for placeholder cells). Default true. */
  enablePressEffect?: boolean
  /** Optional click handler (used by interactive cards like MeCard). */
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

function getPositionClasses(
  isHalfWidth: boolean,
  isHalfHeight: boolean,
  cellPosition?: CellPosition
): string {
  if (!cellPosition) {
    if (isHalfHeight && isHalfWidth) return CELL_POSITION_CLASSES.topLeft
    if (isHalfHeight) return "self-start"
    if (isHalfWidth) return "justify-self-start"
    return ""
  }
  return CELL_POSITION_CLASSES[cellPosition]
}

export function DynamicCard({
  children,
  className,
  staggerIndex = 0,
  isHalfHeight = false,
  isHalfWidth = false,
  cellPosition,
  enablePressEffect = true,
  onClick,
}: DynamicCardProps) {
  const positionClasses = getPositionClasses(
    isHalfWidth,
    isHalfHeight,
    cellPosition
  )

  const content = (
    <div className="flex h-full min-h-0 w-full flex-col">{children}</div>
  )

  return (
    <motion.div
      style={{ zIndex: staggerIndex }}
      initial={{ opacity: 0, x: INITIAL_X_BY_COLUMN[staggerIndex % 5] }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: DURATION,
        delay: staggerIndex * STAGGER_DELAY,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      className={cn(
        "relative flex min-h-0 min-w-0 flex-col overflow-hidden bg-background p-4 transition-colors duration-300 hover:bg-background/50",
        isHalfHeight && "h-1/2",
        isHalfWidth && "w-1/2",
        positionClasses,
        className
      )}
    >
      {enablePressEffect ? (
        <motion.div
          className="flex h-full min-h-0 w-full origin-center flex-col"
          animate={{ scale: 1 }}
          whileTap={{
            scale: PRESS_SCALE,
            transition: PRESS_TRANSITION,
          }}
          transition={RELEASE_TRANSITION}
        >
          {children}
        </motion.div>
      ) : (
        content
      )}
    </motion.div>
  )
}
