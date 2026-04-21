import { Building2, MapPin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground leading-none">
                  ARD Consulting
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 tracking-wide uppercase">
                  Nábytkové riešenia
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Kvalitný nábytok pre školy, škôlky, kancelárie a sociálne ubytovanie.
            </p>
          </div>

          {/* Company details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card/60 backdrop-blur border border-border/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground">
                  Fakturačné údaje
                </span>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">IČO</dt>
                  <dd className="font-mono font-medium text-foreground">54 766 206</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">DIČ</dt>
                  <dd className="font-mono font-medium text-foreground">2121955561</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">IČ DPH</dt>
                  <dd className="font-mono font-medium text-foreground">SK2121955561</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-card/60 backdrop-blur border border-border/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground">
                  Sídlo spoločnosti
                </span>
              </div>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                Zelená 883/13<br />
                900 45 Malinovo<br />
                Slovenská republika
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© 2025 ARD Consulting. Všetky práva vyhradené.</span>
          <span className="tracking-wide">Made with care in Slovakia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
