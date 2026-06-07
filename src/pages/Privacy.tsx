import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("priv.title")}</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground text-sm leading-relaxed">
        {[1,2,3,4,5,6].map((n) => (
          <div key={n}>
            <h2 className="text-lg font-semibold text-foreground">{t(`priv.h${n}`)}</h2>
            <p>{t(`priv.p${n}`)}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
  );
};

export default Privacy;
