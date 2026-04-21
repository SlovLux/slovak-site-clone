import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { universityCatalog } from "@/data/catalogData";

const UniversityFurniture = () => (
  <Layout>
    <CatalogSubcategoryView
      title="Nábytok pre univerzity"
      intro="Profesionálne vybavenie pre vysoké školy a univerzity – posluchárenský nábytok, laboratórne stoly, knižničné regály a kancelársky nábytok pre fakulty a kabinety."
      subcategories={universityCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
);

export default UniversityFurniture;
