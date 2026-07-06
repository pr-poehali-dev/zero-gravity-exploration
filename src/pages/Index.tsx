import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { Catalog } from "../components/Catalog"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollToTop"

export default function Index() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace("#", "")

    if (!id || id === "hero") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
      return
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" })
    }
  }, [location.hash])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <Expertise />
      <Projects />
      <FAQ />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </main>
  )
}