import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { HighlightedText } from "./HighlightedText"
import { SectionBackground } from "./SectionBackground"
import { catalogGroups } from "../data/catalogData"

const backgroundImages = [
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fdd6ce4f-d8ee-471f-8988-376df1ed3065.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/191f560d-c6b2-4c52-a193-d7fea7478ec9.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/aaf5086b-aa19-48b3-ac1c-bbf3f6db69d2.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/4f3b5065-e560-42ae-8c8d-fda14a8ca4d2.jpg",
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
    <section id="catalog" className="relative py-24 md:py-32 overflow-hidden">
      <SectionBackground images={backgroundImages} overlayClassName="bg-secondary/90" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
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
              <div className="flex items-baseline justify-between gap-4 mb-4">
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

              <div className="flex flex-wrap gap-2 mb-8">
                {Array.from(new Set(group.items.map((item) => item.subcategory))).map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/catalog/${group.slug}?subcategory=${encodeURIComponent(subcategory)}`}
                    className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full bg-background/60 border border-border text-muted-foreground hover:border-[rgb(251,146,60)] hover:text-[rgb(251,146,60)] transition-colors"
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from(new Set(group.items.map((item) => item.subcategory)))
                  .slice(0, 3)
                  .map((subcategory) => group.items.find((item) => item.subcategory === subcategory)!)
                  .map((item) => (
                    <Link
                      key={item.name}
                      to={`/catalog/${group.slug}?subcategory=${encodeURIComponent(item.subcategory)}`}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">{item.subcategory}</p>
                      <p className="font-medium group-hover:text-[rgb(251,146,60)] transition-colors">{item.name}</p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}