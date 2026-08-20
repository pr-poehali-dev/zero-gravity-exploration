import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SectionBackground } from "./SectionBackground"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { projects } from "@/data/projectsData"

const backgroundImages = [
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/60c36c21-0dad-474e-a08c-1df671f8b506.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/6559743c-db7a-476d-84b8-ba85914d52a2.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/1debfddf-768e-462d-8155-f3cadfdbf428.jpg",
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<Map<number, HTMLDivElement | null>>(new Map())
  const [galleryProjectId, setGalleryProjectId] = useState<number | null>(null)

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

  const activeProject = projects.find((p) => p.id === galleryProjectId)

  return (
    <section id="projects" className="relative py-32 md:py-29 overflow-hidden">
      <SectionBackground images={backgroundImages} overlayClassName="bg-secondary/90" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="group cursor-pointer scroll-mt-32"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => project.gallery && setGalleryProjectId(project.id)}
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
      </div>

      <Dialog open={!!galleryProjectId} onOpenChange={(open) => !open && setGalleryProjectId(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-medium">{activeProject?.title}</DialogTitle>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {activeProject?.gallery?.map((item, i) => (
              <div key={i} className="overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}