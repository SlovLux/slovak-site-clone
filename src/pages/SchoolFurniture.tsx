import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { schoolCatalog } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

const SchoolFurniture = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <CatalogSubcategoryView
      title={t("cat.school.title")}
      intro={t("cat.school.intro")}
      subcategories={schoolCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
  );
};

export default SchoolFurniture;
