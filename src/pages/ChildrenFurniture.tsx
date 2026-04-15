import CategoryPage from "@/components/CategoryPage";

const products = [
  { name: "Detské stoly", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600", description: "Farebné a bezpečné stoly pre škôlky a herné miestnosti." },
  { name: "Detské stoličky", image: "https://images.unsplash.com/photo-1587654780152-7da498006366?w=600", description: "Ergonomické stoličky prispôsobené detskej výške." },
  { name: "Skrinky a regály", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", description: "Úložné priestory pre hračky a učebné pomôcky." },
  { name: "Šatňové skrinky", image: "https://images.unsplash.com/photo-1564429238961-bf8fe18d4727?w=600", description: "Bezpečné skrinky pre detské oblečenie a osobné veci." },
  { name: "Postieľky", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600", description: "Pohodlné postieľky pre odpočinkové zóny v škôlkach." },
  { name: "Herné prvky", image: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=600", description: "Bezpečné herné a vzdelávacie prvky pre deti." },
];

const ChildrenFurniture = () => (
  <CategoryPage
    title="Detský nábytok"
    description="Bezpečný, farebný a funkčný nábytok navrhnutý špeciálne pre materské školy a detské zariadenia."
    products={products}
  />
);

export default ChildrenFurniture;
