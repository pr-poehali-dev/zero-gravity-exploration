import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { SectionBackground } from "./SectionBackground"

const backgroundImages = [
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/b5c130e6-78d3-4358-94c3-97c6d515ea0f.jpg",
  "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d6d57f2f-d5fe-4ea7-a93c-d1f6ff5d48ed.jpg",
]

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 text-primary-foreground overflow-hidden">
      <SectionBackground images={backgroundImages} overlayClassName="bg-foreground/95" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-6">Контакты</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance">
            Обсудим ваш проект
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - map & contacts */}
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-8">
              <iframe
                title="Карта Про-МАФ"
                src="https://yandex.ru/map-widget/v1/?ll=37.442%2C55.615&z=15&text=Бизнес-парк%20Румянцево"
                className="w-full h-full border-0 grayscale"
                loading="lazy"
              />
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-orange-200 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-primary-foreground/80">
                  Бизнес-парк «Румянцево», Москва, Киевское шоссе, 22-й км
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-200 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+79633003033" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +7 (963) 300-30-33
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-200 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@pro-maf.ru" className="text-primary-foreground/80 hover:text-white transition-colors">
                  info@pro-maf.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Right - form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-orange-200/20 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-orange-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium mb-2">Спасибо за заявку!</h3>
                <p className="text-primary-foreground/70 max-w-sm">
                  Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border border-primary-foreground/20 px-5 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange-200 transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder="Телефон"
                  className="w-full bg-transparent border border-primary-foreground/20 px-5 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange-200 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className="w-full bg-transparent border border-primary-foreground/20 px-5 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange-200 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Сообщение"
                  className="w-full bg-transparent border border-primary-foreground/20 px-5 py-4 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-orange-200 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-orange-200 transition-colors duration-300"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}