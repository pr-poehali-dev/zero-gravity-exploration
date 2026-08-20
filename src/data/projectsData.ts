export interface ProjectGalleryItem {
  title: string
  image: string
}

export interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  image: string
  gallery?: ProjectGalleryItem[]
}

const riverParkGallery: ProjectGalleryItem[] = [
  {
    title: "Эксплуатируемая кровля",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/dec23ceb-fbd5-4759-a2a9-863034047d3a.png",
  },
  {
    title: "Монтаж навеса на террасе",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9ccf7db6-7bdb-43fb-830e-eaf52643a65f.png",
  },
  {
    title: "Панорамный навес-пергола",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/c1880911-b13c-46f4-b95a-1fd6f670d453.png",
  },
  {
    title: "Беседка-купол на кровле",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/98c14dcc-e0be-4a76-9e35-de8dc151e1a0.png",
  },
  {
    title: "Монтаж каркаса навеса",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5dbed3c4-9442-4579-91a6-9438c8cba558.png",
  },
  {
    title: "Беседка-купол на фоне города",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/35428593-9d40-4755-a696-d9e85bf75991.png",
  },
  {
    title: "Скамьи с деревянными рейками",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/761fb91e-5a35-40c9-814e-487fae8d6475.png",
  },
  {
    title: "Бетонные ограничители-конусы",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8addc191-d808-4a84-9331-fd05692c9daa.png",
  },
  {
    title: "Скамьи и защитные экраны",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/83d96b84-275e-4127-88a8-77a088ca984e.png",
  },
  {
    title: "Навес-пергола на кровле",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f0ee079c-974c-42c4-a30e-5223a2534004.png",
  },
  {
    title: "Кашпо-шары из бетона",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/629500c3-de42-49b9-8b28-c9c7c574c297.png",
  },
  {
    title: "Кашпо для озеленения двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ab5d36b9-46ae-46ab-9484-f29675023c78.png",
  },
  {
    title: "Монтаж навеса-перголы",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/71cd167f-7308-4412-be21-d86cf70af673.png",
  },
  {
    title: "Скамья с деревянным сиденьем",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/6944b97a-ea71-4094-8105-338f955655c9.png",
  },
  {
    title: "Скамья на фоне двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/488b886c-c807-459e-b1ab-9c2d1dc661e8.png",
  },
  {
    title: "Скамьи и кашпо перед монтажом",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/41b363da-21b5-4d48-b4f8-d9001c88d8ae.png",
  },
  {
    title: "Монтаж скамьи под навесом",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/4731f939-06e5-4341-9661-c81b9d4d17c3.png",
  },
  {
    title: "Установка панорамного навеса",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1ee03954-02a7-47f2-ad40-ed234688c155.png",
  },
  {
    title: "Желтые арт-объекты со скамьями",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/a8f65fa5-88f3-452d-bc2c-8de70cc0512c.png",
  },
]

const riverParkKolomenskyGallery: ProjectGalleryItem[] = [
  {
    title: "Шезлонги на деревянном настиле",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/0c3170a1-c32a-4587-af8c-4b2f297de590.png",
  },
  {
    title: "Деревянные лежаки у набережной",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/536986f3-27cf-4909-b57c-0bc11ea2ccca.png",
  },
  {
    title: "Декоративные бетонные шары",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8143ef1e-4374-40fa-afcb-d92e79a8f2dc.png",
  },
  {
    title: "Изогнутая скамья с урной",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ac1a465c-8c16-42f1-8126-401a6a2a5204.png",
  },
  {
    title: "Скамья на бетонных опорах",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9afba531-9e91-4b58-91bf-8e6aaca50113.png",
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "ЖК «Горизонт»",
    category: "Жилой комплекс",
    location: "Москва",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/08b6b813-0a27-481a-b147-cee432fe98e7.jpg",
  },
  {
    id: 2,
    title: "Городской парк «Румянцево»",
    category: "Городской парк",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/files/15f6f590-fabe-47c2-85c4-8d19be147b0c.jpg",
  },
  {
    id: 3,
    title: "River Park",
    category: "Жилой комплекс",
    location: "Москва-Сити",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f0ee079c-974c-42c4-a30e-5223a2534004.png",
    gallery: riverParkGallery,
  },
  {
    id: 4,
    title: "River Park Коломенский",
    category: "Общественная зона",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/0c3170a1-c32a-4587-af8c-4b2f297de590.png",
    gallery: riverParkKolomenskyGallery,
  },
]