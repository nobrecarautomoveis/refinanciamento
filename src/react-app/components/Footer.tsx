import { MapPin, Phone, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nobrecar-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-start leading-none h-44 -mb-2">
              <img
                src="/logo-nobrecar.png"
                alt="Nobrecar Soluções Financeiras"
                className="h-44 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 -mt-1">
              Referência em empréstimo com garantia de veículo em Santa Catarina.
              Oferecemos as melhores condições do mercado com total transparência e segurança.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong>CNPJ:</strong> 38.243.057/0001-94
              </p>
              <p className="text-sm text-gray-400">
                <strong>Razão Social:</strong> Nobrecar Automóveis Ltda
              </p>
            </div>
          </div>

          <div className="pt-40 flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 items-start">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-nobrecar-orange flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Tijucas - SC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nobrecar-orange flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  (48) 9 9686-3470
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nobrecar-orange flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  contato@nobrecarautomoveis.com.br
                </span>
              </div>
            </div>
          </div>

          <div className="pt-40 lg:ml-auto flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
            <div className="space-y-3 items-start">
              <a href="https://nobrecarautomoveis.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-nobrecar-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="https://nobrecarautomoveis.com.br/equipe-nobrecar-automoveis" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-nobrecar-orange transition-colors">
                Equipe Nobrecar
              </a>
              <a href="https://www.procon.sc.gov.br" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-nobrecar-orange transition-colors">
                Código de Defesa do Consumidor
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-400" />
              <p className="text-xs text-gray-400">
                A Nobrecar Financiamentos atua como correspondente bancário autorizado, conforme <a href="https://www.bcb.gov.br/pre/normativos/res/2011/pdf/res_3954_v7_l.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400 transition-colors">Resolução BACEN 3954</a>.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              © 2025 Nobrecar Financiamentos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
