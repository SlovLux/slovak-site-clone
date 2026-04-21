import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Cooperation from "./pages/Cooperation.tsx";
import PaymentDelivery from "./pages/PaymentDelivery.tsx";
import Privacy from "./pages/Privacy.tsx";
import Procurement from "./pages/Procurement.tsx";
import SchoolFurniture from "./pages/SchoolFurniture.tsx";
import SchoolSubcategory from "./pages/SchoolSubcategory.tsx";
import ChildrenFurniture from "./pages/ChildrenFurniture.tsx";
import OfficeFurniture from "./pages/OfficeFurniture.tsx";
import ShelterFurniture from "./pages/ShelterFurniture.tsx";
import UniversityFurniture from "./pages/UniversityFurniture.tsx";
import Catalog from "./pages/Catalog.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/spolupraca" element={<Cooperation />} />
          <Route path="/platba-a-dodanie" element={<PaymentDelivery />} />
          <Route path="/ochrana-sukromia" element={<Privacy />} />
          <Route path="/verejne-obstaravanie" element={<Procurement />} />
          <Route path="/skolsky-nabytok" element={<SchoolFurniture />} />
          <Route path="/skolsky-nabytok/:slug" element={<SchoolSubcategory />} />
          <Route path="/detsky-nabytok" element={<ChildrenFurniture />} />
          <Route path="/kancelarsky-nabytok" element={<OfficeFurniture />} />
          <Route path="/nabytok-pre-utulky" element={<ShelterFurniture />} />
          <Route path="/nabytok-pre-univerzity" element={<UniversityFurniture />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
