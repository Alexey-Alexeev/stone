import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: 'Камень "Люкс" Д-60',
    image: "/luxury-decorative-stone-D-60.png",
    description: "Премиальный декоративный камень для ландшафтного дизайна",
    inStock: true,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
  {
    name: 'Камень "Люкс" для Благоустройства',
    image: "/premium-landscaping-decorative-stone-natural.png",
    description: "Профессиональный камень для благоустройства территории",
    inStock: true,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
  {
    name: 'Камень "Люкс" Д-90',
    image: "/decorative-stone-d90-landscape.png",
    description: "Универсальный декоративный камень для различных проектов",
    inStock: true,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
  {
    name: "Декоративная сфера Д-30",
    image: "/decorative-stone-sphere.png",
    description: "Элегантная каменная сфера для украшения сада",
    inStock: true,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
  {
    name: "Декоративная сфера Д-35",
    image: "/decorative-stone-sphere.png",
    description: "Стильная каменная сфера среднего размера",
    inStock: true,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
  {
    name: "Декоративная сфера Д-31",
    image: "/decorative-stone-sphere-garden.png",
    description: "Изысканная каменная сфера для ландшафта",
    inStock: false,
    ozonUrl: "https://www.ozon.ru/",
    wildberriesUrl: "https://www.wildberries.ru/",
  },
]

export function ProductCatalog() {
  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Каталог готовой продукции</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Высококачественные декоративные камни и элементы для создания уникального ландшафта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="relative aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      Нет в наличии
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3 flex-1">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardHeader>

              <CardContent className="mt-auto">
                {product.inStock ? (
                  <div className="space-y-4">
                    <p className="text-sm text-center text-muted-foreground font-medium">Купить на маркетплейсах:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md group/btn relative overflow-hidden"
                      >
                        <a
                          href={product.ozonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 relative z-10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          <img
                            src="/images/ozon-logo.svg"
                            alt="Ozon"
                            className="w-8 h-4 object-contain filter brightness-0 invert"
                          />
                          <span className="font-semibold text-sm">Ozon</span>
                        </a>
                      </Button>

                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md group/btn relative overflow-hidden"
                      >
                        <a
                          href={product.wildberriesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 relative z-10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          <img
                            src="/images/wildberries-logo.svg"
                            alt="Wildberries"
                            className="w-6 h-6 object-contain"
                          />
                          <span className="font-semibold text-sm">WB</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button className="w-full" disabled variant="secondary">
                    Уведомить о поступлении
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  )
}
