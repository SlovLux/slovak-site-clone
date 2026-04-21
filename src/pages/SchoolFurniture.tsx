import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { schoolCategories } from "@/data/schoolCategories";

const SchoolFurniture = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Školský nábytok</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Vyberte si z našich kategórií školského nábytku. Ponúkame kompletný sortiment pre
        všetky typy vzdelávacích inštitúcií.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolCategories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/skolsky-nabytok/${cat.slug}`}
            className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {cat.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default SchoolFurniture;
