const Pricing = () => {
  const prices = [
    { service: "Установка передних динамиков", price: "от 2 000 ₽" },
    { service: "Установка задних динамиков", price: "от 1 500 ₽" },
    { service: "Установка сабвуфера", price: "от 3 000 ₽" },
    { service: "Установка усилителя", price: "от 2 500 ₽" },
    { service: "Замена магнитолы", price: "от 1 800 ₽" },
    { service: "Установка парктроников", price: "от 4 000 ₽" },
    { service: "Система обзора 360°", price: "от 15 000 ₽" },
    { service: "Шумоизоляция двери", price: "от 3 500 ₽" },
    { service: "Полная шумоизоляция", price: "от 25 000 ₽" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
          Прайс-лист
        </h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="space-y-4">
            {prices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-gray-800 font-medium">
                  {item.service}
                </span>
                <span className="text-blue-600 font-semibold text-lg">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              * Точная стоимость зависит от марки автомобиля и сложности работ.
              Консультация и диагностика — бесплатно!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
