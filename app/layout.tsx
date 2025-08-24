import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Декоративный камень для ландшафтного дизайна | Профессиональное благоустройство",
  description:
    "Высококачественный декоративный камень для ландшафтного дизайна. Профессиональная укладка, широкий ассортимент. Доставка по всей России. Заказывайте на Ozon и Wildberries.",
  keywords: "декоративный камень, ландшафтный дизайн, благоустройство, природный камень, искусственный камень",
  generator: "Next.js",
  robots: "index, follow",
  openGraph: {
    title: "Декоративный камень для ландшафтного дизайна",
    description: "Профессиональное благоустройство с использованием высококачественного декоративного камня",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
