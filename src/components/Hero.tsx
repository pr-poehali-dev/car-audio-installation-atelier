import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          AutoSound Pro
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональная установка автозвука и дополнительного оборудования.
          Работаем с любыми автомобилями. Гарантия 1 год.
        </p>
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
        >
          <Phone className="mr-2 h-5 w-5" />
          Записаться на установку
        </Button>
      </div>
    </section>
  );
};

export default Hero;
