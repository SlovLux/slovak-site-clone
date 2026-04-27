import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import effisLogo from "@/assets/effis-logo.png";

const navItems = [
  { label: "O nás", path: "/o-nas" },
  { label: "Školský nábytok", path: "/skolsky-nabytok" },
  { label: "Detský nábytok", path: "/detsky-nabytok" },
  { label: "Kancelársky nábytok", path: "/kancelarsky-nabytok" },
  { label: "Nábytok pre sociálne ubytovanie", path: "/nabytok-pre-utulky" },
  { label: "Nábytok pre univerzity", path: "/nabytok-pre-univerzity" },
  { label: "Realizované projekty", path: "/realizovane-projekty" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 flex items-center gap-2" aria-label="Domov">
          <img src={effisLogo} alt="effis s.r.o." className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex flex-1" />

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center justify-center divide-x divide-primary-foreground/20">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors whitespace-nowrap ${
                    location.pathname === item.path ? "bg-primary-foreground/10" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
