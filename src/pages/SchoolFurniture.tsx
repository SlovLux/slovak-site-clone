import CategoryPage from "@/components/CategoryPage";

const products = [
  { name: "Školské zostavy", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Kompletné riešenia pre učebne vrátane lavíc, stoličiek a úložného priestoru." },
  { name: "Dvojmiestne lavice", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600", description: "Ergonomické dvojmiestne lavice pre pohodlné učenie." },
  { name: "Žiacke stoličky", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", description: "Nastaviteľné stoličky pre správne sedenie." },
  { name: "Jedálenský nábytok", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600", description: "Stoly a stoličky pre školské jedálne." },
  { name: "Školské tabule", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600", description: "Biele a zelené tabule rôznych rozmerov." },
  { name: "Laboratórny nábytok", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", description: "Špeciálny nábytok pre chemické a fyzikálne laboratóriá." },
  { name: "Postele a nočné stolíky", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600", description: "Nábytok pre internáty a ubytovacie zariadenia." },
  { name: "Príslušenstvo", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", description: "Podnosy, doplnky a príslušenstvo pre školy." },
];

const SchoolFurniture = () => (
  <CategoryPage
    title="Školský nábytok"
    description="Široký sortiment kvalitného školského nábytku pre všetky typy vzdelávacích inštitúcií. Naše produkty spĺňajú prísne bezpečnostné a ergonomické normy."
    products={products}
  />
);

export default SchoolFurniture;
