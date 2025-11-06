export default function FinalCTASection() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-gray-900 via-nobrecar-gray-dark to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-nobrecar-orange/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nobrecar-orange/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Transforme seu veículo em <span className="text-nobrecar-orange">oportunidades</span> agora mesmo.
          </h2>

          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Empréstimo transparente, seguro e sem complicações do jeito <strong>Nobre<span className="text-nobrecar-orange">car</span> Financiamentos</strong>.
          </p>

          <div className="pt-8">
            <a
              href="https://wa.me/5548996863470?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Nobrecar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-nobrecar-orange hover:bg-nobrecar-dark-orange text-white px-12 py-6 rounded-xl text-xl lg:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-nobrecar-orange/50 hover:border-nobrecar-light-orange"
            >
              🟠 Simular agora meu empréstimo
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Taxa a partir de 1,49% a.m.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Receba em até 24h, após aprovação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>100% online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
