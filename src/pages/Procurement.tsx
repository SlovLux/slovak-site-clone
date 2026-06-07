import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Procurement = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("proc.title")}</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground">
        <p>{t("proc.intro")}</p>

        <div className="space-y-4">
          {[t("proc.l1"), t("proc.l2"), t("proc.l3"), t("proc.l4"), t("proc.l5")].map((l) => (
            <div key={l} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p>{l}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-8">
          <h2 className="text-xl font-bold mb-3">{t("proc.cta.title")}</h2>
          <p className="mb-4 opacity-90">{t("proc.cta.body")}</p>
          <Link
            to="/kontakt"
            className="inline-block bg-background text-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {t("proc.cta.btn")}
          </Link>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Procurement;
