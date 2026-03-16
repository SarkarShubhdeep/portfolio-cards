import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { GridCard } from "@/components/GridCard"
import { BreakpointOverlay } from "@/components/BreakpointOverlay"
import { SignatureLetters } from "@/components/SignatureLetters"

const LINKS = [
  {
    label: "Github",
    subtext: "/sarkarshubhdeep",
    href: "https://github.com/sarkarshubhdeep",
  },
  {
    label: "Email",
    subtext: "sarkarshubhdeepw2@gmail.com",
    href: "mailto:sarkarshubhdeep2@gmail.com",
  },
  { label: "Resume", subtext: "View my resume", href: "#" },
] as const

const PROJECTS = [
  {
    title: "WatchTower",
    description:
      "Local and privacy-focused app that helps you track your time and activity on your system. Inspired by ActivityWatch.",
  },
  {
    title: "GitFlow",
    description:
      "IDE extension that let's you view your git history and commit messages in graph format.",
  },
  {
    title: "Nudge",
    description:
      "A simple tool that lives on your status bar and lets you send quick messages to your friends.",
  },
] as const

export default function Page() {
  let staggerIndex = 0
  return (
    <>
      <BreakpointOverlay />
      <div className="relative h-svh w-full">
        <main className="grid h-full w-full grid-cols-3 grid-rows-5 gap-0 overflow-hidden bg-[#0a0a0a] font-mono lg:grid-cols-5">
          {/* Row 1 (lg only): 5 empty cards */}
          {Array.from({ length: 5 }).map((_, i) => (
            <GridCard
              key={`r1-${i}`}
              className="max-lg:hidden"
              staggerIndex={staggerIndex++}
            />
          ))}

          {/* Name+Bio: spans 2 rows below lg, 1 row at lg+ */}
          <GridCard
            className="row-span-2 justify-between lg:row-span-1"
            staggerIndex={staggerIndex++}
          >
            <span className="font-medium uppercase">Shubhdeep Sarkar</span>
            <p className="text-sm leading-relaxed text-foreground">
              I am a Full Stack Dev. Currently doing my internship at Medical
              Informatics Engineering.{" "}
            </p>
          </GridCard>

          {/* Links: auto-flow fills remaining slots in rows 1-2 (<lg) or row 2 (lg+) */}
          {LINKS.map(({ label, subtext, href }) => (
            <GridCard
              key={label}
              className="hover:bg-muted"
              staggerIndex={staggerIndex++}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex min-h-0 flex-1 cursor-pointer justify-between gap-1.5 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{label}</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {subtext}
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  weight="regular"
                  className="pointer-events-none shrink-0"
                  aria-hidden
                />
              </a>
            </GridCard>
          ))}
          <GridCard staggerIndex={staggerIndex++} />

          {/* Empty before projects (lg only) */}
          <GridCard className="max-lg:hidden" staggerIndex={staggerIndex++} />

          {/* Projects */}
          {PROJECTS.map(({ title, description }, index) => (
            <GridCard
              key={title}
              className="justify-between hover:bg-muted"
              staggerIndex={staggerIndex++}
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground uppercase">
                  Project {index + 1}
                </span>
                <span className="font-medium">{title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </GridCard>
          ))}

          {/* Empty after projects (lg only) */}
          <GridCard className="max-lg:hidden" staggerIndex={staggerIndex++} />

          {/* Row 4: 3 empties (+ 2 lg-only) */}
          {Array.from({ length: 3 }).map((_, i) => (
            <GridCard key={`r4-${i}`} staggerIndex={staggerIndex++} />
          ))}
          {Array.from({ length: 2 }).map((_, i) => (
            <GridCard
              key={`r4-lg-${i}`}
              className="max-lg:hidden"
              staggerIndex={staggerIndex++}
            />
          ))}

          {/* Row 5: 3 empties (+ 2 lg-only) — letters rendered by SignatureLetters overlay */}
          {Array.from({ length: 3 }).map((_, i) => (
            <GridCard key={`r5-${i}`} staggerIndex={staggerIndex++} />
          ))}
          {Array.from({ length: 2 }).map((_, i) => (
            <GridCard
              key={`r5-lg-${i}`}
              className="max-lg:hidden"
              staggerIndex={staggerIndex++}
            />
          ))}
        </main>
        <SignatureLetters />
      </div>
    </>
  )
}
