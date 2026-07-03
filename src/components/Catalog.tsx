import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { HighlightedText } from "./HighlightedText"
import { catalogGroups } from "../data/catalogData"

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
              key={group.slug}
              ref={(el) => {
                groupRefs.current[groupIndex] = el
              }}
              data-index={groupIndex}
              className={`transition-all duration-700 ${
                visibleGroups.includes(groupIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4 mb-8">
                <Link to={`/catalog/${group.slug}`} className="group inline-flex items-baseline gap-3">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-[rgb(251,146,60)] transition-colors">
                    {group.title}
                  </h3>
                  <span className="text-sm text-muted-foreground group-hover:text-[rgb(251,146,60)] transition-colors">
                    Смотреть все →
                  </span>
                </Link>
                <span className="text-muted-foreground text-sm hidden md:block">{group.description}</span>
              </div>

              <Link to={`/catalog/${group.slug}`} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.slice(0, 3).map((item) => (
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
