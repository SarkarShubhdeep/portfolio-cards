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
      <div className="flex h-full min-h-0 flex-col justify-between gap-2 font-mono">
        <span className="">{title}</span>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </DynamicCard>
  )
}
