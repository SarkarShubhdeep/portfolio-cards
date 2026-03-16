"use client"

import { DynamicCard, type DynamicCardProps } from "@/components/DynamicCard"

export interface ProjectCardProps extends DynamicCardProps {
  projectID: number
  title: string
  description: string
}

export function ProjectCard({
  projectID,
  title,
  description,
  ...dynamicCardProps
}: ProjectCardProps) {
  return (
    <DynamicCard {...dynamicCardProps}>
      <div className="flex min-h-0 flex-col gap-1 font-mono">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </DynamicCard>
  )
}
