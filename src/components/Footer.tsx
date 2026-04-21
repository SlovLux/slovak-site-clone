import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">ARD Consulting</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>IČO: 54 766 206</p>
            <p>DIČ: 2121955561</p>
            <p>IČ DPH: SK2121955561</p>
            <p>Adresa: Zelená 883/13, 90045 Malinovo, Slovenská republika</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 ARD Consulting
        </div>
      </div>
    </footer>
  );
};

export default Footer;
