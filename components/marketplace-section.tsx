"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Truck, Shield } from "lucide-react"

export function MarketplaceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Покупайте на популярных маркетплейсах
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наша продукция доступна на ведущих торговых площадках России с быстрой доставкой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ozon Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">O</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Ozon</h3>
                    <p className="text-muted-foreground">Официальный магазин</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm">Быстрая доставка от 1 дня</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Гарантия качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Более 1000 положительных отзывов</span>
                </div>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("https://www.ozon.ru/", "_blank")}
              >
                Перейти в магазин на Ozon
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Wildberries Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">W</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Wildberries</h3>
                    <p className="text-muted-foreground">Проверенный продавец</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm">Доставка в пункты выдачи</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Возврат в течение 14 дней</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Более 800 положительных отзывов</span>
                </div>
              </div>

              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://www.wildberries.ru/", "_blank")}
              >
                Перейти в магазин на WB
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Преимущества покупки на маркетплейсах</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Защита покупателя</h4>
              <p className="text-sm text-muted-foreground">Гарантия возврата средств</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-sm text-muted-foreground">От 1 дня по всей России</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Отзывы покупателей</h4>
              <p className="text-sm text-muted-foreground">Реальные отзывы и фото</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Удобная оплата</h4>
              <p className="text-sm text-muted-foreground">Любые способы оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
