import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import showcase02 from "@/assets/showcase/showcase-02.png";
import showcase04 from "@/assets/showcase/showcase-04.png";
import showcase07 from "@/assets/showcase/showcase-07.png";
import showcase09 from "@/assets/showcase/showcase-09.png";

const About = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("about.title")}</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <h3 className="text-xl font-semibold text-foreground">{t("about.why")}</h3>
          <ul className="space-y-3">
            {[t("about.why1"), t("about.why2"), t("about.why3"), t("about.why4")].map((w) => (
              <li key={w} className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img src={showcase02} alt={t("fm.kids")} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md mt-8">
            <img src={showcase04} alt={t("fm.school")} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img src={showcase07} alt={t("fm.kids")} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md mt-8">
            <img src={showcase09} alt={t("fm.office")} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default About;
