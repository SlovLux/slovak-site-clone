export interface SchoolProduct {
  sku: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface SchoolCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: SchoolProduct[];
}

export const schoolCategories: SchoolCategory[] = [
  {
    slug: "nova-ukrajinska-skola",
    title: "Nová ukrajinská škola",
    description: "Moderný nábytok navrhnutý pre koncept Novej ukrajinskej školy s dôrazom na flexibilitu a kreativitu.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
    products: [
      { sku: "100137", name: "Modulárny stôl NUŠ", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Flexibilný modulárny stôl pre skupinovú prácu.", price: 72 },
      { sku: "100274", name: "Farebná stolička NUŠ", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", description: "Ergonomická stolička v rôznych farbách.", price: 95 },
      { sku: "100411", name: "Mobilná tabuľa NUŠ", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600", description: "Pojazdná tabuľa pre flexibilné učenie.", price: 118 },
    ],
  },
  {
    slug: "ziacke-stolicky",
    title: "Žiacke stoličky",
    description: "Ergonomické stoličky pre žiakov všetkých vekových kategórií, nastaviteľné podľa výšky.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    products: [
      { sku: "100548", name: "Stolička T-tvar nastaviteľná č. 4-7", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", description: "Žiacka stolička s nastaviteľnou výškou.", price: 141 },
      { sku: "100685", name: "Stolička na okrúhlej trubke HPL", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", description: "Stolička s HPL povrchom, č. 4-6.", price: 164 },
      { sku: "100822", name: "Polozková stolička č. 6", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600", description: "Klasická polozková školská stolička.", price: 187 },
    ],
  },
  {
    slug: "laboratorny-nabytok",
    title: "Laboratórny nábytok",
    description: "Špeciálny nábytok pre chemické, fyzikálne a biologické laboratóriá s odolnými povrchmi.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    products: [
      { sku: "100959", name: "Demonštračný stôl s mojkou HPL", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", description: "Demonštračný stôl s HPL stolovou doskou a mojkou.", price: 210 },
      { sku: "101096", name: "Laboratórny stôl Pro Line", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600", description: "Laboratórny stôl s mojkou a HPL doskou.", price: 233 },
      { sku: "101233", name: "Stôl pre prípravu pokusov", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600", description: "Špeciálny stôl pre prípravu chemických pokusov.", price: 256 },
    ],
  },
  {
    slug: "skolske-zostavy",
    title: "Školské zostavy",
    description: "Kompletné riešenia pre vybavenie učební vrátane lavíc, stoličiek a úložného priestoru.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    products: [
      { sku: "101370", name: "Komplet 2-miestna lavica + stoličky", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", description: "Komplet stola na kovovom rame a polozkových stoličiek č. 6.", price: 279 },
      { sku: "101507", name: "Zostava pre prvý stupeň", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Kompletná zostava nábytku pre prvý stupeň ZŠ.", price: 302 },
      { sku: "101644", name: "Učebňová zostava prémium", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", description: "Prémiová zostava pre moderné učebne.", price: 325 },
    ],
  },
  {
    slug: "jedalensky-nabytok",
    title: "Jedálenský nábytok",
    description: "Stoly a stoličky pre školské jedálne, odolné a ľahko udržiavateľné.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    products: [
      { sku: "101781", name: "Jedálenský stôl 6-miestny", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600", description: "Robustný jedálenský stôl pre školské jedálne.", price: 348 },
      { sku: "101918", name: "Jedálenská stolička", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600", description: "Ľahko umývateľná stolička do jedálne.", price: 371 },
      { sku: "102055", name: "Lavica do jedálne", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600", description: "Lavica pre školské jedálne.", price: 394 },
    ],
  },
  {
    slug: "postele-stoliky-vesiaky",
    title: "Postele, nočné stolíky, vešiaky",
    description: "Nábytok pre internáty a ubytovacie zariadenia, kvalitný a odolný.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800",
    products: [
      { sku: "102192", name: "Internátna posteľ jednolôžková", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600", description: "Robustná posteľ pre internáty.", price: 417 },
      { sku: "102329", name: "Nočný stolík", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", description: "Praktický nočný stolík so zásuvkou.", price: 60 },
      { sku: "102466", name: "Vešiak nástenný", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600", description: "Pevný nástenný vešiak.", price: 83 },
    ],
  },
  {
    slug: "dvojmiestne-lavice",
    title: "Dvojmiestne žiacke lavice",
    description: "Ergonomické dvojmiestne lavice pre pohodlné učenie, s rôznymi výškovými variantmi.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    products: [
      { sku: "102603", name: "Dvojmiestna lavica nastaviteľná", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", description: "Nastaviteľná lavica pre dvoch žiakov.", price: 106 },
      { sku: "102740", name: "Dvojmiestna lavica HPL", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", description: "Dvojmiestna lavica s HPL povrchom.", price: 129 },
      { sku: "102877", name: "Dvojmiestna lavica klasik", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Klasická dvojmiestna lavica.", price: 152 },
    ],
  },
  {
    slug: "skolske-tabule",
    title: "Školské tabule",
    description: "Biele, zelené a interaktívne tabule rôznych rozmerov pre moderné učebne.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800",
    products: [
      { sku: "103014", name: "Zelená kriedová tabuľa", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600", description: "Klasická kriedová tabuľa.", price: 175 },
      { sku: "103151", name: "Biela magnetická tabuľa", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", description: "Magnetická biela tabuľa.", price: 198 },
      { sku: "103288", name: "Trojkrídlová kombinovaná tabuľa", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", description: "Kombinovaná tabuľa s posuvnými krídlami.", price: 221 },
    ],
  },
  {
    slug: "podnosy-prislusenstvo",
    title: "Podnosy a príslušenstvo",
    description: "Doplnky, podnosy a príslušenstvo pre školy a vzdelávacie zariadenia.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    products: [
      { sku: "103425", name: "Plastový podnos jedálenský", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", description: "Robustný podnos do školskej jedálne.", price: 244 },
      { sku: "103562", name: "Stojan na knihy", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600", description: "Praktický stojan na učebnice.", price: 267 },
      { sku: "103699", name: "Organizér na lavicu", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600", description: "Organizér pre žiacku lavicu.", price: 290 },
    ],
  },
  {
    slug: "jednomiestne-lavice",
    title: "Jednomiestne žiacke lavice",
    description: "Individuálne lavice pre samostatnú prácu žiakov, ideálne pre moderné koncepty učenia.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
    products: [
      { sku: "103836", name: "Jednomiestna lavica nastaviteľná", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Nastaviteľná individuálna lavica.", price: 313 },
      { sku: "103973", name: "Jednomiestna lavica HPL", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", description: "Individuálna lavica s HPL doskou.", price: 336 },
      { sku: "104110", name: "Jednomiestna lavica s košom", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", description: "Individuálna lavica s košíkom na knihy.", price: 359 },
    ],
  },
  {
    slug: "nabytok-do-aul",
    title: "Nábytok do aúl",
    description: "Sedadlá a nábytok pre prednáškové sály, auly a kongresové miestnosti.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
    products: [
      { sku: "104247", name: "Sklopné kresílko do auly", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600", description: "Sklopné sedadlo pre prednáškové sály.", price: 382 },
      { sku: "104384", name: "Pódium pre prednášajúceho", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600", description: "Drevené pódium s rečníckym pultom.", price: 405 },
      { sku: "104521", name: "Stôl pre predsedníctvo", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", description: "Reprezentatívny stôl pre predsedníctvo.", price: 428 },
    ],
  },
  {
    slug: "tribuny-vesiaky",
    title: "Tribúny a vešiaky",
    description: "Tribúny pre rečníkov, šatňové vešiaky a doplnky pre verejné priestory.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
    products: [
      { sku: "104658", name: "Rečnícka tribúna drevená", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600", description: "Klasická drevená rečnícka tribúna.", price: 71 },
      { sku: "104795", name: "Šatňový vešiak na kolieskach", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600", description: "Mobilný šatňový vešiak.", price: 94 },
      { sku: "104932", name: "Stenový vešiak rad", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", description: "Sústava nástenných vešiakov pre šatne.", price: 117 },
    ],
  },
];