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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMWR2L9V');
        `}} />
        {/* End Google Tag Manager */}
        {/* SEO Meta Tags */}
        <meta name="description" content="Psicóloga CRP 05/47572 - Atendimento 100% online com sigilo e flexibilidade" />
        <meta name="keywords" content="Psicóloga, Psicologia, Terapia Online, Saúde Mental, Mariana Viana, CRP 05/47572, RH, Desenvolvimento Humano, Alta Performance, Equilíbrio Emocional" />
        <meta property="og:title" content="Mariana Viana | Psicóloga" />
        <meta property="og:description" content="Psicóloga CRP 05/47572 - Atendimento 100% online com sigilo e flexibilidade" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/mari1.jpg" />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mariana Viana | Psicóloga" />
        <meta name="twitter:description" content="Psicóloga CRP 05/47572 - Atendimento 100% online com sigilo e flexibilidade" />
        <meta name="twitter:image" content="/mari1.jpg" />
      </head>
      <body className={`${playfair.variable} ${openSans.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMWR2L9V" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
