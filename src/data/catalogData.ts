export interface CatalogItem {
  name: string
  image: string
}

export interface CatalogGroup {
  slug: string
  title: string
  description: string
  items: CatalogItem[]
}

export const catalogGroups: CatalogGroup[] = [
  {
    slug: "benches",
    title: "Скамейки",
    description: "Уличная мебель для парков, скверов и придомовых территорий",
    items: [
      { name: "Скамья классическая", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fb4688d8-8e52-45a2-9cda-5c13bc98e814.jpg" },
      { name: "Скамья на бетоне", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/91e1003d-493c-4cb6-ad01-0a61f8a1f369.jpg" },
      { name: "Скамья на металлических опорах", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/42a73530-38b1-45c2-aeab-9743ebeb5134.jpg" },
      { name: "Скамья бетонная с деревянным сиденьем", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3374ffde-6ac3-4714-92a5-bde6964bdaeb.jpg" },
      { name: "Скамья с подлокотниками", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/725a5222-fd40-4ffd-a466-8f8424e17ecd.jpg" },
      { name: "Скамья каменная", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/45f5b608-084b-4007-a08b-727ceaf04979.jpg" },
      { name: "Скамья с кашпо для растений", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/29e2321e-0d84-4822-8c93-402576b6d288.jpg" },
      { name: "Скамья круговая вокруг дерева", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9f11dc39-9a5c-436f-8366-9d3e32c19f55.jpg" },
      { name: "Смарт-скамья с солнечной панелью", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/91643a4c-ef2b-4ee1-80ed-4f8c6ee83144.jpg" },
      { name: "Скамья детская", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/dbaf2b67-ad8a-4361-b79b-01b65ce523a6.jpg" },
    ],
  },
  {
    slug: "playgrounds",
    title: "Детские и спортивные площадки",
    description: "Игровые и тренировочные комплексы для активного отдыха",
    items: [
      { name: "Детский игровой комплекс", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/87612971-a49c-4074-b01e-d9c2b9f8cccc.jpg" },
      { name: "Спортивная воркаут-зона", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/6559743c-db7a-476d-84b8-ba85914d52a2.jpg" },
      { name: "Детская площадка с канатной сеткой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3f055736-12a5-4924-951f-9ade1c2e3b6e.jpg" },
      { name: "Игровая башня с горкой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9254bc9c-eac9-4b75-b64c-aa7eb0d3effd.jpg" },
      { name: "Песочница", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/680ce095-8fe1-44da-8dfb-b50dcaa45a4d.jpg" },
      { name: "Комплекс качелей", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/ea29ca58-4de7-4896-bc1f-de8ed7a5d5f7.jpg" },
      { name: "Карусель", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/84f2587d-51b1-4d64-b0da-c6eff537d699.jpg" },
      { name: "Баскетбольная площадка", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/e9f18f55-e605-463b-8423-8a89c7107445.jpg" },
      { name: "Турники и брусья", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/e91cb49c-b8d0-4888-966d-0d26c7d65cd1.jpg" },
      { name: "Качели-балансир", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/cf12bb37-0697-4b53-b801-670df4d437cd.jpg" },
    ],
  },
  {
    slug: "dog-parks",
    title: "Площадки для выгула животных",
    description: "Огороженные зоны с препятствиями для дрессировки и прогулок",
    items: [
      { name: "Площадка для выгула с ограждением", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/60c36c21-0dad-474e-a08c-1df671f8b506.jpg" },
      { name: "Комплекс препятствий для собак", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d21fdf67-4a22-4a16-875d-ff99bb338775.jpg" },
      { name: "Тоннель для аджилити", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/5f57c004-d5b5-4a32-a9cc-4ae7e2bdda97.jpg" },
      { name: "Барьер для прыжков", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/5c65e1f8-bdcd-4591-9617-4a4c41278dd4.jpg" },
      { name: "Балансировочное бревно", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/79f914e0-8d9e-4a9e-b21e-c419969cacb4.jpg" },
      { name: "Ограждение с калиткой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/feaa7fe8-da86-4bd5-867f-9374976aec26.jpg" },
      { name: "Поилка для животных", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d1fbcb40-6ca9-4535-b039-48e6842fcf87.jpg" },
      { name: "Диспенсер для пакетов", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/ded44061-26b2-4917-b074-ba088dd36ea2.jpg" },
      { name: "Слаломные стойки", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9e9ca431-1405-4960-b925-e5a0c485ed62.jpg" },
      { name: "Тумба-подиум для дрессировки", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/f14733f0-a98f-499c-8175-83e0f057fd73.jpg" },
    ],
  },
  {
    slug: "art-concrete",
    title: "Арт-бетон",
    description: "Декоративные изделия из бетона для оформления городской среды",
    items: [
      { name: "Кашпо из архитектурного бетона", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fdd6ce4f-d8ee-471f-8988-376df1ed3065.jpg" },
      { name: "Декоративный бетонный столб-ограничитель", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/21b4b733-0f1c-4a0e-b4f9-d95b8a4f9f8c.jpg" },
      { name: "Подпорная стена с рельефным узором", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/c159ff37-a2de-4c7a-be07-f3cfcb1be72f.jpg" },
      { name: "Бетонный бордюр для клумбы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/f3d413b6-371a-4bfe-bf1e-44a7d5d58360.jpg" },
      { name: "Декоративная бетонная колонна", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/a626e607-56de-4706-85b9-7323b2fc512b.jpg" },
    ],
  },
  {
    slug: "pergolas",
    title: "Перголы",
    description: "Конструкции для навесов и зон отдыха на открытом воздухе",
    items: [
      { name: "Деревянная пергола с вьющимися растениями", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/191f560d-c6b2-4c52-a193-d7fea7478ec9.jpg" },
      { name: "Металлическая пергола белая", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/524a95d9-883e-42d1-9bf8-946c5d9cdbaf.jpg" },
      { name: "Пергола со скамьёй", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/1debfddf-768e-462d-8155-f3cadfdbf428.jpg" },
      { name: "Пергола чёрная минималистичная", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/8af3d4f2-4d68-44c9-8ed7-10dbc224b92b.jpg" },
      { name: "Садовая беседка-пергола", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/4896b3f5-2dbc-4a1a-b3b9-c7432c256ac5.jpg" },
    ],
  },
  {
    slug: "urns",
    title: "Урны",
    description: "Уличные урны для благоустройства парков и общественных пространств",
    items: [
      { name: "Урна металлическая цилиндрическая", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/aaf5086b-aa19-48b3-ac1c-bbf3f6db69d2.jpg" },
      { name: "Урна бетонная с деревянными рейками", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/cebeabd2-b8ac-4e9e-8034-d294683149da.jpg" },
      { name: "Урна для раздельного сбора мусора", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/a0e51531-bc25-4bd6-bcbd-05e0be736e7a.jpg" },
      { name: "Урна на опоре с крышкой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/b77ffb84-694a-4874-96fa-b259fa340a68.jpg" },
      { name: "Урна с отделкой под камень", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3af3bd87-3020-4466-b6cf-3b2b6b46a01e.jpg" },
    ],
  },
  {
    slug: "fountains",
    title: "Фонтаны",
    description: "Архитектурные и декоративные фонтаны для общественных пространств",
    items: [
      { name: "Многоярусный каменный фонтан", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/4f3b5065-e560-42ae-8c8d-fda14a8ca4d2.jpg" },
      { name: "Сухой фонтан с водными струями", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/cda4528b-6dba-4a4e-b468-bef3b00616e5.jpg" },
      { name: "Настенный фонтан", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/c712bc27-84f8-47ea-bfdb-494286feffef.jpg" },
      { name: "Круглый фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/b5c130e6-78d3-4358-94c3-97c6d515ea0f.jpg" },
      { name: "Питьевой фонтанчик", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/8cdf253f-7ec4-4d8f-85b5-57af88d58c58.jpg" },
    ],
  },
]