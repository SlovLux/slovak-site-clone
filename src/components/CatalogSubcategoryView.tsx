import { CatalogSubcategory } from "@/data/catalogData";

interface Props {
  title: string;
  intro: string;
  subcategories: CatalogSubcategory[];
  imageBasePath: string; // e.g. "/src/assets/catalog/"
}

const CatalogSubcategoryView = ({ title, intro, subcategories, imageBasePath }: Props) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-muted-foreground max-w-3xl">{intro}</p>
      </header>

      {/* Subcategory quick nav */}
      <nav aria-label="Podkategórie" className="mb-12 flex flex-wrap gap-2">
        {subcategories.map((sub) => (
          <a
            key={sub.slug}
            href={`#${sub.slug}`}
            className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {sub.name}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {subcategories.map((sub) => (
          <section key={sub.slug} id={sub.slug} className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
              {sub.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sub.products.map((product) => (
                <article
                  key={`${sub.slug}-${product.code}`}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/5] bg-background overflow-hidden">
                    <img
                      src={`${imageBasePath}${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                        {product.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground/70 pt-1">
                      Kód: {product.code}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default CatalogSubcategoryView;
