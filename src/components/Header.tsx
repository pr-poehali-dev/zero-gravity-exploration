import { useState, useEffect, MouseEvent } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"
import { catalogGroups } from "../data/catalogData"

const navItems = [
  { label: "Главная", id: "hero" },
  { label: "Каталог", id: "catalog" },
  { label: "Услуги", id: "services" },
  { label: "Наши проекты", id: "projects" },
  { label: "Контакты", id: "contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const goToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    closeMobileMenu()

    if (location.pathname === "/") {
      const el = document.getElementById(id)
      if (id === "hero" || !el) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        scrolled || mobileMenuOpen
          ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
        <a
          href="/"
          className="flex items-center gap-2 group"
          onClick={(e) => goToSection(e, "hero")}
        >
          <span className="text-xl font-semibold tracking-tight text-white" style={{ fontFamily: "'Rubik', sans-serif" }}>
            Про-МАФ
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navItems.map((item) =>
            item.id === "catalog" ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setCatalogOpen(true)}
                onMouseLeave={() => setCatalogOpen(false)}
              >
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => goToSection(e, item.id)}
                  className="flex items-center gap-1 hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300 text-white"
                >
                  {item.label}
                  <ChevronDown
                    className={cn("w-3.5 h-3.5 transition-transform duration-300", catalogOpen && "rotate-180")}
                    strokeWidth={1.5}
                  />
                </a>

                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
                    catalogOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
                  )}
                >
                  <ul className="bg-primary rounded-xl shadow-xl overflow-hidden min-w-[240px] py-2">
                    {catalogGroups.map((group) => (
                      <li key={group.slug}>
                        <Link
                          to={`/catalog/${group.slug}`}
                          onClick={() => setCatalogOpen(false)}
                          className="block px-5 py-3 text-white hover:text-[rgb(251,146,60)] hover:bg-white/5 transition-colors duration-200 whitespace-nowrap"
                        >
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => goToSection(e, item.id)}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300 text-white"
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+74951234567" className="text-sm text-white font-medium whitespace-nowrap">
            +7 (495) 123-45-67
          </a>
        </div>

        <button
          className="md:hidden z-50 transition-colors duration-300 text-white"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[80vh] overflow-y-auto opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {navItems.map((item) =>
              item.id === "catalog" ? (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <a
                      href={`/#${item.id}`}
                      className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block"
                      onClick={(e) => goToSection(e, item.id)}
                    >
                      {item.label}
                    </a>
                    <button
                      aria-label="Показать категории каталога"
                      onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                      className="text-white p-2"
                    >
                      <ChevronDown
                        className={cn("w-6 h-6 transition-transform duration-300", mobileCatalogOpen && "rotate-180")}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>

                  <ul
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-4 pl-4",
                      mobileCatalogOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0",
                    )}
                  >
                    {catalogGroups.map((group) => (
                      <li key={group.slug}>
                        <Link
                          to={`/catalog/${group.slug}`}
                          onClick={closeMobileMenu}
                          className="text-white/80 hover:text-[rgb(251,146,60)] transition-colors duration-300 text-xl font-light block"
                        >
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={`/#${item.id}`}
                    className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block"
                    onClick={(e) => goToSection(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <a
            href="tel:+74951234567"
            className="block text-white text-lg font-medium mb-4"
            onClick={closeMobileMenu}
          >
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
    </header>
  )
}