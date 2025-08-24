"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Анна Петрова",
    rating: 5,
    text: "Заказывали декоративный камень для дачи. Качество превосходное, укладка выполнена профессионально. Участок преобразился до неузнаваемости!",
    image: "/happy-customer-woman.png",
  },
  {
    name: "Михаил Сидоров",
    rating: 5,
    text: "Сотрудничаем уже второй год. Всегда качественные материалы, соблюдение сроков, разумные цены. Рекомендую всем знакомым.",
    image: "/satisfied-male-customer.png",
  },
  {
    name: "Елена Козлова",
    rating: 5,
    text: "Делали дорожки из декоративного камня. Работа выполнена быстро и аккуратно. Через год все выглядит как новое. Спасибо за профессионализм!",
    image: "/happy-female-client.png",
  },
  {
    name: "Дмитрий Волков",
    rating: 5,
    text: "Заказывал камень через Ozon. Доставка быстрая, упаковка надежная. Качество материала отличное, точно как на фотографиях.",
    image: "/satisfied-customer-man.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Отзывы наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 500 довольных клиентов доверили нам создание своего идеального ландшафта
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Customer Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/30 mb-4 mx-auto md:mx-0" />

                    {/* Rating */}
                    <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonials[currentIndex].text}"</p>

                    {/* Customer Info */}
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Лет опыта</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Выполненных проектов</p>
          </div>
        </div>
      </div>
    </section>
  )
}
