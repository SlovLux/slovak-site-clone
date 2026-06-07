import Layout from "@/components/Layout";
import { Truck, CreditCard, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PaymentDelivery = () => {
  const { t } = useLanguage();
  const blocks = [
    { Icon: CreditCard, title: t("pd.pay"), items: [t("pd.pay1"), t("pd.pay2"), t("pd.pay3")] },
    { Icon: Truck, title: t("pd.delivery"), items: [t("pd.delivery1"), t("pd.delivery2"), t("pd.delivery3")] },
    { Icon: Clock, title: t("pd.times"), items: [t("pd.times1"), t("pd.times2"), t("pd.times3")] },
    { Icon: Shield, title: t("pd.warranty"), items: [t("pd.warranty1"), t("pd.warranty2"), t("pd.warranty3")] },
  ];
  return (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("pd.title")}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {blocks.map(({ Icon, title, items }) => (
          <div key={title} className="bg-muted rounded-xl p-6 flex gap-4">
            <Icon className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {items.map((it) => <li key={it}>• {it}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
  );
};

export default PaymentDelivery;
