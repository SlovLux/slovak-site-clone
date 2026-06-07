import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { shelterCatalog } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

const ShelterFurniture = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <CatalogSubcategoryView
      title={t("cat.shelter.title")}
      intro={t("cat.shelter.intro")}
      subcategories={shelterCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
  );
};

export default ShelterFurniture;
