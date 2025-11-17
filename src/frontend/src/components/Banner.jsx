import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative w-full">
      {/* Imagen de fondo */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/inicio.svg"
          alt="Productos Pokémon - Figuras, peluches, cartas y accesorios"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        
        {/* Contenido del Banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 drop-shadow-2xl">
              TENEMOS MÁS
              <br />
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                DE <span className="text-yellow-400">100</span> PRODUCTOS
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-blue-400">
                POKÉMON
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-10 drop-shadow-lg">
              Figuras, Peluches, Cartas, Ropa y Accesorios Oficiales
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/productos"
                className="group relative bg-gradient-to-r from-[#EA4335] to-[#D32F2F] hover:from-[#D32F2F] hover:to-[#C62828] text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VER TODOS LOS PRODUCTOS
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>

              <Link
                to="/ofertas"
                className="group bg-white hover:bg-yellow-300 text-[#EA4335] font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg"
              >
                <span className="flex items-center gap-2">
                  🔥 VER OFERTAS ESPECIALES
                </span>
              </Link>
            </div>

            {/* Indicador de scroll */}
            <div className="mt-12 animate-bounce hidden sm:block">
              <svg 
                className="w-8 h-8 mx-auto text-white opacity-70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de características */}
      <div className="bg-gradient-to-r from-[#EA4335] via-[#D32F2F] to-[#EA4335] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-bold text-sm sm:text-base">
                +10,000 Clientes Satisfechos
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-sm sm:text-base">
                Productos Oficiales
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span className="font-bold text-sm sm:text-base">
                Envío Gratis +$50
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}