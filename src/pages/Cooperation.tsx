import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Cooperation = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("coop.title")}</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground">
        <p>{t("coop.p1")}</p>
        <h2 className="text-xl font-semibold text-foreground">{t("coop.h1")}</h2>
        <p>{t("coop.p2")}</p>
        <h2 className="text-xl font-semibold text-foreground">{t("coop.h2")}</h2>
        <p>{t("coop.p3")}</p>
        <h2 className="text-xl font-semibold text-foreground">{t("coop.h3")}</h2>
        <p>{t("coop.p4")}</p>

        <div className="bg-primary/10 rounded-xl p-6 mt-8">
          <h3 className="font-semibold text-foreground mb-2">{t("coop.cta.title")}</h3>
          <p>{t("coop.cta.body")}<a href="mailto:info@nikan.sk" className="text-primary underline">info@nikan.sk</a>{t("coop.cta.body2")}</p>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Cooperation;
