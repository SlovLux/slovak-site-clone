// Auto-generated from PDF catalog C2024_Nikan_Web.pdf
export interface CatalogProduct {
  page: number;
  image: string;
  code: string;
  name: string;
  description: string;
}

export interface CatalogSubcategory {
  name: string;
  slug: string;
  products: CatalogProduct[];
}

const slugify = (s: string): string =>
  s.toLowerCase()
    .replace(/[áä]/g, "a").replace(/[éě]/g, "e").replace(/[íi]/g, "i")
    .replace(/[óô]/g, "o").replace(/[úů]/g, "u").replace(/ý/g, "y")
    .replace(/[čć]/g, "c").replace(/[ďđ]/g, "d").replace(/ľ/g, "l")
    .replace(/ň/g, "n").replace(/[řŕ]/g, "r").replace(/[šś]/g, "s")
    .replace(/ť/g, "t").replace(/[žź]/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const schoolCatalog: CatalogSubcategory[] = [
  {
    name: "Stoly a stoličky študentské",
    slug: slugify("Stoly a stoličky študentské"),
    products: [
      {
        page: 4,
        image: "photos/page-04-1.jpg",
        code: "54178",
        name: "Školský stôl pre 1 žiaka bez police, výškovo nastaviteľný pre rastové skupiny č. 4-7",
        description: "Obsahuje aj: Lakovaný/HPL študentský stôl s T-podnožou na okrúhlej rúrke, výškovo nastaviteľný pre rastové skupiny; Súprava zásuviek a vodiacich líšt k stolu",
      },
    ],
  },
  {
    name: "Stoly študentské",
    slug: slugify("Stoly študentské"),
    products: [
      {
        page: 5,
        image: "photos/page-05-1.jpg",
        code: "31182",
        name: "Školský stôl pre 1 žiaka s policou, na okrúhlej a plochej oválnej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 3-6",
        description: "Rozmery: 700x500x580-760 mm Obsahuje aj: Školský stôl pre 1 žiaka na plochej oválnej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 4-7; Školský stôl pre 1 žiaka na plochej oválnej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 3-5",
      },
      {
        page: 6,
        image: "photos/page-06-1.jpg",
        code: "90187",
        name: "Školský stôl pre 1 žiaka na okrúhlej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 3-6",
        description: "Rozmery: 700x500x580-760 mm Obsahuje aj: Školský stôl 6-rohový, mobilný, na okrúhlej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 3-5",
      },
      {
        page: 7,
        image: "photos/page-07-1.jpg",
        code: "0161",
        name: "Školský stôl pre 2 žiakov s policou, výškovo nastaviteľný pre rastové skupiny č. 4-6",
        description: "Obsahuje aj: Školský stôl pre 2 žiakov s policou, antiscoliotický, výškovo nastaviteľný pre rastové skupiny č. 4-6; Školský stôl pre 1 žiaka; Školský stôl pre 1 žiaka na okrúhlej rúrke, antiscoliotický, s policou, výškovo nastaviteľný pre rastové skupiny č. 4-6",
      },
      {
        page: 8,
        image: "photos/page-08-1.jpg",
        code: "90177",
        name: "Školský stôl pre 1 žiaka na štvorcovej rúrke, s nastavením sklonu pracovnej dosky, výškovo nastaviteľný pre rastové skupiny č. 3-6",
        description: "Rozmery: 700x500x580-760 mm",
      },
    ],
  },
  {
    name: "Stoličky študentské",
    slug: slugify("Stoličky študentské"),
    products: [
      {
        page: 9,
        image: "photos/page-09-1.jpg",
        code: "90157",
        name: "Školský stôl pre 2 žiakov s policou, výškovo nastaviteľný pre rastové skupiny č. 4-6",
        description: "Školský stôl pre 2 žiakov bez police, výškovo nastaviteľný pre rastové skupiny č. 4-6. Školský stôl pre 2 žiakov s policou, rastová skupina č. 6. Rozmery: 1200x500x640-760 mm. Rozmery: 1200x500x640-760 mm. Rozmery: 1200x500x760 mm. Obsahuje aj: Školský stôl pre 2 žiakov s policou, antiscoliotický, výškovo nastaviteľný pre rastové skupiny č. 4-6",
      },
    ],
  },
  {
    name: "Steny",
    slug: slugify("Steny"),
    products: [
      {
        page: 11,
        image: "photos/page-11-1.jpg",
        code: "32182",
        name: "Lakovaná/HPL stolička s T-podnožou na okrúhlej rúrke, výškovo nastaviteľná pre rastové skupiny č. 3-6",
        description: "Rozmery: 385x435x700-820 mm (výška 340-460 mm) Obsahuje aj: Lakovaná/HPL stolička s T-podnožou na okrúhlej rúrke, výškovo nastaviteľná pre rastové skupiny č. 4-6; Lakovaná/HPL stolička s T-podnožou na okrúhlej rúrke, výškovo nastaviteľná pre rastové skupiny č. 2-5; Lakovaná/HPL stolička s T-podnožou na okrúhlej rúrke, výškovo nastaviteľná pre rastové skupiny č. 4-7; Lakovaná/HPL stolička s T-podnožou na štvorcovej rúrke, výškovo nastaviteľná pre rastové skupiny č. 4-6",
      },
      {
        page: 12,
        image: "photos/page-12-1.jpg",
        code: "22702",
        name: "Súprava zásuviek pre diel 7702",
        description: "Súprava zásuviek pre diel 7706. Rozmery: 702x405x2115 mm.",
      },
      {
        page: 13,
        image: "photos/page-13-1.jpg",
        code: "7700",
        name: "Stena pre odborné učebne",
        description: "",
      },
      {
        page: 14,
        image: "photos/page-14-1.jpg",
        code: "5400",
        name: "Stena „Škola-Záhrada“",
        description: "Stena „Škola-Záhrada“ č.8. Rozmery: 4310x410x1885 mm. Rozmery: 600x410x665 mm. Obsahuje aj: Stena „Poznávajko“",
      },
      {
        page: 15,
        image: "photos/page-15-1.jpg",
        code: "35085",
        name: "Stena „Ukrajinské tradície“",
        description: "Rozmery: 3220x410x1885 mm Obsahuje aj: Stenová zostava „Školská cesta“",
      },
      {
        page: 16,
        image: "photos/page-16-1.jpg",
        code: "5419",
        name: "Univerzálna stenová zostava „Šikovník“",
        description: "Rozmery: 4187x576x1885 mm",
      },
    ],
  },
  {
    name: "Centrum učiteľa a žiaka",
    slug: slugify("Centrum učiteľa a žiaka"),
    products: [
      {
        page: 18,
        image: "photos/page-18-1.jpg",
        code: "5411",
        name: "Učiteľský stôl",
        description: "Rozmery: 1300x1300x750 mm Obsahuje aj: Otvorená učiteľská skrinka; Učiteľská skrinka so zásuvkami; Učiteľská skrinka s dvierkami; Stôl „Centrum tvorivosti žiaka“",
      },
    ],
  },
  {
    name: "Tabule",
    slug: slugify("Tabule"),
    products: [
      {
        page: 19,
        image: "photos/page-19-1.jpg",
        code: "22216",
        name: "Priehľadné veko pre koše série N",
        description: "Rozmery: 284x377x32 mm Obsahuje aj: Priehľadné veko pre koše série F; Plastový kôš N1, Plastový kôš F1; Plastový kôš N2, Plastový kôš F2; Plastový kôš N3, Tenká priehľadná vodiaca lišta pre koše série N a F, Plastový kôš F3; Univerzálna stenová zostava „Škola-Záhrada“ č. 10, Univerzálna stenová zostava „Škola-Záhrada“ č. 9, Detská stenová zostava pod koše „Šmykľavka“",
      },
      {
        page: 20,
        image: "photos/page-20-1.jpg",
        code: "33918",
        name: "Auditórna tabuľa trojkrídlová kombinovaná, Jednoduchá auditórna tabuľa na kriedu, Jednoduchá auditórna tabuľa na fixky",
        description: "Rozmery: 3000x1000 mm, Rozmery: 2000x1000 mm, Rozmery: 2000x1000 mm Obsahuje aj: Rozmery: 1500x1000 mm, Rozmery: 1500x1000 mm; Rozmery: 1200x1000 mm, Rozmery: 1200x1000 mm; Rozmery: 4000x1000 mm",
      },
    ],
  },
  {
    name: "Nábytok pre jedálne",
    slug: slugify("Nábytok pre jedálne"),
    products: [
      {
        page: 22,
        image: "photos/page-22-1.jpg",
        code: "30100",
        name: "Jedálenský stôl pre 6 osôb",
        description: "Rozmery: 1500x800x760 mm Obsahuje aj: Stolička s plastovým monoblokom; Štvorcový jedálenský stôl pre 4 osoby, kruhová trúbka, rastová skupina č.6; Jedálenský stôl pre 6 osôb, pokrytý HPL laminátom; Stolička s preglejkovým monoblokom",
      },
    ],
  },
  {
    name: "Polomäkké stoličky a aula",
    slug: slugify("Polomäkké stoličky a aula"),
    products: [
      {
        page: 23,
        image: "photos/page-23-1.jpg",
        code: "30085",
        name: "Jedálenský stôl s HPL doskou",
        description: "Rozmery: 1200x750x760 mm Obsahuje aj: Stolička ISO, rastová skupina č.6, s HPL laminovanou preglejkou; Jedálenský stôl pre 4 osoby na plochých oválnych nohách, nastaviteľný pre rastové skupiny č. 4-6; Štvorcový stôl do jedálne pre 4 osoby na štvorcovej trubke, 34256 Lavica bez operadla pre 2 osoby na plochooválnej trubke, nastaviteľná; Taburetka na kovovom ráme. Pre výškové skupiny č. 4 – 6. Rozmery: 1200x300x380-460 mm; Štvorcový stôl do jedálne pre 4 osoby na okrúhlej trubke, pre výškové skupiny č. 4 – 6. Rozmery: 1500x700x640-760 mm",
      },
      {
        page: 24,
        image: "photos/page-24-1.jpg",
        code: "29537",
        name: "Polomäkká stolička 0221 Polomäkká stolička 0222 Polomäkká stolička „Prestiž“ (látka) ISO (koženka) ISO (látka)",
        description: "Rozmery: 484х550х845 (v=460 mm). Rozmery: 430х470х840 mm (v=460 mm). Rozmery: 430х470х840 mm (v=460 mm). Obsahuje aj: Polomäkká lavica s operadlom. 50139 Mäkké kreslo do auly pre 3 osoby. 50129 Mäkké kreslo do auly pre 3 osoby",
      },
    ],
  },
  {
    name: "Stoly pre kabinety",
    slug: slugify("Stoly pre kabinety"),
    products: [
      {
        page: 25,
        image: "photos/page-25-1.jpg",
        code: "48500",
        name: "Banketová stolička MUSIC SOUL. 48501 Banketová stolička MUSIC JAZZ",
        description: "Rozmery: 440х400х910 mm (v=470 mm). Rozmery: 440х400х910 mm (v=470 mm). Obsahuje aj: Pouf-transformer 5 v 1 na kolieskach. 48502 Banketová stolička MUSIC BLUES. 48503 Banketová stolička HERMAN",
      },
      {
        page: 26,
        image: "photos/page-26-1.jpg",
        code: "4105",
        name: "Písací stôl bez police",
        description: "Rozmery: 1200х600х750 mm. Obsahuje aj: Počítačový stôl s miestom pre systémovú jednotku; Písací stôl s policou; Písací stôl s 1 dvierkami a 3 zásuvkami; Rohový počítačový stôl. 31602 Výsuvná polica pod",
      },
    ],
  },
  {
    name: "Stoly pre laboratóriá",
    slug: slugify("Stoly pre laboratóriá"),
    products: [
      {
        page: 28,
        image: "photos/page-28-1.jpg",
        code: "0302",
        name: "Demonštračný stôl so zásuvkami pre kabinet fyziky a chémie",
        description: "Rozmery: 1200х600х900 mm. Obsahuje aj: Demonštračný stôl pre kabinet fyziky a chémie",
      },
      {
        page: 29,
        image: "photos/page-29-1.jpg",
        code: "0304",
        name: "Pomocný stôl so zásuvkou pre kabinet fyziky a chémie",
        description: "Rozmery: 1200х600х900 mm. Obsahuje aj: Pomocný stôl pre kabinet fyziky a chémie; Laboratórny stôl so zásuvkami č. 6",
      },
      {
        page: 30,
        image: "photos/page-30-1.jpg",
        code: "4141",
        name: "Písací stôl s 1 dvierkami",
        description: "Pravá skrinka. 0101 Fyzikálny laboratórny stôl s policou. Rozmery: 1200х600х750 mm. A s 2 zásuvkami, výšková skupina č. 6. Rozmery: 1200х600х760 mm. Obsahuje aj: Písací stôl so zásuvkami vpravo. 0101_PL Fyzikálny laboratórny stôl; Súprava demonštračných stolov pre kabinet fyziky a chémie (3 prvky)",
      },
    ],
  },
  {
    name: "Skrine, stoly a tumby",
    slug: slugify("Skrine, stoly a tumby"),
    products: [
      {
        page: 31,
        image: "photos/page-31-1.jpg",
        code: "31102",
        name: "Obojstranný vešiak na kovovom ráme. 31004 Obojstranný vešiak z DTD na 22 háčikov. 58443 Vešiak s poličkou",
        description: "Ráme, s 22 háčikmi. Rozmery: 1783х381х1750 mm. Rozmery: 740х220х1200 mm. Rozmery: 1827х568х1654 mm. Obsahuje aj: Jednolôžko, pravá ochranná bočnica; Jednolôžko, ľavá ochranná bočnica. 0819 Poschodová posteľ na kovovom ráme",
      },
      {
        page: 35,
        image: "photos/page-35-1.jpg",
        code: "6608",
        name: "Dvojdverová hospodárska skriňa 6602, Šatníková skriňa 6610, Šesťdverová šatníková skriňa",
        description: "Rozmery: 580x405x2025 mm, s výsuvnou tyčou a policami, Rozmery: 1059x405x2025 mm, Rozmery: 719x405x2025 mm Obsahuje aj: Otvorená skriňa s policami 6609, Štvordverová skriňa s 2 sklenenými dverami a policami 6612, Nízka trojdverová skriňa",
      },
      {
        page: 36,
        image: "photos/page-36-1.jpg",
        code: "33601",
        name: "(6618x4+6626x2) Komplet stolov na zasadnutia",
        description: "Rozmery: 3800x1200x750 mm Obsahuje aj: Písací stôl rovný 6626, Príručný stôl ku konferenčnému stolu 6624, Príručný stôl",
      },
      {
        page: 37,
        image: "photos/page-37-1.jpg",
        code: "6619",
        name: "Pojazdná skrinka s dvierkami 6620, Pojazdná skrinka s dvierkami a zásuvkou 6621, Pojazdná skrinka s dvierkami a 2 zásuvkami, Rozmery: 362x450x610 mm, Rozmery: 362x450x610 mm",
        description: "Rozmery: 440x450x610 mm, 22212 Plastový box N1, Rozmery: 312x377x75 mm Obsahuje aj: Rohový stôl pravostranný 6623, Príručný stolík k stolu alebo ľavostranný, Rozmery: 900x450x730 mm; Písací stôl rovný s 2 zásuvkami",
      },
      {
        page: 38,
        image: "photos/page-38-1.jpg",
        code: "0638",
        name: "Šatníková skriňa s výsuvnou tyčou 2-dverová",
        description: "Rozmery: 802x403x1816 mm (vnútorný rozmer 380 mm) Buk, Dub, Svetlo mliečny, Sivý, 0637 Šatníková skriňa s oválnou tyčou 2-dverová, Rozmery: 802x519x1816 mm (vnútorný rozmer 496 mm) Obsahuje aj: Uzavretá šatníková skriňa a knižnica 2-dverová; Uzavretá knižnica 2-dverová; Knižnica s 2 zásuvkami 2-dverová; Nástavec 2-dverový, Rozmery výrobku; Nástavec 2-dverový, 0646 Prístavok ku skrini; 0633, 0632, 0638, 0637, 0636, 0631, 0632, 0633, 0646",
      },
    ],
  },
  {
    name: "Skrine a penály",
    slug: slugify("Skrine a penály"),
    products: [
      {
        page: 33,
        image: "photos/page-33-1.jpg",
        code: "6613",
        name: "Nízka skriňa s plastovými priehradkami",
        description: "Rozmery: 703х405х1087 mm. Obsahuje aj: Trojdverová skriňa s 2 otvorenými policami. 8506L Prístavná skrinka (ľavá). 8188L Písací stôl rohový (ľavý). 8508L Prístavný stôl (ľavý)",
      },
      {
        page: 34,
        image: "photos/page-34-1.jpg",
        code: "6605",
        name: "Polo-uzavretá skriňa 6604, Polo-uzavretá skriňa 6603, Polo-uzavretá skriňa s jednou otvorenou policou, S 2 otvorenými policami, S 3 otvorenými policami",
        description: "Rozmery: 719x405x2025 mm",
      },
    ],
  },
  {
    name: "Penály, antresoly a tribúny",
    slug: slugify("Penály, antresoly a tribúny"),
    products: [
      {
        page: 39,
        image: "photos/page-39-1.jpg",
        code: "0655",
        name: "Otvorený nástavec",
        description: "Rozmery: 802x403x372 mm Obsahuje aj: Polo-uzavretá knižnica 2-dverová; Knižnica so sklenenými dvierkami v rámovom prevedení; Polo-uzavretá knižnica 4-dverová; Otvorená knižnica",
      },
      {
        page: 40,
        image: "photos/page-40-1.jpg",
        code: "0336",
        name: "Vertikálna skriňa 2-dverová s nikou 0669, Vertikálna skriňa na oblečenie s oválnou tyčou 0662, Vertikálna skriňa 1-dverová 0646, Prístavok ku skrini",
        description: "a policami, s tyčou, polo-uzavretá s 5 priehradkami, so zaoblenými policami, Rozmery: 402x403x1816 mm, Rozmery: 402x519x1816 mm, s policami, Rozmery: 403x403x1816 mm (vnútorný rozmer 380 mm), (vnútorný rozmer 496 mm), Rozmery: 402x403x1816 mm (vnútorný rozmer 380 mm) Obsahuje aj: Rohový nástavec 0651, Nástavec 1-dverový; Nástavec 1-dverový; Rečnícky pult s kruhovou základňou 08071, Rečnícky pult s úzkou základňou, Rozmery: 402x519x372 mm",
      },
    ],
  },
];

export const kidsCatalog: CatalogSubcategory[] = [
  {
    name: "Stoly a tumby (detské)",
    slug: slugify("Stoly a tumby (detské)"),
    products: [
      {
        page: 41,
        image: "photos/page-41-1.jpg",
        code: "29873",
        name: "Nízka otvorená skriňa 29901, Nízka 2-dverová skriňa 29861, Nízka uzavretá skriňa 29915, Nízka vertikálna skriňa s dvierkami",
        description: "Rozmery: s 2 zásuvkami a nikou, Rozmery: so zásuvkou a nikou, 800x380x1100 mm, Rozmery: 800x400x1100 mm, 800x400x1100 mm, Rozmery: 400x400x1100 mm Obsahuje aj: Nočný stolík 0821 Nočný stolík s dvierkami a zásuvkou, s dvierkami a nikou",
      },
      {
        page: 42,
        image: "photos/page-42-1.jpg",
        code: "8188",
        name: "R/L Rohový písací stôl",
        description: "Rozmery: 1400x900x750 mm Obsahuje aj: Písací stôl; R/L Prístavný kontajner, 8271 Konferenčný stolík pre kanceláriu, 8254 Mobilný kontajner",
      },
    ],
  },
  {
    name: "Detské stolíky",
    slug: slugify("Detské stolíky"),
    products: [
      {
        page: 44,
        image: "photos/page-44-1.jpg",
        code: "0307",
        name: "Detský šesťuholníkový stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3",
        description: "Rozmery: 1180x1040 mm (výška=460-580 mm). Buk, Limetka, Žltá, Modrá",
      },
      {
        page: 45,
        image: "photos/page-45-1.jpg",
        code: "22776",
        name: "Detský okrúhly stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3. 0308 Lichobežníkový stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3",
        description: "Rozmery: 900x900 mm (výška=460-580 mm). Rozmery: 1100x520 mm (výška=460-580 mm) Obsahuje aj: Detský obdĺžnikový stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3. 17240 Detský štvorcový stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3",
      },
      {
        page: 46,
        image: "photos/page-46-1.jpg",
        code: "12038",
        name: "Detský stôl, 4655 Stôl lupienok, rastová skupina č. 1 „Zvonec“, výškovo nastaviteľný pre rastové skupiny č. 1-3. 4631 Stôl lupienok, rastová skupina č. 2",
        description: "Rozmery: 600x600 mm (výška=460-580 mm). Rozmery: 600x550 mm (výška=460 mm). Rozmery: 600x550 mm (výška=520 mm) Obsahuje aj: Stôl lupienok, rastová skupina č. 3; Detský stôl „Kvet“, výškovo nastaviteľný pre rastové skupiny č. 1-3",
      },
    ],
  },
  {
    name: "Detské stoličky",
    slug: slugify("Detské stoličky"),
    products: [
      {
        page: 47,
        image: "photos/page-47-1.jpg",
        code: "23817",
        name: "Detský 2-miestny stôl bez police, výškovo nastaviteľný",
        description: "Rozmery: 1100x500 mm (výška=500/560/620/680 mm) Obsahuje aj: Detský 2-miestny stôl bez police na štvorcovom profile, výškovo nastaviteľný pre rastové skupiny č. 1-3; Lak/HPL Detská T-stolička na štvorcovom profile, výškovo nastaviteľná pre rastové skupiny č. 1-3; Detský 1-miestny stôl, výškovo nastaviteľný pre rastové skupiny č. 1-3; Detský 2-miestny stôl bez police na okrúhlom profile; Detský 2-miestny stôl so zásuvkami, výškovo nastaviteľný pre rastové skupiny č. 1-3. Rozmery: 1200x500 mm (výška=460-580 mm)",
      },
      {
        page: 48,
        image: "photos/page-48-1.jpg",
        code: "0244",
        name: "Lak/HPL Rastová skupina č. 3. 0244F Rastová skupina č. 3",
        description: "Rozmery: 335x360x645 mm (výška=340 mm). Rozmery: 335x360x645 mm (výška=340 mm). • Stabilita, bezpečnosť a spoľahlivosť konštrukcie; • Jednoduchá montáž; • Kvalitné komponenty (euroskrutky, kolíky). Obsahuje aj: Rastová skupina č. 1. 23164 Detská stolička z prírodného dreva; Detská stolička z prírodného dreva, nastaviteľná. 37425 Rastová skupina č. 2. Rozmery: 280x290x570 mm (výška=300 mm)",
      },
    ],
  },
  {
    name: "Postieľky",
    slug: slugify("Postieľky"),
    products: [
      {
        page: 49,
        image: "photos/page-49-1.jpg",
        code: "0296",
        name: "Detská stolička „Antoška“, 0297 Detská stolička „Antoška“, 0298 Detská stolička „Antoška“",
        description: "nastaviteľná pre rastové skupiny č. 1-3. Operadlo a sedadlo sú lakované, nastaviteľné pre rastové skupiny č. 1-3. Lakované, nastaviteľné pre rastové skupiny č. 1-3. Lak, Žltá, Zelená. Rozmery: 310x380x545-625 mm (výška=260-340 mm). Rozmery: 310x380x545-625 mm (výška=260-340 mm). Rozmery: 310x380x545-625 mm (výška=260-340 mm) Obsahuje aj: Rastová skupina č. 1, počas celej doby užívania; Rastová skupina č. 1. 0287 Rastová skupina č. 1; Rastová skupina č. 2. 0271 Rastová skupina č. 2. 0288 Rastová skupina č. 2; Rastová skupina č. 3. 0272 Rastová skupina č. 3. 0289 Rastová skupina č. 3. Indikátory pevnosti",
      },
      {
        page: 50,
        image: "photos/page-50-1.jpg",
        code: "26270",
        name: "Detská 3-poschodová posteľ s nočným stolíkom. 14137 Detská 2-poschodová posteľ",
        description: "Rozmery: 1552x682(2522)x950 mm. Rozmery: 1456x650x1408 mm Obsahuje aj: Nástavec s policami k posteli; Schody k posteli; Detská 3-poschodová posteľ; Detská 2-poschodová posteľ 0833_B Detská 3-poschodová posteľ, Buk",
      },
      {
        page: 51,
        image: "photos/page-51-1.jpg",
        code: "35896",
        name: "35968",
        description: "Obsahuje aj: Detská 2-poschodová posteľ z prírodného dreva (borovica) 35870 Detská 1-poschodová posteľ z prírodného dreva (borovica) 56532 Matrac z polyuretánovej peny pre deti; Detská posteľ „Mačiatko“ 41985 Detská posteľ „Medvedík“ 40371 Detská posteľ s vysokými čelami",
      },
      {
        page: 52,
        image: "photos/page-52-1.jpg",
        code: "17685",
        name: "Detská posteľ „Myška“",
        description: "Rozmery: 1432x636x823 mm Obsahuje aj: Detská posteľ; Detská posteľ „Žabka“",
      },
    ],
  },
  {
    name: "Skrine pre šatne, vešiaky, lavice",
    slug: slugify("Skrine pre šatne, vešiaky, lavice"),
    products: [
      {
        page: 53,
        image: "photos/page-53-1.jpg",
        code: "36031",
        name: "Detská 4-miestna skriňa s lavičkou 36031_PS Skriňa 4-miestna s fototlačou 36031_S Skriňa 4-miestna s fototlačou",
        description: "Rozmery: 1240x350x1610 mm, „Podmorský svet“ s lavičkou Rozmery: 1240x350x1610 mm, „Savana“ s lavičkou Rozmery: 1240x350x1610 mm Obsahuje aj: Detská 3-miestna skriňa 30323_F Detská 3-miestna skriňa 30323_DR Detská 3-miestna skriňa",
      },
      {
        page: 54,
        image: "photos/page-54-1.jpg",
        code: "32993",
        name: "Detská 5-miestna skriňa 32630 Detská 2-miestna skriňa 32641 Detská 1-miestna skriňa s chrómovými tyčami s chrómovými tyčami s chrómovými tyčami",
        description: "Rozmery: 1550x550x1560 mm, Rozmery: 628x550x1560 mm, Rozmery: 322x550x1560 mm Obsahuje aj: Vešiak na uteráky (5 háčikov) 41088 Vešiak na uteráky (10 háčikov) 4615 Detská lavička do šatne",
      },
    ],
  },
  {
    name: "Herné steny",
    slug: slugify("Herné steny"),
    products: [
      {
        page: 55,
        image: "photos/page-55-1.jpg",
        code: "28497",
        name: "Detská skriňa „Mozaika“ 28498 Skriňa na nočníky 22056 Detský regál na obuv z MDF",
        description: "Rozmery: 1296x350x1040 mm, Rozmery: 1296x350x1040 mm, Rozmery: 900x250x1000 mm Obsahuje aj: Regál na hračky; Detský regál",
      },
      {
        page: 56,
        image: "photos/page-56-1.jpg",
        code: "13869",
        name: "Detská stena „Parkovisko“ 13879 Detská stena „Obchod“ 13870 Detská stena „Bábkové divadlo“",
        description: "Rozmery: 1232x972x948 mm, Rozmery: 1064x600x1574 mm, Rozmery: 1360x460x1515 mm Obsahuje aj: Detská stena „Nemocnica“ (3 prvky: posteľ, stôl, taburet); Detská stena „Kuchyňa“",
      },
    ],
  },
  {
    name: "Modulárne detské steny",
    slug: slugify("Modulárne detské steny"),
    products: [
      {
        page: 57,
        image: "photos/page-57-1.jpg",
        code: "13888",
        name: "Detská stena „Kaderníctvo“, bez zrkadla 4634M Detská stena z 5 prvkov s fototlačou",
        description: "Rozmery: 940x540x1180 mm, Rozmery: 2700x300x1526 mm Obsahuje aj: Detská stena „Slniečko“ 13867 Detská stena „Prírodný kútik“",
      },
      {
        page: 58,
        image: "photos/page-58-1.jpg",
        code: "5500",
        name: "„Tajomný vesmír“ 1 5501 Stena „Tajomný vesmír“ č. 1",
        description: "Rozmery: 4565x400x1600 mm, Rozmery: 1036x400x1600 mm, 2 5502 Stena „Tajomný vesmír“ č. 2 Rozmery: 356x400x1400 mm, 3 5503 Stena „Tajomný vesmír“ č. 3 Rozmery: 700x400x1045 mm, 4 5504 Stena „Tajomný vesmír“ č. 4 Rozmery: 356x400x1400 mm",
      },
      {
        page: 59,
        image: "photos/page-59-1.jpg",
        code: "0501",
        name: "Detský stôl „Tajomný vesmír“ č. 1-3 35502 Detská 1-miestna skriňa s fototlačou 35501 Detská 3-miestna skriňa s fototlačou",
        description: "Rozmery: 1028x1023x460-580 mm, „Tajomný vesmír“ Rozmery: 356x400x1400 mm, „Tajomný vesmír“ Rozmery: 1036x400x1400 mm Obsahuje aj: 17501 Detská posteľ bez matraca „Tajomný vesmír“ (hviezdička); Detská posteľ bez matraca | Detská skriňa 1-dverová s figúrovými dverami a fototlačou | Detská skriňa 3-dverová s figúrovými dverami a fototlačou",
      },
      {
        page: 66,
        image: "photos/page-66-1.jpg",
        code: "5100",
        name: "Detská stenová zostava „Rozprávkový expres“",
        description: "Rozmery: 6670x350x1450 mm",
      },
      {
        page: 67,
        image: "photos/page-67-1.jpg",
        code: "5200",
        name: "Detská stenová zostava „Vysoký zámok“",
        description: "Rozmery: 4420x380x2020 mm Obsahuje aj: Detská stenová zostava „Vysoký zámok“ č. 5 | Detská stenová zostava „Vysoký zámok“ č. 6 | Detská stenová zostava „Vysoký",
      },
    ],
  },
  {
    name: "Detský mäkký nábytok",
    slug: slugify("Detský mäkký nábytok"),
    products: [
      {
        page: 70,
        image: "photos/page-70-1.jpg",
        code: "54503",
        name: "Kreslo Hruška",
        description: "Rozmery: 1000x750 mm Obsahuje aj: Detská hojdačka „Jednorožec“ | Detská hojdačka „Včielka“ | Detská hojdačka „Zajko“",
      },
    ],
  },
];

export const shelterCatalog: CatalogSubcategory[] = [
  {
    name: "Postele a poschodové postele",
    slug: slugify("Postele a poschodove postele"),
    products: [
      {
        page: 60,
        image: "photos/page-60-1.jpg",
        code: "60-01",
        name: "Jednolôžková posteľ pre ubytovacie zariadenia",
        description: "Robustná kovová konštrukcia s lamelovým roštom. Vhodná pre ubytovne, internáty a sociálne ubytovacie zariadenia.",
      },
      {
        page: 61,
        image: "photos/page-61-1.jpg",
        code: "61-01",
        name: "Poschodová posteľ – 2 lôžka",
        description: "Kovová poschodová posteľ s rebríkom a bezpečnostným zábradlím. Ideálna pre hromadné ubytovanie.",
      },
      {
        page: 61,
        image: "photos/page-61-2.jpg",
        code: "61-02",
        name: "Poschodová posteľ s úložným priestorom",
        description: "Variant poschodovej postele s integrovanými zásuvkami pod spodným lôžkom.",
      },
      {
        page: 62,
        image: "photos/page-62-1.jpg",
        code: "62-01",
        name: "Matrace pre ubytovacie zariadenia",
        description: "Penové a pružinové matrace v rôznych rozmeroch, vhodné pre dlhodobé používanie.",
      },
    ],
  },
  {
    name: "Skrine a úložný nábytok",
    slug: slugify("Skrine a uloznt nabytok"),
    products: [
      {
        page: 63,
        image: "photos/page-63-1.jpg",
        code: "63-01",
        name: "Šatníková skriňa pre ubytovne",
        description: "Uzamykateľná šatníková skriňa s vešiakovou tyčou a policou. Pre osobné veci ubytovaných.",
      },
      {
        page: 63,
        image: "photos/page-63-2.jpg",
        code: "63-02",
        name: "Dvojdverová úložná skriňa",
        description: "Praktická úložná skriňa s nastaviteľnými policami pre internáty a sociálne zariadenia.",
      },
      {
        page: 63,
        image: "photos/page-63-3.jpg",
        code: "63-03",
        name: "Nočný stolík",
        description: "Nočný stolík so zásuvkou a poličkou, dopĺňa ubytovaciu zostavu pri posteli.",
      },
      {
        page: 64,
        image: "photos/page-64-1.jpg",
        code: "64-01",
        name: "Komoda s úložnými zásuvkami",
        description: "Viaczásuvková komoda pre osobné veci. Robustná konštrukcia pre intenzívne používanie.",
      },
    ],
  },
  {
    name: "Jedálenský a spoločenský nábytok",
    slug: slugify("Jedalensky a spolocenskt nabytok"),
    products: [
      {
        page: 65,
        image: "photos/page-65-1.jpg",
        code: "65-01",
        name: "Jedálenský stôl pre spoločné jedálne",
        description: "Veľkokapacitný jedálenský stôl s odolnou pracovnou doskou. Vhodný pre jedálne ubytovní a útulkov.",
      },
      {
        page: 68,
        image: "photos/page-68-1.jpg",
        code: "68-01",
        name: "Stolička pre spoločné priestory",
        description: "Pevná stolička s kovovou konštrukciou, stohovateľná. Pre jedálne a spoločenské miestnosti.",
      },
      {
        page: 69,
        image: "photos/page-69-1.jpg",
        code: "69-01",
        name: "Lavica pre spoločné priestory",
        description: "Lavica s odolným poťahom pre šatne, chodby a spoločné priestory ubytovacích zariadení.",
      },
    ],
  },
];

export const officeCatalog: CatalogSubcategory[] = [
  {
    name: "Kancelárske stoly",
    slug: slugify("Kancelarske stoly"),
    products: [
      {
        page: 42,
        image: "photos/page-42-1.jpg",
        code: "8188",
        name: "Rohový písací stôl",
        description: "Priestranný rohový písací stôl pre moderné kancelárie. Rozmery: 1400x900x750 mm.",
      },
      {
        page: 26,
        image: "photos/page-26-1.jpg",
        code: "4105",
        name: "Písací stôl bez police",
        description: "Klasický písací stôl s priestrannou pracovnou doskou. Rozmery: 1200x600x750 mm.",
      },
      {
        page: 30,
        image: "photos/page-30-1.jpg",
        code: "4141",
        name: "Písací stôl s 1 dvierkami",
        description: "Praktický písací stôl s úložnou skrinkou a dvierkami pre osobné veci.",
      },
      {
        page: 36,
        image: "photos/page-36-1.jpg",
        code: "33601",
        name: "Komplet stolov na zasadnutia",
        description: "Veľkokapacitný konferenčný stôl pre rokovacie miestnosti. Rozmery: 3800x1200x750 mm.",
      },
    ],
  },
  {
    name: "Kancelárske skrine a kontajnery",
    slug: slugify("Kancelarske skrine a kontajnery"),
    products: [
      {
        page: 35,
        image: "photos/page-35-1.jpg",
        code: "6608",
        name: "Šatníková a hospodárska skriňa",
        description: "Robustná dvojdverová skriňa s policami a výsuvnou tyčou pre kancelárske priestory.",
      },
      {
        page: 37,
        image: "photos/page-37-1.jpg",
        code: "6619",
        name: "Pojazdná skrinka so zásuvkami",
        description: "Mobilná kancelárska skrinka s dvierkami a zásuvkami. Rozmery: 440x450x610 mm.",
      },
      {
        page: 38,
        image: "photos/page-38-1.jpg",
        code: "0638",
        name: "Šatníková skriňa s výsuvnou tyčou",
        description: "Dvojdverová šatníková skriňa pre kancelárie. Rozmery: 802x403x1816 mm.",
      },
      {
        page: 39,
        image: "photos/page-39-1.jpg",
        code: "0655",
        name: "Knižnica so sklenenými dvierkami",
        description: "Elegantná knižnica v rámovom prevedení pre reprezentatívne kancelárie.",
      },
    ],
  },
  {
    name: "Konferenčný a recepčný nábytok",
    slug: slugify("Konferencny a recepcny nabytok"),
    products: [
      {
        page: 25,
        image: "photos/page-25-1.jpg",
        code: "48500",
        name: "Banketová stolička MUSIC SOUL",
        description: "Elegantná stolička pre zasadacie miestnosti a reprezentatívne priestory. Rozmery: 440x400x910 mm.",
      },
      {
        page: 24,
        image: "photos/page-24-1.jpg",
        code: "29537",
        name: "Polomäkká stolička „Prestiž“",
        description: "Pohodlná stolička s polomäkkým čalúnením v koženke alebo látke pre kancelárie a aulu.",
      },
      {
        page: 23,
        image: "photos/page-23-1.jpg",
        code: "30085",
        name: "Konferenčný stôl s HPL doskou",
        description: "Odolný konferenčný stôl s HPL pracovnou doskou. Rozmery: 1200x750x760 mm.",
      },
    ],
  },
];

export const universityCatalog: CatalogSubcategory[] = [
  {
    name: "Posluchárenský nábytok a aula",
    slug: slugify("Posluchatensky nabytok a aula"),
    products: [
      {
        page: 24,
        image: "photos/page-24-1.jpg",
        code: "29537",
        name: "Polomäkká stolička „Prestiž“ / ISO",
        description: "Pohodlné polomäkké stoličky v koženke alebo látke pre prednáškové sály a auly.",
      },
      {
        page: 25,
        image: "photos/page-25-1.jpg",
        code: "48500",
        name: "Banketová stolička MUSIC SOUL",
        description: "Elegantná stolička pre auly a reprezentatívne priestory. Rozmery: 440x400x910 mm.",
      },
      {
        page: 23,
        image: "photos/page-23-1.jpg",
        code: "30085",
        name: "Stôl pre posluchárne s HPL doskou",
        description: "Odolný stôl s HPL pracovnou doskou pre prednáškové miestnosti. Rozmery: 1200x750x760 mm.",
      },
    ],
  },
  {
    name: "Laboratórny nábytok",
    slug: slugify("Laboratorny nabytok"),
    products: [
      {
        page: 28,
        image: "photos/page-28-1.jpg",
        code: "0302",
        name: "Demonštračný stôl so zásuvkami",
        description: "Demonštračný stôl pre univerzitné laboratóriá fyziky a chémie. Rozmery: 1200x600x900 mm.",
      },
      {
        page: 29,
        image: "photos/page-29-1.jpg",
        code: "0304",
        name: "Pomocný laboratórny stôl",
        description: "Pomocný stôl so zásuvkou pre kabinety a laboratóriá. Rozmery: 1200x600x900 mm.",
      },
      {
        page: 30,
        image: "photos/page-30-1.jpg",
        code: "0101",
        name: "Fyzikálny laboratórny stôl s policou",
        description: "Laboratórny stôl s policou a zásuvkami pre vysokoškolské laboratóriá. Rozmery: 1200x600x760 mm.",
      },
    ],
  },
  {
    name: "Knižničný nábytok",
    slug: slugify("Kniznicny nabytok"),
    products: [
      {
        page: 39,
        image: "photos/page-39-1.jpg",
        code: "0655",
        name: "Knižnica so sklenenými dvierkami",
        description: "Reprezentatívna knižnica v rámovom prevedení pre akademické knižnice a študovne.",
      },
      {
        page: 38,
        image: "photos/page-38-1.jpg",
        code: "0633",
        name: "Uzavretá knižnica 2-dverová",
        description: "Praktická uzavretá knižnica pre vysokoškolské knižnice a kabinety.",
      },
      {
        page: 40,
        image: "photos/page-40-1.jpg",
        code: "08071",
        name: "Rečnícky pult",
        description: "Rečnícky pult s úzkou základňou pre prednáškové sály a konferencie.",
      },
    ],
  },
  {
    name: "Kancelársky nábytok pre fakulty",
    slug: slugify("Kancelarsky nabytok pre fakulty"),
    products: [
      {
        page: 26,
        image: "photos/page-26-1.jpg",
        code: "4105",
        name: "Písací stôl pre kabinet",
        description: "Klasický písací stôl pre kabinety pedagógov. Rozmery: 1200x600x750 mm.",
      },
      {
        page: 42,
        image: "photos/page-42-1.jpg",
        code: "8188",
        name: "Rohový písací stôl",
        description: "Priestranný rohový písací stôl pre administratívne priestory fakúlt. Rozmery: 1400x900x750 mm.",
      },
      {
        page: 35,
        image: "photos/page-35-1.jpg",
        code: "6608",
        name: "Šatníková a hospodárska skriňa",
        description: "Robustná dvojdverová skriňa s policami a výsuvnou tyčou pre kabinety.",
      },
    ],
  },
];

