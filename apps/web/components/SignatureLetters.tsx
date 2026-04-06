"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Signature letters over the bottom row.
 * CASE 1 (lg+): inner width 100% so letters spread across the full row.
 * CASE 2 (< lg): inner width 20% so letters sit together with 12px gap.
 * Width is animated so the transition is smooth.
 */

const LETTERS = ["s", "h", "u", "b", "h"] as const
/** Fixed letter size (matches former clamp max); no vw so size does not shrink with viewport. */
const LETTER_FONT_SIZE_REM = 8
const INSET = 12
const GAP = 12
const LG_BREAKPOINT = 1024

const transition = { type: "spring" as const, stiffness: 260, damping: 28 }

export function SignatureLetters() {
  const isLg = useMediaQuery(`(min-width: ${LG_BREAKPOINT}px)`)

  return (
    <div
      className="pointer-events-none absolute inset-0 z-50 grid grid-cols-5 grid-rows-5 gap-0"
      aria-hidden
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={`slot-${i}`} />
      ))}
      <div className="col-span-5 flex w-full items-end">
        <motion.div
          layout
          animate={{
            width: isLg ? "100%" : "20%",
            gap: isLg ? 0 : GAP,
          }}
          transition={transition}
          className="flex items-end overflow-visible"
          style={{
            paddingLeft: INSET,
            paddingBottom: INSET,
          }}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              layout
              transition={transition}
              className="inline-block shrink-0 leading-[0.85] font-bold tracking-tight text-foreground"
              style={{
                fontSize: `${LETTER_FONT_SIZE_REM}rem`,
                flex: isLg ? "0 0 20%" : "0 0 auto",
              }}
              aria-hidden
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
