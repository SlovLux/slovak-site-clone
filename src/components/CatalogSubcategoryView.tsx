import { useState } from "react";
import { CatalogSubcategory } from "@/data/catalogData";
import { CatalogProduct } from "@/data/catalogData";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductDetailDialog from "./ProductDetailDialog";
import { useLanguage } from "@/i18n/LanguageContext";

interface Props {
  title: string;
  intro: string;
  subcategories: CatalogSubcategory[];
  imageBasePath: string; // e.g. "/src/assets/catalog/"
}

const PAGE_SIZE = 12;

const SubcategoryBlock = ({
  sub,
  imageBasePath,
  onProductClick,
}: {
  sub: CatalogSubcategory;
  imageBasePath: string;
  onProductClick: (p: CatalogProduct) => void;
}) => {
  const [page, setPage] = useState(1);
  const { t, tx } = useLanguage();
  const totalPages = Math.max(1, Math.ceil(sub.products.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = sub.products.slice(start, start + PAGE_SIZE);

  const isAbsolute = (src: string) => /^https?:\/\//.test(src) || src.startsWith("/");

  return (
    <section id={sub.slug} className="scroll-mt-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {t("csv.subcat")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {tx(sub.name)}
          </h2>
        </div>
        <span className="hidden md:inline-block text-sm text-muted-foreground">
          {sub.products.length} {sub.products.length === 1 ? t("csv.products.one") : sub.products.length < 5 ? t("csv.products.few") : t("csv.products.many")}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((product) => (
          <article
            key={`${sub.slug}-${product.code}-${start + visible.indexOf(product)}`}
            onClick={() => onProductClick(product)}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onProductClick(product);
              }
            }}
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-secondary/60 to-muted overflow-hidden">
              <img
                src={isAbsolute(product.image) ? product.image : `${imageBasePath}${product.image}`}
                alt={tx(product.name)}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                {tx(product.name)}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> {t("csv.prev")}
          </Button>
          <span className="text-sm text-muted-foreground px-3">
            {t("csv.page")} {page} {t("csv.of")} {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            {t("csv.next")} <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </section>
  );
};

const CatalogSubcategoryView = ({ title, intro, subcategories, imageBasePath }: Props) => {
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const [open, setOpen] = useState(false);
  const { t, tx } = useLanguage();

  const handleProductClick = (p: CatalogProduct) => {
    // ak je relatívna cesta, použijeme imageBasePath aby dialog ukázal správny obrázok
    const isAbsolute = /^https?:\/\//.test(p.image) || p.image.startsWith("/");
    setSelected({
      ...p,
      image: isAbsolute ? p.image : `${imageBasePath}${p.image}`,
    });
    setOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-secondary/40 via-background to-background">
      <section className="container mx-auto px-4 py-16">
        <header className="mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </header>

        {/* Subcategory quick nav */}
        <nav aria-label={t("csv.subcatAria")} className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border/60 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                {t("csv.overview")}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {subcategories.map((sub, idx) => (
                <a
                  key={sub.slug}
                  href={`#${sub.slug}`}
                  className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-background border border-border/60 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="flex-shrink-0 h-7 w-7 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center text-[11px] font-mono font-semibold text-primary group-hover:text-primary-foreground transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-tight">
                    {tx(sub.name)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-20">
          {subcategories.map((sub) => (
            <SubcategoryBlock
              key={sub.slug}
              sub={sub}
              imageBasePath={imageBasePath}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      <ProductDetailDialog product={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default CatalogSubcategoryView;
