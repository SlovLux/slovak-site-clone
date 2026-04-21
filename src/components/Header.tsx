import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Školský nábytok", path: "/skolsky-nabytok" },
  { label: "Detský nábytok", path: "/detsky-nabytok" },
  { label: "Kancelársky nábytok", path: "/kancelarsky-nabytok" },
  { label: "Nábytok pre sociálne ubytovanie", path: "/nabytok-pre-utulky" },
  { label: "Nábytok pre univerzity", path: "/nabytok-pre-univerzity" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 flex items-center gap-2" aria-label="Domov">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/20" />
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Čo hľadáte..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>


        <div className="hidden md:flex flex-col text-sm text-right shrink-0">
          <a href="tel:+421900000000" className="flex items-center gap-1 text-foreground hover:text-primary">
            <Phone className="h-3.5 w-3.5" />
            +421 900 000 000
          </a>
          <a href="tel:+421900000001" className="text-foreground hover:text-primary">
            +421 900 000 001
          </a>
        </div>

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
                  className={`block px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors ${
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
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Čo hľadáte..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm"
              />
            </div>
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
            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:+421900000000" className="flex items-center gap-2 text-foreground">
                <Phone className="h-4 w-4" /> +421 900 000 000
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
