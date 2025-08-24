import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hammer, Palette, Truck, Settings } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Укладка декоративного камня",
    description: "Профессиональная укладка натурального и искусственного камня с соблюдением всех технологий.",
    features: ["Подготовка основания", "Качественная укладка", "Затирка швов", "Финишная обработка"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jO072QOSw124HQ99W9LpQKg5e20SX.png",
  },
  {
    icon: Palette,
    title: "Ландшафтный дизайн",
    description: "Создание уникальных ландшафтных композиций с использованием декоративного камня.",
    features: ["3D визуализация", "Индивидуальный проект", "Подбор материалов", "Авторский надзор"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jO072QOSw124HQ99W9LpQKg5e20SX.png",
  },
  {
    icon: Truck,
    title: "Доставка материалов",
    description: "Быстрая и надежная доставка декоративного камня по Москве и области.",
    features: ["Доставка за 1-2 дня", "Разгрузка на объекте", "Упаковка материалов", "Страхование груза"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jO072QOSw124HQ99W9LpQKg5e20SX.png",
  },
  {
    icon: Settings,
    title: "Техническое обслуживание",
    description: "Регулярное обслуживание и уход за каменными покрытиями для долговечности.",
    features: ["Очистка поверхности", "Обновление защиты", "Ремонт повреждений", "Консультации"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4jO072QOSw124HQ99W9LpQKg5e20SX.png",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг по благоустройству территории с использованием декоративного камня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-[4/3] relative group">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
