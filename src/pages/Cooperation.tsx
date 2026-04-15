import Layout from "@/components/Layout";

const Cooperation = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Spolupráca</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground">
        <p>
          NIKAN GROUP je otvorený spolupráci s distribútormi, architektmi, projektantmi a verejnými inštitúciami. 
          Ponúkame výhodné podmienky pre dlhodobých partnerov.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Pre distribútorov</h2>
        <p>
          Poskytujeme špeciálne veľkoobchodné ceny, marketingovú podporu a rýchle dodacie lehoty. 
          Naši partneri majú prístup k celému katalógu produktov vrátane exkluzívnych kolekcií.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Pre architektov a projektantov</h2>
        <p>
          Dodávame 3D modely a technické specifikácie pre všetky naše produkty. 
          Sme pripravení prispôsobiť nábytok podľa špecifických požiadaviek vášho projektu.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Pre verejné inštitúcie</h2>
        <p>
          Máme rozsiahle skúsenosti s verejným obstarávaním. Poskytujeme kompletnú technickú dokumentáciu 
          a podporu pri príprave tendrovej dokumentácie.
        </p>

        <div className="bg-primary/10 rounded-xl p-6 mt-8">
          <h3 className="font-semibold text-foreground mb-2">Zaujíma vás spolupráca?</h3>
          <p>Kontaktujte nás na <a href="mailto:info@nikan.sk" className="text-primary underline">info@nikan.sk</a> alebo zavolajte na +421 900 000 000.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Cooperation;
