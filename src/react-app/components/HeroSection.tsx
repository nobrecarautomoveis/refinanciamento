import { Shield, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSimulate = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-nobrecar-gray-dark to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-32 lg:pb-40">
        {/* Logo alinhado com o conteúdo */}
        <div className="mb-1 lg:mb-2">
          <img
            src="/logo-nobrecar.png"
            alt="Nobrecar Soluções Financeiras"
            className="h-32 sm:h-40 lg:h-52 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Empréstimo com garantia de <span className="text-nobrecar-orange">veículo</span>
              </h1>
              <p className="text-base text-gray-200 leading-relaxed">
                Use seu carro, moto, caminhão ou ônibus e conquiste o crédito que precisa
                com as <strong className="text-nobrecar-orange">menores taxas do mercado</strong>.
              </p>
              <p className="text-base text-gray-300">
                Empréstimo seguro e com total transparência.<br />
                Receba a proposta ideal para o seu perfil em poucos minutos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5548996863470?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Nobrecar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nobrecar-orange hover:bg-nobrecar-dark-orange text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
              >
                🟠 Simule agora gratuitamente
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="relative">
                <div className="relative w-full h-96 bg-gradient-to-br from-nobrecar-gray-dark/80 to-black/80 rounded-xl overflow-hidden">
                  <video 
                    ref={videoRef}
                    src="https://nobrecarautomoveis.com.br/wp-content/uploads/2025/02/nobrecar-video-emprestimo-garantia-veiculo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover md:object-contain"
                    poster="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
                
                <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg z-20"
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6" />
                    ) : (
                      <Volume2 className="w-6 h-6" />
                    )}
                  </button>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-nobrecar-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Taxa a partir de 1,49% a.m.
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-nobrecar-orange/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-nobrecar-orange/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
