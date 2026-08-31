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
    title: "Эксплуатируемая кровля жилого комплекса с мощением и зонами отдыха",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/dec23ceb-fbd5-4759-a2a9-863034047d3a.png",
  },
  {
    title: "Монтаж металлического каркаса навеса на террасе кровли",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9ccf7db6-7bdb-43fb-830e-eaf52643a65f.png",
  },
  {
    title: "Готовый панорамный навес-пергола с изогнутой кровлей на террасе",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/c1880911-b13c-46f4-b95a-1fd6f670d453.png",
  },
  {
    title: "Беседка-купол на эксплуатируемой кровле среди зелени",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/98c14dcc-e0be-4a76-9e35-de8dc151e1a0.png",
  },
  {
    title: "Монтаж каркаса навеса рабочей бригадой на объекте",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5dbed3c4-9442-4579-91a6-9438c8cba558.png",
  },
  {
    title: "Беседка-купол на фоне городской застройки Москва-Сити",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/35428593-9d40-4755-a696-d9e85bf75991.png",
  },
  {
    title: "Скамьи с деревянными рейками на террасе кровли",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/761fb91e-5a35-40c9-814e-487fae8d6475.png",
  },
  {
    title: "Бетонные ограничители-конусы на парковочной зоне",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8addc191-d808-4a84-9331-fd05692c9daa.png",
  },
  {
    title: "Скамьи и защитные экраны на прогулочной зоне комплекса",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/83d96b84-275e-4127-88a8-77a088ca984e.png",
  },
  {
    title: "Навес-пергола на кровле в процессе монтажа кранов",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f0ee079c-974c-42c4-a30e-5223a2534004.png",
  },
  {
    title: "Кашпо-шары из бетона для озеленения общественной зоны",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/629500c3-de42-49b9-8b28-c9c7c574c297.png",
  },
  {
    title: "Бетонные кашпо для озеленения внутреннего двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ab5d36b9-46ae-46ab-9484-f29675023c78.png",
  },
  {
    title: "Монтаж навеса-перголы на строительной площадке",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/71cd167f-7308-4412-be21-d86cf70af673.png",
  },
  {
    title: "Скамья из бетона и композитных деревянных реек",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/6944b97a-ea71-4094-8105-338f955655c9.png",
  },
  {
    title: "Скамья с деревянным сиденьем на фоне озеленённого двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/488b886c-c807-459e-b1ab-9c2d1dc661e8.png",
  },
  {
    title: "Готовые скамьи и кашпо на площадке перед финальным монтажом",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/41b363da-21b5-4d48-b4f8-d9001c88d8ae.png",
  },
  {
    title: "Монтаж скамьи под каркасом навеса рабочими в касках",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/4731f939-06e5-4341-9661-c81b9d4d17c3.png",
  },
  {
    title: "Установка панорамного навеса со скамьёй бригадой монтажников",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1ee03954-02a7-47f2-ad40-ed234688c155.png",
  },
  {
    title: "Жёлтые арт-объекты со скамьями на фоне живой изгороди",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/a8f65fa5-88f3-452d-bc2c-8de70cc0512c.png",
  },
]

const riverParkKolomenskyGallery: ProjectGalleryItem[] = [
  {
    title: "Шезлонги на деревянном настиле в тени деревьев",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/0c3170a1-c32a-4587-af8c-4b2f297de590.png",
  },
  {
    title: "Деревянные лежаки на набережной у велодорожки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/536986f3-27cf-4909-b57c-0bc11ea2ccca.png",
  },
  {
    title: "Декоративные бетонные шары в озеленении у стеклянного ограждения",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8143ef1e-4374-40fa-afcb-d92e79a8f2dc.png",
  },
  {
    title: "Изогнутая деревянная скамья с урной у парковки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/ac1a465c-8c16-42f1-8126-401a6a2a5204.png",
  },
  {
    title: "Скамья на бетонных опорах у кирпичного фасада с урной",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/9afba531-9e91-4b58-91bf-8e6aaca50113.png",
  },
  {
    title: "Спортивная площадка с разноцветным покрытием во дворе жилого комплекса",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/e8e0fb8d-b559-4a7a-b9f2-dbb3f3d064f7.png",
  },
  {
    title: "Деревянная скамья под навесом вдоль ограждения спортплощадки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1371c167-c2ce-4d44-a5cf-6dbc1d8f8d08.png",
  },
  {
    title: "Панорамный навес со скамьёй вдоль всей спортивной площадки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/8624b43e-ded0-49a4-88b1-1bab93e28792.png",
  },
  {
    title: "Изогнутая скамья у входа на спортивную площадку",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/a884d213-77ed-4ddc-8ab6-b23997341cd8.png",
  },
  {
    title: "Металлическое ограждение спортплощадки с видом на жилой квартал",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/b6dbda4e-96eb-4c47-b4d7-bf95980e18ca.png",
  },
  {
    title: "Изогнутая волнообразная скамья из массива дерева на металлических опорах",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/fc7aa8c9-ccbc-4731-b1c6-256679a41c05.png",
  },
  {
    title: "Круглый деревянный подиум на мощёной площадке рядом со спортзоной",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/1d44dbfc-331a-4cf8-a987-7b62b16456c1.png",
  },
  {
    title: "Скамья с подлокотниками у цветника перед фасадом здания",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/7b3373b4-4794-4154-91ff-085729dca714.png",
  },
  {
    title: "Кресла с подлокотниками на прогулочной дорожке у газона",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/b520e090-abfd-4afd-befe-8b72428b9c01.png",
  },
  {
    title: "Теннисные столы и скамья с урной на мощёной площадке двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/b2c21049-1372-4b8c-9339-08a274aabe3a.png",
  },
  {
    title: "Декоративные светящиеся шары на насыпи из гальки в зоне отдыха",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/21d0774d-443e-4266-91c4-3b68891c1b5a.png",
  },
  {
    title: "Панорамный навес-пергола со скамьями на насыпи из гальки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/2e2df0f0-492a-492f-850f-d15bdf282966.png",
  },
  {
    title: "Дизайнерская скамья с красным металлическим каркасом в форме молнии",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/66daeb0f-ec05-404b-9ad4-ca3e1d1f4330.png",
  },
  {
    title: "Длинная изогнутая деревянная скамья вдоль мощёной площадки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f1eb0808-d97d-4dc8-b06d-6100d63baed8.png",
  },
  {
    title: "Скамья с подлокотниками у фасада здания на мощении",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/de7f9ebd-2e7c-4be5-b946-0199d0d8cf2e.png",
  },
  {
    title: "Круглые деревянные навесы с бетонными табуретами в зоне отдыха",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/2d245e65-1809-402c-b947-009d77111c3d.png",
  },
  {
    title: "Бетонные табуреты с деревянным сиденьем вдоль дорожки под навесом",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/dd60fb29-b16b-426c-91ea-de30775e115c.png",
  },
  {
    title: "Круглые бетонные ступени-плиты в дорожке среди декоративных трав",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/7f463768-cf3a-48aa-8edd-9c0108f73c0d.png",
  },
  {
    title: "Круглый навес с бетонными табуретами на мощёной площадке двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/54d50b48-ba37-4eea-80b7-e691f05a8104.png",
  },
  {
    title: "Круговая деревянная скамья вокруг приствольной зоны у набережной",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/12eab265-50a4-49f1-b749-9434e7692a5a.png",
  },
  {
    title: "Изогнутые деревянные скамьи на смотровой площадке у воды",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/c9cc9d84-216c-417f-bd21-1a679b97b481.png",
  },
  {
    title: "Круговая деревянная скамья вокруг дерева на мощёной площадке двора",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/953966a0-77f1-432e-ba05-0b80ef4d4305.png",
  },
  {
    title: "Изогнутая деревянная скамья с высокой спинкой вид сверху",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/f36173af-bd7f-486f-8970-9a110454a536.png",
  },
  {
    title: "S-образная деревянная скамья на мощении рядом с газоном",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/004d7432-f08a-4be2-ae39-b8563021f176.png",
  },
  {
    title: "Зона отдыха с деревянными скамьями и цветником на синем резиновом покрытии",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/cbd7538e-40fe-4271-b691-d3ab4f74f3a6.png",
  },
  {
    title: "Скамья с урной на синем резиновом покрытии детской площадки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/e89b9f14-791b-4ad6-9afd-e9cdaf6fe8c5.png",
  },
  {
    title: "Урна с деревянными рейками на синем резиновом покрытии",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/989c710f-7388-47c4-b2f9-9ac9595b6a9d.png",
  },
  {
    title: "Навес-пергола со столом и скамьями на насыпи из гальки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/5c7d791f-9bd4-4471-8a3e-a7cb90e2a594.png",
  },
  {
    title: "Урна и скамья на синем резиновом покрытии рядом с насыпью гальки",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/bb7319f8-fd04-4e97-bfa3-392aad98e6b0.png",
  },
  {
    title: "Изогнутая деревянная скамья вдоль мощёной дорожки у газона",
    image: "https://cdn.poehali.dev/projects/3a0b226a-fb58-4fd0-9a57-4e73054e7090/bucket/6b3645df-3196-42da-aeb8-d131400e62fb.png",
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
    title: "River Park Кутузовский",
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