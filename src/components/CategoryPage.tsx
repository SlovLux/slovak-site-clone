import Layout from "@/components/Layout";

interface CategoryPageProps {
  title: string;
  description: string;
  products: { name: string; image: string; description: string }[];
}

const CategoryPage = ({ title, description, products }: CategoryPageProps) => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="group rounded-xl overflow-hidden border border-border">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default CategoryPage;
