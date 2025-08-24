"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToFooter = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">К</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-foreground">Камни</h1>
              <p className="text-xs text-muted-foreground">Декоративный камень</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">
              Каталог
            </a>
            <button onClick={scrollToFooter} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          {/* Social Media Section */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.ozon.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <Image src="/images/ozon-logo.svg" alt="Ozon" width={20} height={12} className="w-5 h-3" />
                <span className="text-sm whitespace-nowrap">Ozon</span>
              </a>
              <a
                href="https://www.wildberries.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <Image
                  src="/images/wildberries-logo.svg"
                  alt="Wildberries"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-sm whitespace-nowrap">Wildberries</span>
              </a>
              <a
                href="https://t.me/artem_sk_red"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <Image src="/images/telegram-logo.svg" alt="Telegram" width={16} height={16} className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">Telegram</span>
              </a>
              <a
                href="https://vk.com/id14238571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <Image src="/images/vk-logo.svg" alt="VK" width={16} height={16} className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">VK</span>
              </a>
            </div>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <button
                onClick={scrollToFooter}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="https://www.ozon.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Image src="/images/ozon-logo.svg" alt="Ozon" width={20} height={12} className="w-5 h-3" />
                  <span>Ozon</span>
                </a>
                <a
                  href="https://www.wildberries.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Image
                    src="/images/wildberries-logo.svg"
                    alt="Wildberries"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Wildberries</span>
                </a>
                <a
                  href="https://t.me/artem_sk_red"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Image src="/images/telegram-logo.svg" alt="Telegram" width={16} height={16} className="w-4 h-4" />
                  <span>Telegram: @artem_sk_red</span>
                </a>
                <a
                  href="https://vk.com/id14238571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Image src="/images/vk-logo.svg" alt="VK" width={16} height={16} className="w-4 h-4" />
                  <span>VK</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
