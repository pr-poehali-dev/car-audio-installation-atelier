import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
          Контакты и запись
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-montserrat">
              Свяжитесь с нами
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Запись по телефону
                  </p>
                  <p className="text-xl text-blue-600 font-bold">
                    +7 (999) 123-45-67
                  </p>
                  <p className="text-gray-600 text-sm">
                    Звоните с 9:00 до 20:00
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Адрес</p>
                  <p className="text-gray-600">ул. Автомобильная, 15А</p>
                  <p className="text-gray-600">г. Москва</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Режим работы</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
              Запишитесь на консультацию
            </h3>
            <p className="text-gray-600 mb-6">
              Бесплатная диагностика и консультация по выбору оборудования.
              Расскажем о всех возможностях для вашего автомобиля.
            </p>
            <Button
              size="lg"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить сейчас
            </Button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Или напишите нам в WhatsApp: +7 (999) 123-45-67
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
