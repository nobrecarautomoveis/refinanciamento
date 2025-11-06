import { Calculator, FileText, PenTool, CreditCard } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calculator,
      title: "Simule seu crédito",
      description: "Informe o valor e o tipo de veículo."
    },
    {
      icon: FileText,
      title: "Envie seus documentos", 
      description: "Avaliamos seu perfil sem burocracia."
    },
    {
      icon: PenTool,
      title: "Assine digitalmente",
      description: "Processo todo online, sem sair de casa."
    },
    {
      icon: CreditCard,
      title: "Receba o dinheiro na conta",
      description: "Em até 24h após a assinatura do contrato."
    }
  ];



  return (
    <section className="py-32 lg:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simples, rápido e <span className="text-nobrecar-orange">100% online</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Número acima do ícone */}
                  <div className="flex justify-center mb-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-white font-semibold text-xs">{index + 1}</span>
                    </div>
                  </div>

                  {/* Ícone */}
                  <div className="w-20 h-20 bg-nobrecar-orange rounded-full flex items-center justify-center mx-auto group-hover:bg-nobrecar-dark-orange transition-colors shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5548996863470?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Nobrecar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-nobrecar-orange hover:bg-nobrecar-dark-orange text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🟠 Fazer minha simulação agora
          </a>
        </div>
      </div>
    </section>
  );
}
