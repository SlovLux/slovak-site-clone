import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const images = Array.from({ length: 25 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return new URL(`../assets/projects/project-${n}.jpg`, import.meta.url).href;
});

const Projects = () => {
  const { t } = useLanguage();
  return (
  <Layout>
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h1>
      <p className="text-muted-foreground max-w-3xl mb-10">{t("projects.desc")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, i) => (
          <div
            key={src}
            className="aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm"
          >
            <img
              src={src}
              alt={`${t("projects.alt")} ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  </Layout>
  );
};

export default Projects;
