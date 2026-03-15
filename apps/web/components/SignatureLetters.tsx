"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Signature letters over the bottom row.
 * CASE 1 (xl+): col-span-5 so letters spread across the full row.
 * CASE 2 (< xl): col-span-1 so the container is narrow and letters sit together with 12px gap.
 */

const LETTERS = ["s", "h", "u", "b", "h"] as const
const INSET = 12
const GAP = 12
const XL_BREAKPOINT = 1280

const layoutTransition = { type: "spring" as const, stiffness: 260, damping: 28 }

export function SignatureLetters() {
  const isXl = useMediaQuery(`(min-width: ${XL_BREAKPOINT}px)`)

  return (
    <div
      className="pointer-events-none absolute inset-0 z-50 grid grid-cols-5 grid-rows-5 gap-0"
      aria-hidden
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={`slot-${i}`} />
      ))}
      <motion.div
        layout
        transition={layoutTransition}
        className={`flex w-full items-end ${isXl ? "col-span-5" : "col-span-1"}`}
        style={{ paddingLeft: INSET, paddingBottom: INSET, gap: isXl ? 0 : GAP }}
      >
        {LETTERS.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            layout
            transition={layoutTransition}
            className="inline-block shrink-0 text-[clamp(3rem,12vw,8rem)] leading-[0.85] font-bold tracking-tight text-foreground"
            style={{
              flex: isXl ? "0 0 20%" : "0 0 auto",
            }}
            aria-hidden
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
