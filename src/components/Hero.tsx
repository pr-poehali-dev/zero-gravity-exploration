import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

const backgroundImages = [
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d6d57f2f-d5fe-4ea7-a93c-d1f6ff5d48ed.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/87612971-a49c-4074-b01e-d9c2b9f8cccc.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/191f560d-c6b2-4c52-a193-d7fea7478ec9.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/4f3b5065-e560-42ae-8c8d-fda14a8ca4d2.jpg",
]

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const accumulatedScrollRef = useRef(0)
  const touchStartY = useRef<number>(0)
  const lastTouchY = useRef<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const applyTransform = (progress: number) => {
    if (contentRef.current) {
      const translateY = progress * 200
      const rotationX = progress * 45
      const scale = 1 - progress * 0.3
      contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete && e.deltaY > 0) {
        e.preventDefault()
        accumulatedScrollRef.current = 700
        setAnimationProgress(1)
        setAnimationComplete(true)
        applyTransform(1)
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()
        accumulatedScrollRef.current = 0
        setAnimationProgress(0)
        setAnimationComplete(false)
        applyTransform(0)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      lastTouchY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = e.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete && deltaY > 10) {
        e.preventDefault()
        accumulatedScrollRef.current = 700
        setAnimationProgress(1)
        setAnimationComplete(true)
        applyTransform(1)
      } else if (atTopOfPage && animationComplete && deltaY < -10) {
        e.preventDefault()
        accumulatedScrollRef.current = 0
        setAnimationProgress(0)
        setAnimationComplete(false)
        applyTransform(0)
      }

      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Малые архитектурные формы Про-МАФ"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: activeImage === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0 transition-transform duration-700 ease-in-out"
        style={{
          willChange: "transform",
          transform: "translateY(0px)",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-center text-orange-200 mb-6">{"Строительство · Проектирование · Инжиниринг"}</p>

          <h1
            ref={titleRef}
            className="text-6xl font-medium text-balance text-center text-white mb-6 tracking-tight leading-[0.95] lg:text-8xl"
          >
            {"Строим будущее"}
            <br />
            <span className="text-orange-200">{"вместе"}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl mx-auto mb-10">
            Проектирование, строительство и инжиниринг под ключ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 text-sm tracking-wide hover:bg-[rgb(251,146,60)] hover:text-white transition-colors duration-300"
            >
              Наши проекты
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-foreground transition-colors duration-300"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      )}
    </section>
  )
}