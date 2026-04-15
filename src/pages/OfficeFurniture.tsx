import CategoryPage from "@/components/CategoryPage";

const products = [
  { name: "Kancelárske stoly", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", description: "Moderné a ergonomické pracovné stoly." },
  { name: "Kancelárske stoličky", image: "https://images.unsplash.com/photo-1589364566560-7268fe138279?w=600", description: "Pohodlné stoličky pre celodenné sedenie." },
  { name: "Konferenčný nábytok", image: "https://images.unsplash.com/photo-1431540015160-0295a5e6fff4?w=600", description: "Stoly a stoličky pre zasadacie miestnosti." },
  { name: "Recepčné pulty", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", description: "Elegantné recepčné pulty pre vstupné priestory." },
];

const OfficeFurniture = () => (
  <CategoryPage
    title="Kancelársky nábytok"
    description="Profesionálny kancelársky nábytok pre moderné pracovné priestory. Kvalita a ergonómia na prvom mieste."
    products={products}
  />
);

export default OfficeFurniture;
