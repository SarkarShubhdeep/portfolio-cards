"use client"

import { DynamicCard } from "@/components/DynamicCard"
import { LinkCard } from "@/components/LinkCard"
import { MeCard } from "@/components/MeCard"
import { ProjectCard } from "@/components/ProjectCard"
import { BreakpointOverlay } from "@/components/BreakpointOverlay"
import { SignatureLetters } from "@/components/SignatureLetters"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ArrowUpRight } from "@phosphor-icons/react"

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
  const meCardPosition = isLg ? 5 : 0
  const linkCardsCell1 = !isLg // GitHub + Email (+ Resume on default/sm) share cell 1
  const githubCardPosition = isLg ? 6 : -1
  const emailCardPosition = isLg ? 7 : -1
  const resumeCardPosition = isLg ? 8 : isMd ? 2 : -1
  const projectCardPosition = isLg ? 11 : isMd ? 3 : 2
  const project1CardPosition = isLg ? 12 : isMd ? 4 : 3
  const project2CardPosition = isLg ? 13 : isMd ? 5 : 4

  return (
    <>
      {/* <BreakpointOverlay  /> */}
      <div className="relative h-svh w-full">
        <main className="grid h-full w-full grid-cols-1 grid-rows-6 gap-px overflow-hidden bg-muted font-mono sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: cardCount }).map((_, i) =>
            i === meCardPosition ? (
              <MeCard key={`cell-${i}`} staggerIndex={i} />
            ) : i === 1 && linkCardsCell1 ? (
              <div
                key="cell-1-links"
                className="grid h-full w-full grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1"
              >
                <LinkCard
                  staggerIndex={1}
                  isHalfWidth={!isMd}
                  isHalfHeight
                  cellPosition={isMd ? "top" : "topLeft"}
                >
                  <a
                    href="https://github.com/sarkarshubhdeep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full flex-col justify-between"
                  >
                    <div className="flex w-full justify-between">
                      GitHub
                      <ArrowUpRight size={20} weight="regular" aria-hidden />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      sarkarshubhdeep
                    </span>
                  </a>
                </LinkCard>
                <LinkCard
                  staggerIndex={1}
                  isHalfHeight
                  cellPosition="bottom"
                  className="border-t border-muted"
                >
                  <a
                    href="mailto:sarkarshubhdeep2@email.com"
                    className="flex h-full w-full flex-col justify-between font-mono"
                  >
                    <div className="flex w-full justify-between">
                      Email
                      <ArrowUpRight size={20} weight="regular" aria-hidden />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      sarkarshubhdeep2@email.com
                    </span>
                  </a>
                </LinkCard>
                {!isMd && (
                  <LinkCard
                    staggerIndex={1}
                    isHalfWidth
                    isHalfHeight
                    cellPosition="topRight"
                    className="border-l border-muted"
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full justify-between font-mono"
                    >
                      Resume
                      <ArrowUpRight size={20} weight="regular" aria-hidden />
                    </a>
                  </LinkCard>
                )}
              </div>
            ) : i === githubCardPosition ? (
              <LinkCard key={`cell-${i}`} staggerIndex={i}>
                <a
                  href="https://github.com/sarkarshubhdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full flex-col justify-between font-mono"
                >
                  <div className="flex w-full justify-between">
                    GitHub
                    <ArrowUpRight size={20} weight="regular" aria-hidden />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    sarkarshubhdeep
                  </span>
                </a>
              </LinkCard>
            ) : i === emailCardPosition ? (
              <LinkCard key={`cell-${i}`} staggerIndex={i}>
                <a
                  href="mailto:sarkarshubhdeep2@email.com"
                  className="flex h-full w-full flex-col justify-between font-mono"
                >
                  <div className="flex w-full justify-between">
                    Email
                    <ArrowUpRight size={20} weight="regular" aria-hidden />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    sarkarshubhdeep2@email.com
                  </span>
                </a>
              </LinkCard>
            ) : i === resumeCardPosition ? (
              <LinkCard key={`cell-${i}`} staggerIndex={i}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full justify-between font-mono"
                >
                  Resume
                  <ArrowUpRight size={20} weight="regular" aria-hidden />
                </a>
              </LinkCard>
            ) : i === projectCardPosition ? (
              <ProjectCard
                key={`cell-${i}`}
                staggerIndex={i}
                projectID={0}
                title="WatchTower"
                description="Local and privacy-focusd work tracking tool. Inspired by ActivityWatch."
              />
            ) : i === project1CardPosition ? (
              <ProjectCard
                key={`cell-${i}`}
                staggerIndex={i}
                projectID={1}
                title="Nudge"
                description="A simple tool that lives on your status bar and lets you send quick messages to your friends."
              />
            ) : i === project2CardPosition ? (
              <ProjectCard
                key={`cell-${i}`}
                staggerIndex={i}
                projectID={2}
                title="Gitflow"
                description="IDE extension that let's you view your git history and commit messages in graph format."
              />
            ) : (
              <DynamicCard
                key={`cell-${i}`}
                staggerIndex={i}
                enablePressEffect={false}
              >
                <span
                  className="absolute top-2 left-2 font-mono text-sm text-muted-foreground/70"
                  aria-hidden
                >
                  {i}
                </span>
              </DynamicCard>
            )
          )}
        </main>
        <SignatureLetters />
      </div>
    </>
  )
}
