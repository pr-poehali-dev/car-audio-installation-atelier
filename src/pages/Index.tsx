import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Staff from "@/components/Staff";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Staff />
      <Guarantee />
      <Contact />
    </div>
  );
};

export default Index;
