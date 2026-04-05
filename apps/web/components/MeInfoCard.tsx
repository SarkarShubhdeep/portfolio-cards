"use client"

import { DynamicCard } from "@/components/DynamicCard"
import type { ReactNode } from "react"
import * as React from "react"

export interface MeInfoCardProps {
  staggerIndex?: number
  title: string
  bodyText: string
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function MeInfoCard({
  staggerIndex = 0,
  title,
  bodyText,
}: MeInfoCardProps) {
  const titleRef = React.useRef<HTMLSpanElement | null>(null)
  const bodyRef = React.useRef<HTMLDivElement | null>(null)

  type GsapType = typeof import("gsap").gsap
  const gsapRef = React.useRef<GsapType | null>(null)
  const scrambleLoadedRef = React.useRef(false)
  const [gsapReady, setGsapReady] = React.useState(false)

  React.useEffect(() => {
    let mounted = true

    async function loadGsap() {
      if (scrambleLoadedRef.current) return

      const gsapModule = await import("gsap")
      const pluginModule = await import("gsap/ScrambleTextPlugin")

      const gsap = gsapModule.gsap
      const ScrambleTextPlugin = pluginModule.ScrambleTextPlugin

      gsap.registerPlugin(ScrambleTextPlugin)

      if (!mounted) return
      gsapRef.current = gsap
      scrambleLoadedRef.current = true
      setGsapReady(true)
    }

    loadGsap()

    return () => {
      mounted = false
    }
  }, [])

  React.useEffect(() => {
    const gsap = gsapRef.current
    const titleEl = titleRef.current
    const bodyEl = bodyRef.current

    if (!gsapReady || !gsap || !titleEl || !bodyEl) return

    gsap.killTweensOf(titleEl)
    gsap.killTweensOf(bodyEl)

    gsap.to(titleEl, {
      duration: 0.7,
      scrambleText: {
        text: title,
        chars: SCRAMBLE_CHARS,
        speed: 0.4,
      },
      ease: "none",
    })

    gsap.to(bodyEl, {
      duration: 1.0,
      scrambleText: {
        text: bodyText,
        chars: SCRAMBLE_CHARS,
        speed: 0.25,
      },
      ease: "none",
    })

    return () => {
      gsap.killTweensOf(titleEl)
      gsap.killTweensOf(bodyEl)
    }
  }, [gsapReady, title, bodyText])

  return (
    <DynamicCard
      staggerIndex={staggerIndex}
      enableEntryAnimation={false}
      enablePressEffect={false}
      className="pointer-events-none h-full min-h-0 w-full bg-foreground text-background hover:bg-foreground/90"
    >
      <div className="flex h-full min-h-0 flex-col justify-between gap-2">
        <span ref={titleRef} className="text-sm font-medium">
          {title}
        </span>
        <div
          ref={bodyRef}
          className="text-sm leading-relaxed whitespace-pre-line text-background/80"
        >
          {bodyText}
        </div>
      </div>
    </DynamicCard>
  )
}
