export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "'Rubik', sans-serif" }}>
                Про-МАФ
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Строительство, проектирование и инжиниринг под ключ. Реализуем объекты любой сложности — от жилых
              комплексов до общественных пространств.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm border border-border"
            >
              <input
                type="email"
                required
                placeholder="Подписка на новости"
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="bg-foreground text-primary-foreground px-5 text-sm hover:bg-[rgb(251,146,60)] transition-colors"
              >
                ОК
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Меню</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-foreground transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-foreground transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Наши проекты
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@pro-maf.ru" className="hover:text-foreground transition-colors">
                  info@pro-maf.ru
                </a>
              </li>
              <li>
                <a href="tel:+79633003033" className="hover:text-foreground transition-colors">
                  +7 (963) 300-30-33
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Про-МАФ. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}