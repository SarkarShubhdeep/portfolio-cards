"use client"

import { DynamicCard } from "@/components/DynamicCard"

interface MeCardProps {
  staggerIndex?: number
}

export function MeCard({ staggerIndex = 0 }: MeCardProps) {
  return (
    <DynamicCard staggerIndex={staggerIndex}>
      <div className="flex h-full min-h-0 flex-col justify-between gap-2">
        <span>SHUBHDEEP SARKAR</span>

        <span className="text-sm">
          Full Stack Developer. Masters in Computer Science from Purdue
          University, 2025. Intern at Medical Informatics Engineering. From
          India. Currently in Fort Wayne, Indiana.
        </span>
      </div>
    </DynamicCard>
  )
}
