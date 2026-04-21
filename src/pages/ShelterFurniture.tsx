import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { shelterCatalog } from "@/data/catalogData";

const ShelterFurniture = () => (
  <Layout>
    <CatalogSubcategoryView
      title="Nábytok pre sociálne ubytovanie"
      intro="Odolný a praktický nábytok pre ubytovne, internáty a sociálne ubytovacie zariadenia – postele, skrine, jedálenský a spoločenský nábytok navrhnutý pre intenzívne každodenné používanie."
      subcategories={shelterCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
);

export default ShelterFurniture;
