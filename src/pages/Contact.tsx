import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import showcase01 from "@/assets/showcase/showcase-01.png";
import showcase03 from "@/assets/showcase/showcase-03.png";
import showcase05 from "@/assets/showcase/showcase-05.png";
import showcase06 from "@/assets/showcase/showcase-06.png";
import showcase08 from "@/assets/showcase/showcase-08.png";
import showcase10 from "@/assets/showcase/showcase-10.png";

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Kontakt</h1>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact details cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Spoločnosť</h3>
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
                <h3 className="font-semibold">Telefón</h3>
              </div>
              <a href="tel:+421907024315" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+421 907 024 315</a>
              <a href="tel:+421903434591" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+421 903 434 591</a>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">E-mail</h3>
              </div>
              <a href="mailto:info@effis.sk" className="text-muted-foreground hover:text-primary text-sm transition-colors">info@effis.sk</a>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Adresa</h3>
              </div>
              <p className="text-muted-foreground text-sm">Zelená 883/13</p>
              <p className="text-muted-foreground text-sm">900 45 Malinovo</p>
              <p className="text-muted-foreground text-sm">Slovensko</p>
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <img src={showcase01} alt="Detský nábytok" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-6">
              <img src={showcase05} alt="Detská izba" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <img src={showcase03} alt="Školský nábytok" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-6">
              <img src={showcase08} alt="Kancelársky nábytok" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <img src={showcase06} alt="Detský nábytok" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md mt-6">
              <img src={showcase10} alt="Univerzitný nábytok" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
