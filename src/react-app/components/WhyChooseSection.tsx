import { DollarSign, Clock, FileX, Car, Users, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function WhyChooseSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "João Santos",
      text: "Consegui resolver minhas dívidas e ainda manter meu carro. Atendimento excelente!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maria Silva",
      text: "Processo rápido e transparente. Recomendo para todos que precisam de crédito com garantia!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Carlos Oliveira",
      text: "Melhor taxa que encontrei no mercado. A equipe foi muito prestativa do início ao fim.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ana Costa",
      text: "Sem burocracia, e sem pegadinhas. Tudo conforme prometido. Muito satisfeita!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Pedro Ferreira",
      text: "Recebi o dinheiro em 24h. Excelente atendimento e muito profissional. Voltaria com certeza!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Duplicar depoimentos para criar efeito infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Resetar para o início quando chegar ao final (sem animação visível)
  useEffect(() => {
    if (currentTestimonial === testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentTestimonial(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [currentTestimonial, testimonials.length]);

  const benefits = [
    {
      icon: DollarSign,
      title: "Taxas a partir de 1,49% ao mês",
      description: "As menores taxas do mercado para empréstimo com garantia"
    },
    {
      icon: Clock,
      title: "Após aprovação e assinatura do contrato",
      description: "Você recebe o crédito em sua conta em até 24h"
    },
    {
      icon: FileX,
      title: "Sem burocracia e sem pagamento antecipado",
      description: "Nada será cobrado até que sua proposta seja aprovada"
    },
    {
      icon: Car,
      title: "Você continua usando seu veículo normalmente",
      description: "O veículo serve apenas como garantia contratual"
    },
    {
      icon: Users,
      title: "Atendimento humano e personalizado",
      description: "Equipe especializada para tirar todas suas dúvidas"
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Nobrecar é referência em financiamentos com garantia de veículo em <span className="text-nobrecar-orange">Santa Catarina</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-nobrecar-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nobrecar-orange/20 transition-colors">
                  <Icon className="w-8 h-8 text-nobrecar-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentTestimonial * 100}%)`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full"
              >
                <div className="bg-nobrecar-orange/5 rounded-2xl p-8 lg:p-12 border border-nobrecar-orange/20">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-nobrecar-orange fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg lg:text-xl text-gray-700 mb-4 italic">
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="text-nobrecar-orange font-semibold">
                        — {testimonial.name}, cliente Nobrecar
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
