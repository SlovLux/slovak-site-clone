import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Catalog = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Katalóg produktov</h1>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        Prezrite si náš kompletný katalóg nábytku. Pre získanie katalógu v PDF formáte nás kontaktujte.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { name: "Školský nábytok", path: "/skolsky-nabytok", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400" },
          { name: "Detský nábytok", path: "/detsky-nabytok", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400" },
          { name: "Kancelársky nábytok", path: "/kancelarsky-nabytok", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
          { name: "Nábytok pre útulky", path: "/nabytok-pre-utulky", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400" },
          { name: "Nábytok pre univerzity", path: "/nabytok-pre-univerzity", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" },
        ].map((cat) => (
          <Link key={cat.path} to={cat.path} className="group rounded-xl overflow-hidden border border-border">
            <div className="aspect-video overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 bg-primary text-primary-foreground font-semibold">{cat.name}</div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/kontakt" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          Požiadať o katalóg v PDF
        </Link>
      </div>
    </section>
  </Layout>
);

export default Catalog;
