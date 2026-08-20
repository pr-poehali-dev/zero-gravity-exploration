import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollToTop"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { projects } from "../data/projectsData"

export default function AllProjects() {
  const [galleryProjectId, setGalleryProjectId] = useState<number | null>(null)
  const activeProject = projects.find((p) => p.id === galleryProjectId)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад на главную
          </Link>

          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Наши работы</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-balance">
            Все проекты
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            Реализованные объекты благоустройства: жилые комплексы, парки и общественные пространства.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                onClick={() => project.gallery && setGalleryProjectId(project.id)}
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">
                      {project.title}
                    </h3>
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
      </section>

      <Dialog open={!!galleryProjectId} onOpenChange={(open) => !open && setGalleryProjectId(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-medium">{activeProject?.title}</DialogTitle>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {activeProject?.gallery?.map((item, i) => (
              <div key={i} className="overflow-hidden aspect-[4/3]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
