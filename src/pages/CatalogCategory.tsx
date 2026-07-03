import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollToTop"
import { catalogGroups } from "../data/catalogData"

export default function CatalogCategory() {
  const { slug } = useParams<{ slug: string }>()
  const group = catalogGroups.find((g) => g.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [slug])

  if (!group) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-medium mb-4">Категория не найдена</p>
          <Link to="/" className="text-[rgb(251,146,60)] hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            to="/#catalog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад в каталог
          </Link>

          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Каталог продукции</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-balance">
            {group.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">{group.description}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.items.map((item) => (
              <div key={item.name} className="group">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}