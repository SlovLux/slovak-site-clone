import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Procurement = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Verejné obstarávanie</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Spoločnosť NIKAN GROUP má rozsiahle skúsenosti s verejným obstarávaním. 
          Úspešne sme realizovali stovky projektov pre školy, univerzity a verejné inštitúcie.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p>Kompletná príprava tendrovej dokumentácie</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p>Základná a podrobná technická dokumentácia</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p>Certifikáty kvality a zhody pre všetky produkty</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p>Podpora pri príprave ponúk do verejného obstarávania</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p>Realizácia projektov financovaných z EU fondov</p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-8">
          <h2 className="text-xl font-bold mb-3">Potrebujete pomoc s verejným obstarávaním?</h2>
          <p className="mb-4 opacity-90">Kontaktujte nás a radi vám pomôžeme s celým procesom.</p>
          <Link
            to="/kontakt"
            className="inline-block bg-background text-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Kontaktovať nás
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Procurement;
