import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { kidsCatalog } from "@/data/catalogData";

const ChildrenFurniture = () => (
  <Layout>
    <CatalogSubcategoryView
      title="Detský nábytok"
      intro="Bezpečný, farebný a praktický nábytok pre materské školy a detské zariadenia – stolíky, stoličky, postieľky, herné steny a viac."
      subcategories={kidsCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
);

export default ChildrenFurniture;
