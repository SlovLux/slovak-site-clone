import { useState } from "react";
import { CatalogSubcategory } from "@/data/catalogData";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  title: string;
  intro: string;
  subcategories: CatalogSubcategory[];
  imageBasePath: string; // e.g. "/src/assets/catalog/"
}

const PAGE_SIZE = 12;

const SubcategoryBlock = ({ sub, imageBasePath }: { sub: CatalogSubcategory; imageBasePath: string }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(sub.products.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = sub.products.slice(start, start + PAGE_SIZE);

  const isExternal = (src: string) => /^https?:\/\//.test(src);

  return (
    <section id={sub.slug} className="scroll-mt-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Podkategória
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {sub.name}
          </h2>
        </div>
        <span className="hidden md:inline-block text-sm text-muted-foreground">
          {sub.products.length} {sub.products.length === 1 ? "produkt" : sub.products.length < 5 ? "produkty" : "produktov"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((product) => (
          <article
            key={`${sub.slug}-${product.code}-${start + visible.indexOf(product)}`}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-secondary/60 to-muted overflow-hidden">
              <img
                src={isExternal(product.image) ? product.image : `${imageBasePath}${product.image}`}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {product.code && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 text-[10px] font-mono font-medium text-muted-foreground shadow-sm">
                  {product.code}
                </div>
              )}
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                {product.name}
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
            <ChevronLeft className="h-4 w-4 mr-1" /> Predchádzajúca
          </Button>
          <span className="text-sm text-muted-foreground px-3">
            Strana {page} z {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Ďalšia <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </section>
  );
};

const CatalogSubcategoryView = ({ title, intro, subcategories, imageBasePath }: Props) => {
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
        <nav aria-label="Podkategórie" className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border/60 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Prehľad podkategórií
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
                    {sub.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-20">
          {subcategories.map((sub) => (
            <SubcategoryBlock key={sub.slug} sub={sub} imageBasePath={imageBasePath} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatalogSubcategoryView;
