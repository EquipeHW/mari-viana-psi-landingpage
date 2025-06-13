import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Open_Sans, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Usando Playfair Display como substituto para Versailles A até que a fonte personalizada seja fornecida
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// Open Sans está na lista de fontes da identidade visual
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Mariana Viana | Psicóloga",
  description: "Psicóloga CRP 05/47572 - Atendimento 100% online com sigilo e flexibilidade",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${playfair.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
