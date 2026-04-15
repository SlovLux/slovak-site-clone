import CategoryPage from "@/components/CategoryPage";

const products = [
  { name: "Posluchárenský nábytok", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", description: "Sedenie pre prednáškové sály a auly." },
  { name: "Laboratórny nábytok", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", description: "Špeciálny nábytok pre univerzitné laboratóriá." },
  { name: "Knižničný nábytok", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600", description: "Regály a študijné stoly pre akademické knižnice." },
  { name: "Kancelársky nábytok", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", description: "Nábytok pre kancelárie a administratívne priestory." },
];

const UniversityFurniture = () => (
  <CategoryPage
    title="Nábytok pre univerzity"
    description="Profesionálne vybavenie pre vysoké školy a univerzity – od posluchární po laboratóriá a knižnice."
    products={products}
  />
);

export default UniversityFurniture;
