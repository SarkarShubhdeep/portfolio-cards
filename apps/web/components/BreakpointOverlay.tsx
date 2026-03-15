"use client"

/**
 * Overlay that draws vertical lines at Tailwind's default breakpoints with labels.
 * Toggle with BREAKPOINT_OVERLAY env or remove this component when done debugging.
 */

const TAILWIND_BREAKPOINTS = [
  { name: "sm", px: 640, color: "#ef4444" },   // red
  { name: "md", px: 768, color: "#f97316" },   // orange
  { name: "lg", px: 1024, color: "#eab308" }, // yellow
  { name: "xl", px: 1280, color: "#22c55e" }, // green
  { name: "2xl", px: 1536, color: "#3b82f6" }, // blue
] as const

export function BreakpointOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-9999"
      aria-hidden
    >
      {TAILWIND_BREAKPOINTS.map(({ name, px, color }) => (
        <div
          key={name}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${px}px`,
            backgroundColor: color,
            boxShadow: `0 0 0 1px ${color}`,
          }}
        >
          <span
            className="absolute left-1/2 top-1 rounded px-1.5 py-0.5 text-[10px] font-mono font-medium text-white whitespace-nowrap"
            style={{
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
          >
            {name} ({px}px)
          </span>
        </div>
      ))}
    </div>
  )
}
