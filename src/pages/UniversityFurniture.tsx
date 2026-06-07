import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { universityCatalog } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

const UniversityFurniture = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <CatalogSubcategoryView
      title={t("cat.uni.title")}
      intro={t("cat.uni.intro")}
      subcategories={universityCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
  );
};

export default UniversityFurniture;
