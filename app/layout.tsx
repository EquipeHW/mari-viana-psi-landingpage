import type React from "react"
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
  display: "swap",
})

export const metadata = {
  title: "Mariana Viana | Psicóloga",
  description: "Psicóloga especializada em transformação emocional, autoconhecimento e atendimento humanizado.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
