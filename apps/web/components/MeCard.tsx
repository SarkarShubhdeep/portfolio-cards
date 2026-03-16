"use client"

import { DynamicCard } from "@/components/DynamicCard"

interface MeCardProps {
  staggerIndex?: number
}

export function MeCard({ staggerIndex = 0 }: MeCardProps) {
  return (
    <DynamicCard staggerIndex={staggerIndex}>
      <span className="font-mono text-sm tracking-widest">SHUBHDEEP SARKAR</span>
    </DynamicCard>
  )
}
