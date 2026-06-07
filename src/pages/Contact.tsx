import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("contact.title")}</h1>

        <div className="grid gap-10 items-start">
          {/* Contact details cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{t("contact.company")}</h3>
              </div>
              <p className="text-muted-foreground text-sm">effis s.r.o.</p>
              <p className="text-muted-foreground text-sm">IČO: 45 241 848</p>
              <p className="text-muted-foreground text-sm">DIČ: 20 22 905 995</p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{t("contact.phone")}</h3>
              </div>
              <a href="tel:+421907024315" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+421 907 024 315</a>
              <a href="tel:+421903434591" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+421 903 434 591</a>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{t("contact.email")}</h3>
              </div>
              <a href="mailto:info@effis.sk" className="text-muted-foreground hover:text-primary text-sm transition-colors">info@effis.sk</a>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{t("contact.address")}</h3>
              </div>
              <p className="text-muted-foreground text-sm">Zelená 883/13</p>
              <p className="text-muted-foreground text-sm">900 45 Malinovo</p>
              <p className="text-muted-foreground text-sm">{t("contact.country")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            {t("contact.pricing")}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
