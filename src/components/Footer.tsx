import { Phone, Mail, MapPin } from "lucide-react";
import ardLogo from "@/assets/ard-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 lg:gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center p-1.5">
                <img src={ardLogo} alt="ARD Consulting" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight leading-none">ARD Consulting</h3>
                <p className="text-[11px] text-background/60 mt-1.5 tracking-widest uppercase">
                  Nábytkové riešenia
                </p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed max-w-sm">
              Kvalitný nábytok pre školy, škôlky, kancelárie a sociálne ubytovanie.
            </p>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-background/60">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+421907024315" className="flex items-center gap-3 text-background/85 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+421 907 024 315</span>
                </a>
              </li>
              <li>
                <a href="tel:+421903434591" className="flex items-center gap-3 text-background/85 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+421 903 434 591</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nikan.sk" className="flex items-center gap-3 text-background/85 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@nikan.sk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/85">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Zelená 883/13, 900 45 Malinovo</span>
              </li>
            </ul>
          </div>

          {/* Fakturačné údaje */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-background/60">
              Fakturačné údaje
            </h4>
            <dl className="text-sm divide-y divide-background/10">
              <div className="flex justify-between py-2.5">
                <dt className="text-background/60">IČO</dt>
                <dd className="font-mono font-medium">54 766 206</dd>
              </div>
              <div className="flex justify-between py-2.5">
                <dt className="text-background/60">DIČ</dt>
                <dd className="font-mono font-medium">2121955561</dd>
              </div>
              <div className="flex justify-between py-2.5">
                <dt className="text-background/60">IČ DPH</dt>
                <dd className="font-mono font-medium">SK2121955561</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 text-center text-xs text-background/50">
          © 2025 ARD Consulting. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
