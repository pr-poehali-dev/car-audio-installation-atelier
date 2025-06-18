import { User, Award, Clock } from "lucide-react";

const Staff = () => {
  const team = [
    {
      name: "Александр Петров",
      position: "Главный мастер",
      experience: "12 лет",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      specialization: "Премиум Hi-Fi системы, шумоизоляция",
      achievements: "Сертификат Pioneer, JBL Professional",
    },
    {
      name: "Михаил Сидоров",
      position: "Мастер по электронике",
      experience: "8 лет",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      specialization: "Головные устройства, парктроники, камеры 360°",
      achievements: "Специалист по Alpine, Kenwood",
    },
    {
      name: "Дмитрий Козлов",
      position: "Мастер-установщик",
      experience: "6 лет",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      specialization: "Акустические системы, усилители",
      achievements: "Эксперт по работе с немецкими авто",
    },
    {
      name: "Андрей Волков",
      position: "Мастер по шумоизоляции",
      experience: "5 лет",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      specialization: "Виброизоляция, звукоизоляция салона",
      achievements: "Сертификат STP, работа с люксовыми авто",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1 font-montserrat">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {member.position}
              </p>

              <div className="flex items-center justify-center mb-3 text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{member.experience} опыта</span>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.specialization}
                </p>
              </div>

              <div className="flex items-center justify-center text-gray-500">
                <Award className="h-4 w-4 mr-1" />
                <span className="text-xs">{member.achievements}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Все наши мастера имеют профильное образование и регулярно проходят
            обучение у ведущих производителей автомобильной электроники
          </p>
        </div>
      </div>
    </section>
  );
};

export default Staff;
