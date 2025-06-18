import { Volume2, Radio, Zap, Camera, Shield, Waves } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Volume2,
      title: "Установка динамиков",
      description: "Качественная установка акустических систем любой сложности",
    },
    {
      icon: Volume2,
      title: "Сабвуферы",
      description: "Монтаж сабвуферов для глубокого и мощного баса",
    },
    {
      icon: Zap,
      title: "Усилители",
      description: "Установка усилителей для улучшения качества звука",
    },
    {
      icon: Radio,
      title: "Магнитолы и ГУ",
      description: "Замена и установка головных устройств",
    },
    {
      icon: Camera,
      title: "Парктроники",
      description: "Установка парковочных радаров для безопасности",
    },
    {
      icon: Camera,
      title: "Обзор 360°",
      description: "Системы кругового обзора для полного контроля",
    },
    {
      icon: Shield,
      title: "Шумовиброизоляция",
      description: "Комплексная шумоизоляция салона автомобиля",
    },
    {
      icon: Waves,
      title: "Любые авто",
      description: "Работаем со всеми марками и моделями автомобилей",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
