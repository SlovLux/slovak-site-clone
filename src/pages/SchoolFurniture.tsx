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
          <div
            key={`${product.name}-${idx}`}
            className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default SchoolFurniture;
