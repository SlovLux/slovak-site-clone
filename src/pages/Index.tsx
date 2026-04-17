import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const heroSlides = [
  {
    image:
      "https://static.wixstatic.com/media/713410_beeb14688cb440bab3d89ddfe9a1221a~mv2.png/v1/fill/w_1920,h_608,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/713410_beeb14688cb440bab3d89ddfe9a1221a~mv2.png",
    title: "Hotové riešenia nábytku pre matematické a STEM učebne",
  },
  {
    image:
      "https://static.wixstatic.com/media/713410_38d2ced3a5cf48668b9de81bcab814a3~mv2.jpg/v1/fill/w_1920,h_608,al_c,q_90,enc_auto/713410_38d2ced3a5cf48668b9de81bcab814a3~mv2.jpg",
    title: "Školský nábytok pre moderné vzdelávacie inštitúcie",
  },
  {
    image:
      "https://static.wixstatic.com/media/713410_2ff7be57ad1c4f279b48e39df44dd2a6~mv2.jpg/v1/fill/w_1920,h_608,al_c,q_90,enc_auto/713410_2ff7be57ad1c4f279b48e39df44dd2a6~mv2.jpg",
    title: "Detský nábytok pre materské školy a herne",
  },
  {
    image:
      "https://static.wixstatic.com/media/713410_4cad429869bf4d009856dd6082540f35~mv2.jpg/v1/fill/w_1920,h_608,al_c,q_90,enc_auto/713410_4cad429869bf4d009856dd6082540f35~mv2.jpg",
    title: "Kancelársky nábytok pre produktívne pracovisko",
  },
  {
    image:
      "https://static.wixstatic.com/media/713410_d8fbf10efb5143a8a979c4b59f90e83b~mv2.jpg/v1/fill/w_1920,h_608,al_c,q_90,enc_auto/713410_d8fbf10efb5143a8a979c4b59f90e83b~mv2.jpg",
    title: "Nábytok pre ubytovne a internáty",
  },
  {
    image:
      "https://static.wixstatic.com/media/713410_e0ceb898ae944e369f85cbd288a58a0a~mv2.jpg/v1/fill/w_1920,h_608,al_c,q_90,enc_auto/713410_e0ceb898ae944e369f85cbd288a58a0a~mv2.jpg",
    title: "Nábytok pre univerzity a vysoké školy",
  },
];

const categories = [
  {
    name: "Školský nábytok",
    path: "/skolsky-nabytok",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600",
  },
  {
    name: "Detský nábytok",
    path: "/detsky-nabytok",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600",
  },
  {
    name: "Kancelársky nábytok",
    path: "/kancelarsky-nabytok",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
  },
];

const schoolProducts = [
  { name: "Školské zostavy", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400" },
  { name: "Dvojmiestne lavice", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400" },
  { name: "Žiacke stoličky", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" },
  { name: "Jedálenský nábytok", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400" },
  { name: "Školské tabule", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400" },
  { name: "Laboratórny nábytok", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400" },
];

const childrenProducts = [
  { name: "Detské stoly", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400" },
  { name: "Detské stoličky", image: "https://images.unsplash.com/photo-1587654780152-7da498006366?w=400" },
  { name: "Skrinky a regály", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" },
  { name: "Šatňové skrinky", image: "https://images.unsplash.com/photo-1564429238961-bf8fe18d4727?w=400" },
  { name: "Postieľky", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400" },
  { name: "Herné prvky", image: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=400" },
];

const officeProducts = [
  { name: "Kancelárske stoly", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" },
  { name: "Kancelárske stoličky", image: "https://images.unsplash.com/photo-1589364566560-7268fe138279?w=400" },
  { name: "Konferenčný nábytok", image: "https://images.unsplash.com/photo-1431540015160-0295a5e6fff4?w=400" },
  { name: "Recepčné pulty", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-bold text-foreground">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentSlide ? "bg-primary" : "bg-background/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* EU Banner */}
      <section className="bg-muted overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-2 text-lg font-semibold text-foreground">
              🇪🇺 EU Facilita
            </span>
          ))}
        </div>
      </section>

      {/* Main Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="group relative h-48 rounded-xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 bg-primary p-4">
                <span className="text-primary-foreground font-semibold">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* School Furniture */}
      <ProductSection title="Školský nábytok" products={schoolProducts} />

      {/* Children's Furniture */}
      <ProductSection title="Detský nábytok" products={childrenProducts} />

      {/* Office Furniture */}
      <ProductSection title="Kancelársky nábytok" products={officeProducts} />

      {/* Public Procurement CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Pracujete s verejným obstarávaním?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Poskytujeme podporu pri tendroch a základnú aj podrobnú technickú dokumentáciu!
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 shrink-0" />
              <span>Viac ako 5 000 škôl vybavených v rámci projektov</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 shrink-0" />
              <span>Realizované tendrové projekty</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 shrink-0" />
              <span>Certifikované produkty s kontrolou kvality</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 shrink-0" />
              <span>Certifikované produkty s kontrolou kvality</span>
            </div>
          </div>

          <Link
            to="/kontakt"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Zanechať požiadavku
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: { name: string; image: string }[];
}) => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.name}
          className="group relative rounded-xl overflow-hidden bg-muted"
        >
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary p-3">
            <span className="text-primary-foreground text-sm font-medium">{product.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Index;
