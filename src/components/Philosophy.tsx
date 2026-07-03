import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const stats = [
  { value: "50+", label: "завершённых объектов" },
  { value: "200+", label: "сотрудников в штате" },
  { value: "15", label: "лет на рынке" },
  { value: "24/7", label: "поддержка объектов" },
]

export function Philosophy() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left column - Image */}
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/095f6f53-aede-44a4-85c1-11b894b214b7.jpg"
              alt="Производство и строительство Про-МАФ"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Right column - Text */}
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О компании</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
              Надёжный партнёр в <HighlightedText>строительстве</HighlightedText>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Компания «Про-МАФ» более 15 лет реализует проекты полного цикла — от концепции и проектирования до
              строительства и ввода в эксплуатацию. Мы объединяем инженерный опыт, современные технологии и внимание к
              деталям, чтобы создавать объекты, которые служат десятилетиями.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-medium tracking-tight mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-[rgb(251,146,60)] hover:border-[rgb(251,146,60)] transition-colors"
            >
              Подробнее о компании
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
