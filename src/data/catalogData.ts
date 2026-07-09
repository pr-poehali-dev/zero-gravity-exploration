export interface CatalogItem {
  name: string
  image: string
  subcategory: string
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
      { name: "Скамья классическая", subcategory: "Классические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fb4688d8-8e52-45a2-9cda-5c13bc98e814.jpg" },
      { name: "Скамья с подлокотниками", subcategory: "Классические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/725a5222-fd40-4ffd-a466-8f8424e17ecd.jpg" },
      { name: "Скамья с кашпо для растений", subcategory: "Классические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/29e2321e-0d84-4822-8c93-402576b6d288.jpg" },
      { name: "Скамья круговая вокруг дерева", subcategory: "Классические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9f11dc39-9a5c-436f-8366-9d3e32c19f55.jpg" },
      { name: "Скамья на бетоне", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/91e1003d-493c-4cb6-ad01-0a61f8a1f369.jpg" },
      { name: "Скамья бетонная с деревянным сиденьем", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3374ffde-6ac3-4714-92a5-bde6964bdaeb.jpg" },
      { name: "Скамья каменная", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/45f5b608-084b-4007-a08b-727ceaf04979.jpg" },
      { name: "Скамья дугообразная на бетонных опорах", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/666ef1db-1c04-4cb5-875e-347d46114111.jpg" },
      { name: "Скамья бетонная монолитная", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/a757f9c4-1269-4cd6-b272-38a762e2f0ee.png" },
      { name: "Скамья бетонная с кашпо для цветов", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9c286d61-91f4-4e08-9dfb-333c61402144.jpg" },
      { name: "Скамья на бетонных блоках с кашпо", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/d2b9a06a-d3ee-44ef-a325-4d74e2aa028e.jpg" },
      { name: "Скамья на бетонных опорах тёмных тонов", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5d3423a5-1be9-4a60-9673-e3bc95d21c83.jpg" },
      { name: "Скамья волнообразная бетонная с деревянной вставкой", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/4f32c56d-39ba-4e48-8f44-cd1cbf7ac68c.jpg" },
      { name: "Скамья на бетонных блоках вдоль подпорной стены", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/23022470-9b3a-4ef1-94ff-8bd58fcd3ded.jpg" },
      { name: "Скамья бетонная минималистичная", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/365529e8-6534-4f61-9d5d-e2e927ca0a96.jpg" },
      { name: "Скамья на металлических опорах", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/42a73530-38b1-45c2-aeab-9743ebeb5134.jpg" },
      { name: "Скамья изогнутая на металлических опорах", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/cc1ece42-717a-46d0-9849-2c61cde5aefa.jpg" },
      { name: "Скамья с высокой спинкой на металлическом каркасе", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/13b9ce8e-8d1d-4c58-9e99-52b0b02f19e1.jpg" },
      { name: "Скамья с изогнутой спинкой на металлической опоре", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/cc0a3747-aeec-448a-a0e7-d51c05b90c81.jpg" },
      { name: "Скамья стальная с литыми опорами", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/2ad39894-b51b-4881-acf5-6f0d1468805d.jpg" },
      { name: "Смарт-скамья с солнечной панелью", subcategory: "Специальные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/91643a4c-ef2b-4ee1-80ed-4f8c6ee83144.jpg" },
      { name: "Скамья детская", subcategory: "Специальные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/dbaf2b67-ad8a-4361-b79b-01b65ce523a6.jpg" },
      { name: "Скамья-шестигранник модульная", subcategory: "Специальные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/17bf8760-cbbf-42b3-8451-004a86c1fe86.jpg" },
      { name: "Скамья дизайнерская модульная", subcategory: "Специальные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5d36026a-c2ef-457e-8467-a96593ab1eff.png" },
    ],
  },
  {
    slug: "playgrounds",
    title: "Детские и спортивные площадки",
    description: "Игровые и тренировочные комплексы для активного отдыха",
    items: [
      { name: "Детский игровой комплекс", subcategory: "Игровые комплексы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/87612971-a49c-4074-b01e-d9c2b9f8cccc.jpg" },
      { name: "Детская площадка с канатной сеткой", subcategory: "Игровые комплексы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3f055736-12a5-4924-951f-9ade1c2e3b6e.jpg" },
      { name: "Игровая башня с горкой", subcategory: "Игровые комплексы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9254bc9c-eac9-4b75-b64c-aa7eb0d3effd.jpg" },
      { name: "Песочница", subcategory: "Игровые комплексы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/680ce095-8fe1-44da-8dfb-b50dcaa45a4d.jpg" },
      { name: "Спортивная воркаут-зона", subcategory: "Спортивные зоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/6559743c-db7a-476d-84b8-ba85914d52a2.jpg" },
      { name: "Баскетбольная площадка", subcategory: "Спортивные зоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/e9f18f55-e605-463b-8423-8a89c7107445.jpg" },
      { name: "Турники и брусья", subcategory: "Спортивные зоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/e91cb49c-b8d0-4888-966d-0d26c7d65cd1.jpg" },
      { name: "Комплекс качелей", subcategory: "Качели и карусели", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/ea29ca58-4de7-4896-bc1f-de8ed7a5d5f7.jpg" },
      { name: "Карусель", subcategory: "Качели и карусели", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/84f2587d-51b1-4d64-b0da-c6eff537d699.jpg" },
      { name: "Качели-балансир", subcategory: "Качели и карусели", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/cf12bb37-0697-4b53-b801-670df4d437cd.jpg" },
    ],
  },
  {
    slug: "dog-parks",
    title: "Площадки для выгула животных",
    description: "Огороженные зоны с препятствиями для дрессировки и прогулок",
    items: [
      { name: "Площадка для выгула с ограждением", subcategory: "Ограждения", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/60c36c21-0dad-474e-a08c-1df671f8b506.jpg" },
      { name: "Ограждение с калиткой", subcategory: "Ограждения", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/feaa7fe8-da86-4bd5-867f-9374976aec26.jpg" },
      { name: "Комплекс препятствий для собак", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d21fdf67-4a22-4a16-875d-ff99bb338775.jpg" },
      { name: "Тоннель для аджилити", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/5f57c004-d5b5-4a32-a9cc-4ae7e2bdda97.jpg" },
      { name: "Барьер для прыжков", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/5c65e1f8-bdcd-4591-9617-4a4c41278dd4.jpg" },
      { name: "Балансировочное бревно", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/79f914e0-8d9e-4a9e-b21e-c419969cacb4.jpg" },
      { name: "Слаломные стойки", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/9e9ca431-1405-4960-b925-e5a0c485ed62.jpg" },
      { name: "Тумба-подиум для дрессировки", subcategory: "Аджилити-оборудование", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/f14733f0-a98f-499c-8175-83e0f057fd73.jpg" },
      { name: "Поилка для животных", subcategory: "Аксессуары", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/d1fbcb40-6ca9-4535-b039-48e6842fcf87.jpg" },
      { name: "Диспенсер для пакетов", subcategory: "Аксессуары", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/ded44061-26b2-4917-b074-ba088dd36ea2.jpg" },
    ],
  },
  {
    slug: "art-concrete",
    title: "Арт-бетон",
    description: "Декоративные изделия из бетона для оформления городской среды",
    items: [
      { name: "Кашпо из архитектурного бетона", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/fdd6ce4f-d8ee-471f-8988-376df1ed3065.jpg" },
      { name: "Бетонный бордюр для клумбы", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/f3d413b6-371a-4bfe-bf1e-44a7d5d58360.jpg" },
      { name: "Кашпо квадратное гранитное для дерева", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/59b4af45-e758-478d-9004-fe4976e430f7.webp" },
      { name: "Кашпо круглое каменное для дерева", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5f52ca1b-38ff-4d60-9a7d-43493f98b2c0.jpg" },
      { name: "Комплект кашпо-трансформер \"Луна\"", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1ae1a0e6-451c-44fe-9ea1-455e834f11fa.jpg" },
      { name: "Кашпо-чаша бетонная тёмная", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8d7bea14-12b1-4fc1-a0ca-c1af678cf9e1.jpg" },
      { name: "Кашпо круглое высокое серое", subcategory: "Кашпо и вазоны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/78b74fe4-0ae3-4093-b549-a15d6c502192.jpg" },
      { name: "Декоративный бетонный столб-ограничитель", subcategory: "Ограничители и опоры", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/21b4b733-0f1c-4a0e-b4f9-d95b8a4f9f8c.jpg" },
      { name: "Подпорная стена с рельефным узором", subcategory: "Архитектурные элементы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/c159ff37-a2de-4c7a-be07-f3cfcb1be72f.jpg" },
      { name: "Декоративная бетонная колонна", subcategory: "Архитектурные элементы", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/a626e607-56de-4706-85b9-7323b2fc512b.jpg" },
    ],
  },
  {
    slug: "pergolas",
    title: "Перголы",
    description: "Конструкции для навесов и зон отдыха на открытом воздухе",
    items: [
      { name: "Деревянная пергола с металлическими опорами", subcategory: "Деревянные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/fbacd478-2f45-4858-95f3-d3f564150d94.jpg" },
      { name: "Угловая пергола с деревянным настилом", subcategory: "Деревянные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/2d9f122e-d8a9-403f-94d2-da8d804e7502.jpg" },
      { name: "Пергола с фигурной опорой и скамьёй", subcategory: "Деревянные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ac14d9a9-f9dd-4a41-999b-ddc69059785f.jpg" },
      { name: "Пергола с реечным экраном и подиумом", subcategory: "Реечные и модульные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/d9e94e74-463d-4a75-b781-ddd61ddf6db8.jpg" },
      { name: "Модульная пергола со сплошным навесом", subcategory: "Реечные и модульные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/a3e2f846-c67f-438c-aa72-0a2d6860849f.jpg" },
      { name: "Пергола с экраном из ламелей и подсветкой", subcategory: "Реечные и модульные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/66c8678c-279a-461f-9fdb-897102e8ee53.jpg" },
      { name: "Пергола с наклонным реечным экраном", subcategory: "Реечные и модульные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ec67e032-a414-4e43-adc8-42a560d926e6.jpg" },
      { name: "Круглая пергола-беседка с местами для отдыха", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/d9b13500-3d45-4bbb-9577-bfe1aef3b727.png" },
      { name: "Пергола с зоной отдыха и диваном", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/4e6b274a-1e62-4795-a298-8b1d68f4e737.jpg" },
      { name: "Пергола-навес с подвесными качелями", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/3fc2a181-857a-4049-b37d-88e3e3138747.jpg" },
      { name: "Садовая беседка с обеденной зоной", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/35fe27c1-c6c3-4a5e-9b36-e85430377e7d.png" },
      { name: "Пергола с подвесными скамьями-качелями", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/66a155a5-fc9d-4c61-a898-aefd63588ab5.jpg" },
      { name: "Игровая пергола-навес с качелями", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/98214705-b7f2-4245-bd20-2b841ea089e5.jpg" },
      { name: "Пергола с зоной отдыха и цветниками", subcategory: "С зоной отдыха", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ab5e2bc3-90b2-4cd7-8f10-513e8e7874c0.jpg" },
    ],
  },
  {
    slug: "urns",
    title: "Урны",
    description: "Уличные урны для благоустройства парков и общественных пространств",
    items: [
      { name: "Урна металлическая цилиндрическая", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/aaf5086b-aa19-48b3-ac1c-bbf3f6db69d2.jpg" },
      { name: "Урна на опоре с крышкой", subcategory: "Металлические", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/b77ffb84-694a-4874-96fa-b259fa340a68.jpg" },
      { name: "Урна бетонная с деревянными рейками", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/cebeabd2-b8ac-4e9e-8034-d294683149da.jpg" },
      { name: "Урна с отделкой под камень", subcategory: "Бетонные", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/3af3bd87-3020-4466-b6cf-3b2b6b46a01e.jpg" },
      { name: "Урна для раздельного сбора мусора", subcategory: "Для раздельного сбора", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/a0e51531-bc25-4bd6-bcbd-05e0be736e7a.jpg" },
    ],
  },
  {
    slug: "fountains",
    title: "Фонтаны",
    description: "Архитектурные и декоративные фонтаны для общественных пространств",
    items: [
      { name: "Многоярусный каменный фонтан", subcategory: "Многоярусный фонтан", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/4f3b5065-e560-42ae-8c8d-fda14a8ca4d2.jpg" },
      { name: "Ярусный фонтан-чаша с подсветкой", subcategory: "Многоярусный фонтан", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/73e520a1-d7b2-4609-a9c3-4a8b6e0dc790.jpg" },
      { name: "Настенный фонтан", subcategory: "Настенные и питьевые фонтаны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/c712bc27-84f8-47ea-bfdb-494286feffef.jpg" },
      { name: "Сухой фонтан с фонтанирующими форсунками во дворе", subcategory: "Настенные и питьевые фонтаны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/46f686c0-c63e-4aca-acfe-44b2491ffaf3.jpg" },
      { name: "Питьевой фонтанчик", subcategory: "Настенные и питьевые фонтаны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/8cdf253f-7ec4-4d8f-85b5-57af88d58c58.jpg" },
      { name: "Питьевые фонтанчики цветные", subcategory: "Настенные и питьевые фонтаны", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/26ac7175-1d4e-4d50-9f02-03e63bbae430.jpg" },
      { name: "Круглый фонтан со скульптурой", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/b5c130e6-78d3-4358-94c3-97c6d515ea0f.jpg" },
      { name: "Круглый фонтан-шар зеркальный", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f5364176-d44e-40f4-871f-93f8d3538c1e.jpg" },
      { name: "Фонтан-скульптура «Капля» из полированной стали", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1072b344-80c9-4964-ae29-b1b3fc289022.jpg" },
      { name: "Фонтан-скульптура «Лента» с водопадом", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/672da378-17f1-4ffa-9ee6-0fa98c2af5cc.jpg" },
      { name: "Каменный фонтан со скульптурным шаром", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/0efa1f98-90dd-4e00-a7fc-83897ebf6dd6.jpg" },
      { name: "Фонтан-скульптура «Спираль» из бетона", subcategory: "Фонтан со скульптурой", image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/e9ffb4da-c5e7-4395-9b5d-294def0d9798.jpg" },
    ],
  },
]