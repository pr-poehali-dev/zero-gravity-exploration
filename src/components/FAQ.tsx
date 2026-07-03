import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Головной офис компании расположен в Москве, в бизнес-парке «Румянцево». Мы реализуем проекты в Москве, Московской области и других регионах России, обеспечивая полное сопровождение объекта на всех этапах.",
  },
  {
    question: "Выполняете ли вы проекты под ключ?",
    answer:
      "Да. «Про-МАФ» берёт на себя полный цикл работ: инженерные изыскания, проектирование, согласования, строительство, монтаж инженерных систем и ввод объекта в эксплуатацию. Заказчик получает готовый результат от одного подрядчика.",
  },
  {
    question: "Как рассчитывается стоимость строительства?",
    answer:
      "Стоимость зависит от типа объекта, объёма работ и сроков. После получения технического задания мы проводим оценку и готовим прозрачную смету с фиксацией ключевых показателей. Итоговое коммерческое предложение вы получаете бесплатно.",
  },
  {
    question: "Есть ли у компании необходимые лицензии?",
    answer:
      "Компания имеет все необходимые допуски СРО на проектирование и строительство, а также действующие сертификаты соответствия. Полный перечень документов предоставляется по запросу.",
  },
  {
    question: "Как контролируется качество и сроки?",
    answer:
      "На каждом объекте работает выделенный менеджер проекта и служба технического надзора. Мы используем календарно-сетевое планирование и регулярно отчитываемся заказчику о ходе работ с фотофиксацией.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку через форму на сайте или закажите обратный звонок. Наш специалист свяжется с вами, уточнит детали и предложит удобное время для встречи или выезда на объект.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}