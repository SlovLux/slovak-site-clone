import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">O nás</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-muted-foreground">
          <p>
            Spoločnosť effis ponúka široký sortiment nábytkových produktov vyrábaných v súlade s najvyššími európskymi štandardmi a s využitím moderných výrobných technológií. Naša produkcia je založená na použití kvalitných, ekologicky šetrných materiálov a spoľahlivých komponentov, čo zaručuje dlhú životnosť a vysokú úroveň spracovania.
          </p>
          <p>
            Pre našich kupujúcich poskytujeme konkurencieschopné ceny. Všetky výrobky sú certifikované a podliehajú prísnej kontrole kvality, pričom na celý sortiment poskytujeme záruku.
          </p>
          <p>
            Zabezpečujeme tiež spoľahlivé doručenie objednávok v rámci celej Európy.
          </p>
          <h3 className="text-xl font-semibold text-foreground">Prečo si vybrať nás?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Viac ako 5 000 realizovaných projektov</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Certifikované produkty podľa európskych noriem</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Vlastná výrobná linka s moderným vybavením</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Individuálny prístup ku každému klientovi</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
            alt="Naša výroba"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
