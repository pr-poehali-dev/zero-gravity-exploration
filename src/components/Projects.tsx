import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { SectionBackground } from "./SectionBackground"

const backgroundImages = [
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/60c36c21-0dad-474e-a08c-1df671f8b506.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/6559743c-db7a-476d-84b8-ba85914d52a2.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/1debfddf-768e-462d-8155-f3cadfdbf428.jpg",
]

const projects = [
  {
    id: 1,
    title: "ЖК «Горизонт»",
    category: "Жилой комплекс",
    location: "Москва",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/08b6b813-0a27-481a-b147-cee432fe98e7.jpg",
  },
  {
    id: 2,
    title: "Городской парк «Румянцево»",
    category: "Городской парк",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/15f6f590-fabe-47c2-85c4-8d19be147b0c.jpg",
  },
  {
    id: 3,
    title: "Спортивный кластер «Динамо»",
    category: "Спортивное сооружение",
    location: "Московская область",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3c9eebab-c89b-4d23-9fff-238af54f9a00.jpg",
  },
  {
    id: 4,
    title: "Общественное пространство «Сити»",
    category: "Общественная зона",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/095f6f53-aede-44a4-85c1-11b894b214b7.jpg",
  },
]

const riverParkProjects = [
  {
    id: 5,
    title: "Эксплуатируемая кровля",
    category: "Озеленение кровли",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/dec23ceb-fbd5-4759-a2a9-863034047d3a.png",
  },
  {
    id: 6,
    title: "Монтаж навеса на террасе",
    category: "Малые архитектурные формы",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9ccf7db6-7bdb-43fb-830e-eaf52643a65f.png",
  },
  {
    id: 7,
    title: "Панорамный навес-пергола",
    category: "Малые архитектурные формы",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/c1880911-b13c-46f4-b95a-1fd6f670d453.png",
  },
  {
    id: 8,
    title: "Беседка-купол на кровле",
    category: "Малые архитектурные формы",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/98c14dcc-e0be-4a76-9e35-de8dc151e1a0.png",
  },
  {
    id: 10,
    title: "Монтаж каркаса навеса",
    category: "Малые архитектурные формы",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5dbed3c4-9442-4579-91a6-9438c8cba558.png",
  },
  {
    id: 11,
    title: "Беседка-купол на фоне города",
    category: "Малые архитектурные формы",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/35428593-9d40-4755-a696-d9e85bf75991.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<Map<number, HTMLDivElement | null>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number((entry.target as HTMLDivElement).dataset.id)
            setRevealedImages((prev) => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-32 md:py-29 overflow-hidden">
      <SectionBackground images={backgroundImages} overlayClassName="bg-secondary/90" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                ref={(el) => imageRefs.current.set(project.id, el)}
                data-id={project.id}
                className="relative overflow-hidden aspect-[4/3] mb-6"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Жилой комплекс · Москва-Сити</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">River Park</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {riverParkProjects.map((project) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  ref={(el) => imageRefs.current.set(project.id, el)}
                  data-id={project.id}
                  className="relative overflow-hidden aspect-[4/3] mb-6"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-primary origin-top"
                    style={{
                      transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.category}</p>
                  </div>
                  <span className="text-muted-foreground/60 text-sm">{project.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}