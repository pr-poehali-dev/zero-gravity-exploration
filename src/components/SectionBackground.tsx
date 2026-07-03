import { useEffect, useState } from "react"

interface SectionBackgroundProps {
  images: string[]
  overlayClassName?: string
  intervalMs?: number
  imageOpacity?: number
}

export function SectionBackground({
  images,
  overlayClassName = "bg-white/90",
  intervalMs = 6000,
  imageOpacity = 1,
}: SectionBackgroundProps) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [images.length, intervalMs])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: activeImage === index ? imageOpacity : 0 }}
        />
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}
