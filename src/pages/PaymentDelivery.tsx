import Layout from "@/components/Layout";
import { Truck, CreditCard, Clock, Shield } from "lucide-react";

const PaymentDelivery = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Platba a dodanie</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-muted rounded-xl p-6 flex gap-4">
          <CreditCard className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Spôsoby platby</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Bankový prevod</li>
              <li>• Platba na faktúru (pre firmy)</li>
              <li>• Platba vopred</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted rounded-xl p-6 flex gap-4">
          <Truck className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Dodanie</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Dodanie po celom Slovensku</li>
              <li>• Možnosť osobného odberu</li>
              <li>• Montáž na mieste</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted rounded-xl p-6 flex gap-4">
          <Clock className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Dodacie lehoty</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Skladové produkty: 5-7 pracovných dní</li>
              <li>• Zákazková výroba: 3-6 týždňov</li>
              <li>• Veľké objednávky: individuálne</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted rounded-xl p-6 flex gap-4">
          <Shield className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Záruka</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 2-ročná záruka na všetky produkty</li>
              <li>• Možnosť predĺženej záruky</li>
              <li>• Servisná podpora</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PaymentDelivery;
