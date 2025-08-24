"use client"

import { Button } from "@/components/ui/button"
import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">К</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Камни</h3>
                <p className="text-xs text-background/70">Декоративный камень</p>
              </div>
            </div>
            <p className="text-background/80 mb-6">
              Профессиональное благоустройство территории с использованием высококачественного декоративного камня.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Связаться с нами</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@kamni-design.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image src="/images/telegram-logo.svg" alt="Telegram" width={16} height={16} className="w-4 h-4" />
                <a
                  href="https://t.me/artem_sk_red"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Telegram: @artem_sk_red
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Image src="/images/vk-logo.svg" alt="VK" width={16} height={16} className="w-4 h-4" />
                <a
                  href="https://vk.com/id14238571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  VK
                </a>
              </div>
            </div>
          </div>

          {/* Marketplaces */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Покупайте на маркетплейсах</h4>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent border-background/30 text-background hover:bg-background/10"
                onClick={() => window.open("https://www.ozon.ru/", "_blank")}
              >
                <div className="w-6 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                Ozon
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent border-background/30 text-background hover:bg-background/10"
                onClick={() => window.open("https://www.wildberries.ru/", "_blank")}
              >
                <div className="w-6 h-6 bg-purple-600 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                Wildberries
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">©Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
