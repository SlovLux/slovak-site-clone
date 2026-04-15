import CategoryPage from "@/components/CategoryPage";

const products = [
  { name: "Postele", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600", description: "Odolné postele pre hromadné ubytovanie." },
  { name: "Skrinky", image: "https://images.unsplash.com/photo-1564429238961-bf8fe18d4727?w=600", description: "Úložné skrinky pre osobné veci." },
  { name: "Stoly a stoličky", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600", description: "Jedálenský a spoločenský nábytok." },
];

const ShelterFurniture = () => (
  <CategoryPage
    title="Nábytok pre útulky"
    description="Odolný a funkčný nábytok pre dočasné ubytovanie a útulky."
    products={products}
  />
);

export default ShelterFurniture;
