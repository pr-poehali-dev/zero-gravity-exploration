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