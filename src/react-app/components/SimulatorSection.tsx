import { Shield } from 'lucide-react';

export default function SimulatorSection() {
  return (
    <section id="simulator" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Faça agora sua <span className="text-nobrecar-orange">simulação gratuita</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-nobrecar-orange/5 to-nobrecar-orange/10 rounded-2xl p-8 lg:p-12 border border-nobrecar-orange/20">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-nobrecar-orange/30">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-500" />
                <h4 className="font-semibold text-gray-900">Garantia de Privacidade</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Sem compromisso e 100% sigiloso. Não afeta seu score.
              </p>
            </div>

            <a
              href="https://wa.me/5548996863470?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Nobrecar."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-nobrecar-orange hover:bg-nobrecar-dark-orange text-white py-4 px-8 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              🟠 Simular agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
