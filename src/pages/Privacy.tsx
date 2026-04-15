import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Ochrana súkromia</h1>

      <div className="max-w-3xl space-y-6 text-muted-foreground text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-foreground">1. Zhromažďovanie údajov</h2>
        <p>Zhromažďujeme len tie osobné údaje, ktoré nám poskytnete dobrovoľne prostredníctvom kontaktných formulárov, e-mailu alebo telefonicky. Tieto údaje zahŕňajú meno, e-mailovú adresu, telefónne číslo a adresu.</p>

        <h2 className="text-lg font-semibold text-foreground">2. Účel spracovania</h2>
        <p>Vaše osobné údaje spracúvame výlučne za účelom vybavovania vašich objednávok, odpovedania na vaše otázky a zlepšovania našich služieb.</p>

        <h2 className="text-lg font-semibold text-foreground">3. Ochrana údajov</h2>
        <p>Vaše osobné údaje chránime pred neoprávneným prístupom, zmenou, zverejnením alebo zničením. Používame primerané technické a organizačné opatrenia na zabezpečenie ochrany vašich údajov.</p>

        <h2 className="text-lg font-semibold text-foreground">4. Zdieľanie údajov</h2>
        <p>Vaše osobné údaje nepredávame, neobchodujeme s nimi ani ich inak neprenášame tretím stranám bez vášho súhlasu, s výnimkou prípadov, keď je to nevyhnutné na splnenie zákonných požiadaviek.</p>

        <h2 className="text-lg font-semibold text-foreground">5. Cookies</h2>
        <p>Naša webová stránka používa cookies na zlepšenie vášho zážitku pri prehliadaní. Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači.</p>

        <h2 className="text-lg font-semibold text-foreground">6. Kontakt</h2>
        <p>Ak máte otázky ohľadom ochrany vašich osobných údajov, kontaktujte nás na info@nikan.sk.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
