import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { officeCatalog } from "@/data/catalogData";

const OfficeFurniture = () => (
  <Layout>
    <CatalogSubcategoryView
      title="Kancelársky nábytok"
      intro="Profesionálny kancelársky nábytok pre moderné pracovné priestory – písacie a konferenčné stoly, ergonomické stoličky, úložné skrine a recepčný nábytok navrhnutý pre každodenné používanie."
      subcategories={officeCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
);

export default OfficeFurniture;
