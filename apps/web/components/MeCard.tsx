"use client"

import { DynamicCard } from "@/components/DynamicCard"
import * as React from "react"
import { motion } from "framer-motion"

interface MeCardProps {
  staggerIndex?: number
  isInverted: boolean
  onToggle: () => void
}

export function MeCard({
  staggerIndex = 0,
  isInverted,
  onToggle,
}: MeCardProps) {
  const [clickNonce, setClickNonce] = React.useState(0)

  const titleRef = React.useRef<HTMLSpanElement | null>(null)
  const descriptionRef = React.useRef<HTMLSpanElement | null>(null)

  type GsapType = typeof import("gsap").gsap
  const gsapRef = React.useRef<GsapType | null>(null)
  const scramblePluginLoadedRef = React.useRef(false)

  const TITLE_TEXT = "SHUBHDEEP SARKAR"
  const DESCRIPTION_TEXT =
    "Full Stack Developer. Intern at Medical Informatics Engineering. From India. Currently in Fort Wayne, Indiana."

  React.useEffect(() => {
    let mounted = true

    async function loadGsap() {
      if (scramblePluginLoadedRef.current) return

      const gsapModule = await import("gsap")
      const pluginModule = await import("gsap/ScrambleTextPlugin")

      const gsap = gsapModule.gsap
      const ScrambleTextPlugin = pluginModule.ScrambleTextPlugin

      gsap.registerPlugin(ScrambleTextPlugin)

      if (!mounted) return
      gsapRef.current = gsap
      scramblePluginLoadedRef.current = true
    }

    loadGsap()

    return () => {
      mounted = false
    }
  }, [])

  React.useEffect(() => {
    const gsap = gsapRef.current
    const titleEl = titleRef.current
    const descriptionEl = descriptionRef.current

    if (!gsap || !titleEl || !descriptionEl) return

    // Avoid stacking multiple scrambles.
    gsap.killTweensOf(titleEl)
    gsap.killTweensOf(descriptionEl)

    gsap.to(titleEl, {
      duration: 0.8,
      scrambleText: {
        text: TITLE_TEXT,
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        speed: 0.35,
      },
      ease: "none",
    })

    gsap.to(descriptionEl, {
      duration: 1.1,
      scrambleText: {
        text: DESCRIPTION_TEXT,
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        speed: 0.25,
      },
      ease: "none",
    })
  }, [clickNonce])

  React.useEffect(() => {
    const titleEl = titleRef.current
    const descriptionEl = descriptionRef.current
    return () => {
      const gsap = gsapRef.current
      if (!gsap) return
      if (titleEl) gsap.killTweensOf(titleEl)
      if (descriptionEl) gsap.killTweensOf(descriptionEl)
    }
  }, [])

  return (
    <DynamicCard
      staggerIndex={staggerIndex}
      enablePressEffect={false}
      className={
        isInverted
          ? "cursor-pointer bg-foreground hover:bg-foreground"
          : "cursor-pointer"
      }
      onClick={() => {
        onToggle()
        setClickNonce((v) => v + 1)
      }}
    >
      <motion.div
        key={clickNonce}
        initial={{ opacity: 0, y: 3, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex h-full min-h-0 flex-col justify-between"
      >
        <div
          className={`flex h-full min-h-0 flex-col justify-between gap-2 transition-colors ${
            isInverted ? "text-background" : "text-foreground"
          }`}
        >
          <span ref={titleRef}>{TITLE_TEXT}</span>

          <span
            ref={descriptionRef}
            className={
              isInverted
                ? "text-sm text-background/80"
                : "text-sm text-muted-foreground"
            }
          >
            {DESCRIPTION_TEXT}
          </span>
        </div>
      </motion.div>
    </DynamicCard>
  )
}
