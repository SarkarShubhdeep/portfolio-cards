import { JetBrains_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Shubhdeep Sarkar's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", jetbrainsMono.variable)}
    >
      <body className={cn("font-mono overflow-hidden", jetbrainsMono.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
