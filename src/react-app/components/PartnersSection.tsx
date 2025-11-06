import { useState, useEffect, useRef } from 'react';

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'BV', logo: '/bv.png' },
    { name: 'Santander', logo: '/santander.png' },
    { name: 'Pan', logo: '/pan.png' },
    { name: 'Bradesco', logo: '/bradesco.png' },
    { name: 'C6', logo: '/c6.png' },
    { name: 'Itaú', logo: '/itau.png' },
    { name: 'Kunna', logo: '/kunna.png' },
    { name: 'Via Certa', logo: '/viacerta.png' },
    { name: 'Omni', logo: '/omni.png' },
    { name: 'Daycoval', logo: '/daycoval.png' },
    { name: 'Sim', logo: '/sim.png' },
    { name: 'Creditas', logo: '/creditas.png' },
    { name: 'Crefaz', logo: '/crefaz.png' },
    { name: 'Simpala', logo: '/simpala.png' },
  ];

  // Duplicar parceiros múltiplas vezes para criar efeito infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(7);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        if (nextIndex === partners.length * 2) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Parceiro de mais de <span className="text-nobrecar-orange">15</span> <span className="text-nobrecar-orange">instituições financeiras</span>
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className={`flex ${currentIndex > 0 ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex items-center justify-center h-32 px-3">
                    <div className="bg-gray-100 rounded-lg p-4 w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

