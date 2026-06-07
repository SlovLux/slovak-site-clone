import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap, Baby, Briefcase, Home, BookOpen } from "lucide-react";
import effisLogo from "@/assets/effis-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [mobileFurnitureOpen, setMobileFurnitureOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const furnitureItems = [
    { label: t("fm.school"), path: "/skolsky-nabytok", description: t("fm.school.desc"), icon: GraduationCap },
    { label: t("fm.kids"), path: "/detsky-nabytok", description: t("fm.kids.desc"), icon: Baby },
    { label: t("fm.office"), path: "/kancelarsky-nabytok", description: t("fm.office.desc"), icon: Briefcase },
    { label: t("fm.shelter"), path: "/nabytok-pre-utulky", description: t("fm.shelter.desc"), icon: Home },
    { label: t("fm.uni"), path: "/nabytok-pre-univerzity", description: t("fm.uni.desc"), icon: BookOpen },
  ];

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/o-nas" },
    { label: t("nav.furniture"), path: "#furniture", isDropdown: true },
    { label: t("nav.projects"), path: "/realizovane-projekty" },
    { label: t("nav.contact"), path: "/kontakt" },
  ];

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-full border border-border bg-background overflow-hidden text-xs font-semibold ${className}`}>
      <button
        type="button"
        onClick={() => setLang("sk")}
        className={`px-2.5 py-1 transition-colors ${lang === "sk" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
        aria-pressed={lang === "sk"}
      >
        SK
      </button>
      <button
        type="button"
        onClick={() => setLang("hu")}
        className={`px-2.5 py-1 transition-colors ${lang === "hu" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
        aria-pressed={lang === "hu"}
      >
        HU
      </button>
    </div>
  );

  const isFurnitureActive = furnitureItems.some((i) => location.pathname === i.path);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="shrink-0 flex items-center gap-2">
          <img src={effisLogo} alt="effis s.r.o." className="h-16 md:h-20 w-auto object-contain" />
        </div>

        <div className="hidden md:flex flex-1" />

        <div className="hidden md:block">
          <LangSwitch />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangSwitch />
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center justify-center divide-x divide-primary-foreground/20">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <li
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setFurnitureOpen(true)}
                    onMouseLeave={() => setFurnitureOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setFurnitureOpen((v) => !v)}
                      className={`flex items-center gap-1 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors whitespace-nowrap ${
                        isFurnitureActive ? "bg-primary-foreground/10" : ""
                      }`}
                      aria-expanded={furnitureOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          furnitureOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega-dropdown */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[640px] max-w-[95vw] z-50 transition-all duration-200 ${
                        furnitureOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-3">
                          {furnitureItems.map((f) => {
                            const Icon = f.icon;
                            const active = location.pathname === f.path;
                            return (
                              <Link
                                key={f.path}
                                to={f.path}
                                onClick={() => setFurnitureOpen(false)}
                                className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-muted ${
                                  active ? "bg-muted" : ""
                                }`}
                              >
                                <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span className="flex flex-col">
                                  <span className="text-sm font-semibold text-foreground leading-tight">
                                    {f.label}
                                  </span>
                                  <span className="text-xs text-muted-foreground mt-0.5 leading-snug">
                                    {f.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
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
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="p-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <li key={item.path}>
                      <button
                        type="button"
                        onClick={() => setMobileFurnitureOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm rounded-lg hover:bg-muted"
                        aria-expanded={mobileFurnitureOpen}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileFurnitureOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileFurnitureOpen && (
                        <ul className="mt-1 ml-2 pl-3 border-l border-border space-y-1">
                          {furnitureItems.map((f) => {
                            const Icon = f.icon;
                            return (
                              <li key={f.path}>
                                <Link
                                  to={f.path}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileFurnitureOpen(false);
                                  }}
                                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                                >
                                  <Icon className="h-4 w-4 text-primary" />
                                  {f.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
