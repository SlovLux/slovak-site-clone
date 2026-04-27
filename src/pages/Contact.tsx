import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Kontakt</h1>

        <div className="max-w-2xl">
          <div className="space-y-6">
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
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
