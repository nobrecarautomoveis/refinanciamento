import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "O que é o empréstimo com garantia de veículo?",
      answer: "O empréstimo com garantia de veículo é uma modalidade de crédito na qual o veículo fica como garantia para o banco até a quitação do contrato. Dentre os diversos benefícios, o que mais chama atenção é que o valor é depositado diretamente na conta do cliente, podendo ser utilizado para qualquer finalidade, e o prazo para pagamento pode ser estendido em até 48 parcelas."
    },
    {
      question: "Meu veículo não está quitado, é possível fazer o empréstimo com garantia de veículo?",
      answer: "Sim, realizando a quitação do veículo, é necessário incluir o respectivo valor de quitação ao montante financiado."
    },
    {
      question: "O carro fica no meu nome?",
      answer: "Sim! O veículo continua em seu nome e uso, servindo apenas como garantia contratual."
    },
    {
      question: "Em quanto tempo recebo o dinheiro?",
      answer: "Após aprovação, o crédito pode cair em até 24h úteis."
    },
    {
      question: "A partir de qual ano o veículo é aceito?",
      answer: "A partir de 2002, sugerimos que você converse com um de nossos consultores, pois podem ocorrer alterações de acordo com a política aplicada por cada instituição bancária."
    },
    {
      question: "O veículo precisa estar em meu nome no momento da contratação do empréstimo com garantia de veículo?",
      answer: "Não, faremos toda a análise junto aos bancos e, caso seja aprovado, você receberá todas as orientações sobre como prosseguir."
    },
    {
      question: "Há custos antecipados?",
      answer: "Não! Todo o processo é gratuito até a aprovação final."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-32 lg:py-40 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas frequentes sobre <span className="text-nobrecar-orange">empréstimo com garantia</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-nobrecar-orange/30 transition-colors">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-nobrecar-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
