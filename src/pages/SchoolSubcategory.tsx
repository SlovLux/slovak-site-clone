import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { schoolCategories } from "@/data/schoolCategories";
import NotFound from "./NotFound";

const SchoolSubcategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = schoolCategories.find((c) => c.slug === slug);

  if (!category) return <NotFound />;

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/skolsky-nabytok" className="hover:text-primary">Školský nábytok</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{category.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">{category.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div key={product.name} className="group rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-square overflow-hidden bg-muted">
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
};

export default SchoolSubcategory;