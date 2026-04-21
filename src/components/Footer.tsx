import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">NIKAN</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Výrobca kvalitného nábytku pre školy, škôlky, kancelárie a verejné inštitúcie.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>+421 900 000 000</p>
              <p>info@nikan.sk</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Mapa stránok</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/kontakt" className="text-muted-foreground hover:text-primary">Kontakt</Link></li>
              <li><Link to="/o-nas" className="text-muted-foreground hover:text-primary">O nás</Link></li>
              <li><Link to="/spolupraca" className="text-muted-foreground hover:text-primary">Spolupráca</Link></li>
              <li><Link to="/platba-a-dodanie" className="text-muted-foreground hover:text-primary">Platba a dodanie</Link></li>
              <li><Link to="/ochrana-sukromia" className="text-muted-foreground hover:text-primary">Ochrana súkromia</Link></li>
              <li><Link to="/verejne-obstaravanie" className="text-muted-foreground hover:text-primary">Verejné obstarávanie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Produkty</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/skolsky-nabytok" className="text-muted-foreground hover:text-primary">Školský nábytok</Link></li>
              <li><Link to="/detsky-nabytok" className="text-muted-foreground hover:text-primary">Detský nábytok</Link></li>
              <li><Link to="/kancelarsky-nabytok" className="text-muted-foreground hover:text-primary">Kancelársky nábytok</Link></li>
              <li><Link to="/nabytok-pre-utulky" className="text-muted-foreground hover:text-primary">Nábytok pre sociálne ubytovanie</Link></li>
              <li><Link to="/nabytok-pre-univerzity" className="text-muted-foreground hover:text-primary">Nábytok pre univerzity</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 NIKAN GROUP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
