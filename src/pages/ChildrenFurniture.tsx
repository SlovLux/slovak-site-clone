import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { kidsCatalog } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

const ChildrenFurniture = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <CatalogSubcategoryView
      title={t("cat.kids.title")}
      intro={t("cat.kids.intro")}
      subcategories={kidsCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
  );
};

export default ChildrenFurniture;
