import Layout from "@/components/Layout";
import { schoolCategories } from "@/data/schoolCategories";

// Plochý zoznam: spojíme produkty zo všetkých kategórií do jedného zoznamu
const allProducts = schoolCategories.flatMap((cat) => cat.products);

const SchoolFurniture = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Školský nábytok</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Široký sortiment kvalitného školského nábytku pre všetky typy vzdelávacích inštitúcií.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map((product, idx) => (
          <article
            key={`${product.sku}-${idx}`}
            className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-square bg-background">
              <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-md shadow-sm">
                Kód {product.sku}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 pt-3">
              <h3 className="text-sm text-foreground leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
              <p className="text-base font-semibold text-foreground">
                {product.price.toFixed(2)} €
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default SchoolFurniture;
