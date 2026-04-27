import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ďakujeme za vašu správu! Budeme vás kontaktovať.");
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Kontakt</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Building2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Spoločnosť</h3>
                  <p className="text-muted-foreground">effis s.r.o.</p>
                  <p className="text-muted-foreground">IČO: 45 241 848</p>
                  <p className="text-muted-foreground">DIČ: 20 22 905 995</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Telefón</h3>
                  <p className="text-muted-foreground">+421 907 024 315</p>
                  <p className="text-muted-foreground">+421 903 434 591</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-muted-foreground">info@effis.sk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Adresa</h3>
                  <p className="text-muted-foreground">Zelená 883/13</p>
                  <p className="text-muted-foreground">900 45 Malinovo</p>
                  <p className="text-muted-foreground">Slovensko</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Pracovná doba:</p>
              <p>Pondelok – Piatok: 8:00 – 17:00</p>
              <p>Sobota – Nedeľa: Zatvorené</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Zanechajte nám správu</h2>
            <input
              type="text"
              placeholder="Vaše meno"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Telefón"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Vaša správa"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Odoslať správu
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
