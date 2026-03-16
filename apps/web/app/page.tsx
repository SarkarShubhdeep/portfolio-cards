"use client"

import { DynamicCard } from "@/components/DynamicCard"
import { BreakpointOverlay } from "@/components/BreakpointOverlay"
import { SignatureLetters } from "@/components/SignatureLetters"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Page() {
  const isLg = useMediaQuery("(min-width: 1024px)")
  const isMd = useMediaQuery("(min-width: 768px)")
  const isSm = useMediaQuery("(min-width: 640px)")

  let cols = 1
  let rows = 6

  if (isSm) {
    cols = 2
    rows = 5
  }

  if (isMd) {
    cols = 3
  }

  if (isLg) {
    cols = 5
  }

  const cardCount = cols * rows

  return (
    <>
      <BreakpointOverlay />
      <div className="relative h-svh w-full">
        <main className="grid h-full w-full grid-cols-1 grid-rows-6 gap-px overflow-hidden bg-muted font-mono sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: cardCount }).map((_, i) => (
            <DynamicCard key={`cell-${i}`} staggerIndex={i} />
          ))}
        </main>
        <SignatureLetters />
      </div>
    </>
  )
}
