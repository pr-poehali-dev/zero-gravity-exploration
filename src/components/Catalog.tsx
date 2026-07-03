import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const catalogGroups = [
  {
    title: "Скамейки",
    description: "Уличная мебель для парков, скверов и придомовых территорий",
    items: [
      {
        name: "Скамья классическая",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fb4688d8-8e52-45a2-9cda-5c13bc98e814.jpg",
      },
      {
        name: "Скамья дизайнерская изогнутая",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/91e1003d-493c-4cb6-ad01-0a61f8a1f369.jpg",
      },
    ],
  },
  {
    title: "Детские и спортивные площадки",
    description: "Игровые и тренировочные комплексы для активного отдыха",
    items: [
      {
        name: "Детский игровой комплекс",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/87612971-a49c-4074-b01e-d9c2b9f8cccc.jpg",
      },
      {
        name: "Спортивная воркаут-зона",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/6559743c-db7a-476d-84b8-ba85914d52a2.jpg",
      },
      {
        name: "Детская площадка с канатной сеткой",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3f055736-12a5-4924-951f-9ade1c2e3b6e.jpg",
      },
    ],
  },
  {
    title: "Площадки для выгула животных",
    description: "Огороженные зоны с препятствиями для дрессировки и прогулок",
    items: [
      {
        name: "Площадка для выгула с ограждением",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/60c36c21-0dad-474e-a08c-1df671f8b506.jpg",
      },
      {
        name: "Комплекс препятствий для собак",
        image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d21fdf67-4a22-4a16-875d-ff99bb338775.jpg",
      },
    ],
  },
]

export function Catalog() {
  const [visibleGroups, setVisibleGroups] = useState<number[]>([])
  const groupRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleGroups((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15 },
    )

    groupRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="catalog" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Каталог продукции</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance">
            Малые <HighlightedText>архитектурные формы</HighlightedText>
          </h2>
        </div>

        <div className="space-y-20">
          {catalogGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              ref={(el) => {
                groupRefs.current[groupIndex] = el
              }}
              data-index={groupIndex}
              className={`transition-all duration-700 ${
                visibleGroups.includes(groupIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{group.title}</h3>
                <span className="text-muted-foreground text-sm hidden md:block">{group.description}</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="font-medium group-hover:text-[rgb(251,146,60)] transition-colors">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
