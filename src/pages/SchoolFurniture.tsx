import Layout from "@/components/Layout";
import { schoolProducts } from "@/data/schoolCategories";

const SchoolFurniture = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Školský nábytok</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Široký sortiment kvalitného školského nábytku pre všetky typy vzdelávacích inštitúcií.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {schoolProducts.map((product, idx) => (
          <article
            key={idx}
            className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-square bg-background">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 pt-3">
              <h3 className="text-sm text-foreground leading-snug min-h-[2.5rem]">
                {product.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default SchoolFurniture;
