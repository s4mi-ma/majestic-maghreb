export interface CardData {
  title: string;
  subtitle?: string;
  images: string[];
  text: string;
}

export const marriages: CardData[] = [
  {
    title: "Mariage Tétouanais",
    images: Array.from({ length: 5 }, (_, i) => `/Ceremonie/05-Marriage%20Tetounae/0${i + 1}.jpeg`),
    text: "Le mariage de Tétouan est profondément marqué par l'héritage andalou introduit après la chute de Grenade, lorsque les familles andalouses s'installent dans le nord sous les Wattassides puis les Saadiens. Cette influence se traduit par une esthétique raffinée : takchita ancienne aux broderies fines, voile couvrant et bijoux délicats symbolisant la pudeur aristocratique. Le rituel de la mariée portée (type palanquin/ʿamariya) incarne une élévation symbolique héritée des cours andalouses, où la femme était honorée et protégée du regard public. Musicalement, le mariage est dominé par la musique arabo-andalouse (al-Ala), caractérisée par des instruments comme le oud, le violon et le rebab, ainsi que par des chants féminins traditionnels et poétiques. Ce mariage est donc une survivance directe d'une culture exilée transformée en identité locale.",
  },
  {
    title: "Mariage Fassi",
    images: Array.from({ length: 4 }, (_, i) => `/Ceremonie/03-Marriage-Fes/0${i + 1}.jpeg`),
    text: "À Fès, le mariage est l'expression la plus aristocratique du Maroc, héritée des dynasties idrisside et mérinide. La takchita fassia, très volumineuse, symbolise à la fois richesse (quantité de tissu) et pudeur, valeurs centrales d'une ville savante et conservatrice. Les broderies fines (tarz fassi), les coiffes dorées et les bijoux sophistiqués traduisent un raffinement intellectuel plus qu'ostentatoire. La musique est dominée par l'école andalouse de Fès, considérée comme la plus ancienne et la plus rigoureuse, structurée autour de la nouba, une suite musicale complexe et codifiée. Ici, le mariage devient une représentation du prestige culturel et du savoir religieux.",
  },
  {
    title: "Mariage Rbati",
    images: Array.from({ length: 6 }, (_, i) => `/Ceremonie/01-Marriage-Rabat-Sale/0${i + 1}.jpeg`),
    text: "À Rabat et Salé, le mariage reflète l'influence des dynasties almohade et alaouite, dans une ville historiquement liée au pouvoir politique. La tenue rbatie se distingue par sa structure élégante mais sobre, avec une takchita bien coupée, une ceinture marquée et des bijoux organisés sans excès. Contrairement au Nord, ici la mise en scène est plus contrôlée, traduisant une culture urbaine disciplinée. Musicalement, Rabat-Salé est associé au style gharnati, une variante andalouse issue de Grenade, introduite après les migrations andalouses, et caractérisée par un chant plus intimiste accompagné de oud, violon et percussions. Aujourd'hui, ce mariage évolue vers une fusion : orchestres modernes, musique chaâbi et influences internationales se combinent avec la tradition pour créer un événement hybride, entre héritage historique et modernité festive.",
  },
  {
    title: "Mariage Amazigh",
    images: Array.from({ length: 6 }, (_, i) => `/Ceremonie/04-Marriage-Amazigh/0${i + 1}.jpeg`),
    text: "Le mariage amazigh, présent dans l'Atlas et le Souss, est enraciné dans des traditions préislamiques intégrées ensuite par les dynasties amazighes (Almoravides, Almohades). La mariée porte des vêtements colorés et des bijoux en argent, souvent chargés de symboles protecteurs. Contrairement aux mariages urbains, l'accent est mis sur la communauté : chants collectifs, danses comme l'ahidous ou l'ahwach, et participation de tout le village. La musique repose sur des rythmes répétitifs et des chœurs puissants, où la voix collective prime sur l'individu. Ce mariage exprime une continuité identitaire forte, centrée sur la tribu et la transmission culturelle.",
  },
  {
    title: "Mariage Marrakchi",
    images: Array.from({ length: 3 }, (_, i) => `/Ceremonie/02-Marriage-Marrackech/0${i + 1}.jpeg`),
    text: "Le mariage de Marrakech s'inscrit dans l'héritage des dynasties almoravide et almohade, qui ont fait de la ville une capitale impériale. Il se distingue par son caractère spectaculaire : couleurs intenses (rouge, or), takchita lourde et richement brodée, bijoux imposants traduisant la richesse caravanière du Sud. Le maquillage est plus marqué, en accord avec cette esthétique visuelle forte. La musique y est festive et puissante, dominée par la dakka marrakchia, les percussions collectives et le chaâbi, qui créent une ambiance énergique et participative où toute l'assemblée est impliquée. Ce mariage est une mise en scène de puissance sociale et d'abondance, reflet du rôle historique de Marrakech comme carrefour commercial et politique.",
  },
  {
    title: "Mariage Sahraoui",
    images: Array.from({ length: 7 }, (_, i) => `/Ceremonie/06-Marriage-Saharien/0${i + 1}.jpeg`),
    text: "Le mariage sahraoui, lié aux régions du Sahara marocain, reflète une culture nomade influencée par les échanges transsahariens sous les Saadiens et les Alaouites. La mariée porte la melfa, vêtement ample adapté au désert, avec des bijoux légers mais symboliques. La musique est dominée par les chants hassanis, accompagnés de percussions simples et de rythmes lents, souvent associés à des danses élégantes et ondulées. La poésie occupe une place centrale : les chants racontent l'honneur, l'amour et les alliances tribales. Ce mariage privilégie la parole, la mémoire et l'identité plutôt que l'apparat matériel.",
  },
];

export const religiousFestivals: CardData[] = [
  {
    title: "Aïd al-Fitr",
    subtitle: "(Aïd Sghir)",
    images: Array.from({ length: 6 }, (_, i) => `/Ceremonie/07-Eid-Sghir/0${i + 1}.jpeg`),
    text: "L'Aïd al-Fitr trouve son origine au VIIe siècle avec le prophète Muhammad, qui institue cette fête à Médine comme célébration religieuse marquant la fin du Ramadan, mois de jeûne et de purification. Introduit au Maroc avec l'islam dès l'époque idrisside (VIIIe-IXe siècle), il devient rapidement un pilier de la vie sociale et religieuse. Au Maroc, appelé \"Aïd Sghir\", il commence par la prière collective suivie de la zakat al-fitr, acte obligatoire de solidarité envers les plus démunis. Avec le temps, il s'est enrichi de pratiques culturelles locales : port de vêtements neufs, préparation de pâtisseries comme chebakia ou sellou, et visites familiales. Cette fête illustre une évolution où le religieux structure le social, transformant un rite spirituel en moment de cohésion nationale et familiale.",
  },
  {
    title: "Aïd al-Adha",
    subtitle: "(Aïd el-Kebir)",
    images: Array.from({ length: 7 }, (_, i) => `/Ceremonie/08-Eid-Kbir/0${i + 1}.jpeg`),
    text: "L'Aïd al-Adha, ou \"Aïd el-Kebir\", commémore l'épisode coranique du prophète Ibrahim prêt à sacrifier son fils en signe de foi, rituel institué dans la tradition islamique dès le VIIe siècle. Introduit au Maroc avec l'islam et renforcé sous les grandes dynasties comme les Almoravides et les Alaouites, il devient un événement central mêlant religion, économie et société. Le sacrifice rituel (udhiyah) et le partage de la viande en trois parts (famille, proches, pauvres) structurent un modèle de redistribution sociale. Historiquement stable, cette pratique connaît aujourd'hui des transformations : urbanisation, hausse des coûts et même interventions politiques récentes face aux crises climatiques. Ainsi, l'Aïd al-Adha illustre une tradition ancienne qui s'adapte aux réalités contemporaines tout en conservant sa signification spirituelle.",
  },
  {
    title: "Achoura",
    images: Array.from({ length: 7 }, (_, i) => `/Ceremonie/09-Aachora/0${i + 1}.jpeg`),
    text: "Achoura, célébrée le 10 du mois de Muharram, possède une origine islamique liée à plusieurs événements, notamment le jeûne pratiqué en mémoire de faits prophétiques anciens. Introduite au Maroc avec l'islam, elle a progressivement évolué vers une célébration hybride mêlant religieux et pratiques populaires. Contrairement aux deux Aïds, Achoura au Maroc prend une dimension festive : jeux d'eau, distribution de jouets aux enfants, percussions (taarija) et chants dans les quartiers. Cette transformation s'explique par l'intégration de traditions locales et préislamiques dans un cadre islamique. Ainsi, Achoura illustre parfaitement la capacité de la culture marocaine à absorber un rite religieux et à le transformer en célébration sociale vivante, où la mémoire religieuse coexiste avec l'expression populaire.",
  },
];

export const festivals: CardData[] = [
  {
    title: "Festival Gnaoua et Musiques du Monde",
    images: Array.from({ length: 5 }, (_, i) => `/Festival/01-Gnawa/0${i + 1}.jpeg`),
    text: "Créé en 1998 à Essaouira, ce festival s'inscrit dans la reconnaissance d'un héritage longtemps marginalisé : la culture gnaoua, issue des descendants d'esclaves d'Afrique subsaharienne introduits au Maroc entre le XVIe et le XVIIe siècle. Il met au centre les maâlems, à la fois musiciens et guides spirituels, dont la musique repose sur le guembri et les qraqeb, créant des rythmes répétitifs proches de la transe rituelle. Le festival dépasse aujourd'hui le cadre traditionnel en favorisant des fusions avec le jazz, le blues ou le reggae, transformant une pratique initiatique en langage musical universel. Il symbolise ainsi la réhabilitation d'une mémoire africaine profonde au cœur de l'identité marocaine.",
  },
  {
    title: "Festival Mawazine",
    images: Array.from({ length: 6 }, (_, i) => `/Festival/02-Mawazine/0${i + 1}.jpeg`),
    text: "Organisé à Rabat depuis 2001, Mawazine reflète une autre dimension du Maroc contemporain : celle d'un pays ouvert sur la mondialisation. Contrairement aux festivals traditionnels, il met en scène des artistes internationaux aux côtés de la musique marocaine moderne (chaâbi, pop, rap). Cette coexistence traduit l'évolution des grandes villes marocaines sous l'influence des dynamiques politiques et économiques contemporaines. Mawazine n'est pas seulement un festival, mais un outil de diplomatie culturelle, montrant un Maroc moderne capable de dialoguer avec les cultures du monde tout en valorisant ses propres artistes.",
  },
  {
    title: "Festival des Andalousies Atlantiques",
    images: Array.from({ length: 5 }, (_, i) => `/Festival/03-FestivalAndalousieAtlentique/0${i + 1}.jpeg`),
    text: "Fondé en 2003 également à Essaouira, ce festival est une véritable reconstitution historique de l'héritage andalou partagé entre musulmans, juifs et chrétiens. Il célèbre une mémoire issue d'Al-Andalus, reconstruite après les expulsions et enrichie par les dynasties marocaines qui ont accueilli ces populations. Musicalement, il met en avant les traditions arabo-andalouses, le flamenco et les chants judéo-marocains, créant un dialogue interculturel unique. Plus qu'un événement artistique, il représente une vision politique et culturelle du Maroc comme espace de coexistence et de transmission, où la musique devient un outil de mémoire et de tolérance.",
  },
  {
    title: "Festival des Cerises de Sefrou",
    images: Array.from({ length: 4 }, (_, i) => `/Festival/04-FestivalCeriseSefrou/0${i + 1}.jpeg`),
    text: "Souvent associé à la région de Chefchaouen dans l'imaginaire populaire mais historiquement célébré à Sefrou, ce festival remonte au début du XXe siècle et est lié au cycle agricole des cerises. Il reflète une culture rurale profondément enracinée, où la fête célèbre la fertilité, la nature et la communauté. Les défilés, les costumes traditionnels et l'élection de la \"Reine des cerises\" rappellent les anciennes fêtes saisonnières. Musicalement, on y retrouve des chants populaires, du folklore local et des danses collectives. Ce festival représente une autre facette du Maroc : non pas impériale ou urbaine, mais agricole et communautaire, où la célébration est liée au rythme de la terre.",
  },
];
