export default function VehicleTypesSection() {
  const vehicleTypes = [
    {
      emoji: "🚘",
      title: "Carros",
      description: "Veículos de passeio de todas as marcas e modelos"
    },
    {
      emoji: "🏍️", 
      title: "Motos",
      description: "Motocicletas e ciclomotores em geral"
    },
    {
      emoji: "🚛",
      title: "Caminhões", 
      description: "Veículos pesados para transporte de cargas"
    },
    {
      emoji: "🚌",
      title: "Ônibus",
      description: "Veículos para transporte de passageiros"
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quais tipos de veículos posso usar como <span className="text-nobrecar-orange">garantia</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {vehicleTypes.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow group border border-nobrecar-orange/20">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {vehicle.emoji}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {vehicle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-nobrecar-orange rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Importante saber
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-lg">
            <p>
              <strong>Financiamos e refinanciamos</strong> veículos quitados ou financiados.
            </p>
            <p>
              O valor liberado se dá conforme a <strong>avaliação do veículo</strong> e análise financeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
