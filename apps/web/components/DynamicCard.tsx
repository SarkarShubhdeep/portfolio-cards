"use client"

import { motion } from "framer-motion"
import { cn } from "@workspace/ui/lib/utils"

const STAGGER_DELAY = 0.04
const DURATION = 0.4

/** Initial x per column (0 = leftmost, 4 = rightmost) for slide-in */
const INITIAL_X_BY_COLUMN = [-200, -160, -120, -80, -40]

interface DynamicCardProps {
  children?: React.ReactNode
  className?: string
  /** Order index for entry animation (left→right, top→down). 0 = first card. */
  staggerIndex?: number
}

export function DynamicCard({
  children,
  className,
  staggerIndex = 0,
}: DynamicCardProps) {
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
        "flex min-h-0 min-w-0 flex-col overflow-hidden bg-background p-4",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
