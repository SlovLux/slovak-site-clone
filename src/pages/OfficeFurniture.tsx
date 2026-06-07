import Layout from "@/components/Layout";
import CatalogSubcategoryView from "@/components/CatalogSubcategoryView";
import { officeCatalog } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

const OfficeFurniture = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <CatalogSubcategoryView
      title={t("cat.office.title")}
      intro={t("cat.office.intro")}
      subcategories={officeCatalog}
      imageBasePath="/catalog/"
    />
  </Layout>
  );
};

export default OfficeFurniture;
