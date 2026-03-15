"use client"

import { motion } from "framer-motion"
import { cn } from "@workspace/ui/lib/utils"

const STAGGER_DELAY = 0.04
const DURATION = 0.4

/** Initial x per column (0 = leftmost, 4 = rightmost) for slide-in */
const INITIAL_X_BY_COLUMN = [-200, -160, -120, -80, -40]

interface GridCardProps {
  children?: React.ReactNode
  className?: string
  /** Align content to bottom (e.g. for row 5 large letters) */
  alignBottom?: boolean
  /** Order index for entry animation (left→right, top→down). 0 = first card. */
  staggerIndex?: number
}

export function GridCard({
  children,
  className,
  alignBottom,
  staggerIndex = 0,
}: GridCardProps) {
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
      className={cn(
        "min-h-0 min-w-0 border-[0.5px] border-border bg-background p-4 flex flex-col overflow-hidden",
        alignBottom ? "justify-end" : "justify-start",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
