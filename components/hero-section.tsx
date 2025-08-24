import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/landscaped-garden.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Более 500 довольных клиентов</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Декоративный камень для <span className="text-secondary">идеального</span> ландшафта
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Профессиональное благоустройство территории с использованием натурального и искусственного камня.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Посмотреть каталог
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-12 text-center px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-2">Продажа на маркетплейсах</h3>
              <p className="text-white/80">Ozon и Wildberries - удобная покупка</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-2">Довольные клиенты</h3>
              <p className="text-white/80">Более 500 положительных отзывов</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-2">Доступные цены</h3>
              <p className="text-white/80">Лучшие цены на качественный камень</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
