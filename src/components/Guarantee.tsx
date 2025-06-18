import { Shield, Clock, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <Shield className="h-16 w-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">
          Гарантия качества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              12 месяцев
            </h3>
            <p className="text-blue-100">Гарантия на все работы</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Качество</h3>
            <p className="text-blue-100">
              Только сертифицированное оборудование
            </p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Надежность
            </h3>
            <p className="text-blue-100">Опыт работы более 10 лет</p>
          </div>
        </div>
        <p className="text-blue-100 text-lg leading-relaxed">
          Мы настолько уверены в качестве наших работ, что предоставляем полную
          гарантию на все виды установки автозвука и дополнительного
          оборудования.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
