const Gallery = () => {
  const works = [
    {
      title: "BMW X5 - Премиум система",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
      description: "Установка Hi-Fi системы с сабвуфером",
    },
    {
      title: "Mercedes C-Class",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
      description: "Замена штатной акустики",
    },
    {
      title: "Audi A4 - Шумоизоляция",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      description: "Полная шумовиброизоляция салона",
    },
    {
      title: "Toyota Camry",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      description: "Установка парктроников и камеры",
    },
    {
      title: "Volkswagen Golf",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
      description: "Система обзора 360°",
    },
    {
      title: "Hyundai Solaris",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
      description: "Бюджетная аудиосистема",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
          Примеры наших работ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
