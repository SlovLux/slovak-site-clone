import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { schoolCatalog } from "@/data/catalogData";

const SchoolFurniture = () => (
  <Layout>
    <CatalogSubcategoryView
      title="Školský nábytok"
      intro="Široký sortiment kvalitného školského nábytku pre všetky typy vzdelávacích inštitúcií – od žiackych stolov a stoličiek až po laboratórne kabinety a auly."
      subcategories={schoolCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
);

export default SchoolFurniture;
