import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      
      {/* Banner Hero debajo del Navbar */}
      <Banner />
      
      {/* Sección de Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
          Explora Nuestras Categorías
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Encuentra los mejores productos Pokémon organizados por categoría
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta Figuras */}
          <a
            href="/figuras"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-400 to-blue-600"
          >
            <div className="aspect-square flex items-center justify-center p-8">
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                🎮
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">FIGURAS</h3>
                <p className="text-white/90 text-sm">Coleccionables únicos</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Tarjeta Peluches */}
          <a
            href="/peluches"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-400 to-pink-600"
          >
            <div className="aspect-square flex items-center justify-center p-8">
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                🧸
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">PELUCHES</h3>
                <p className="text-white/90 text-sm">Suaves y adorables</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Tarjeta Ropa */}
          <a
            href="/ropa"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-yellow-400 to-yellow-600"
          >
            <div className="aspect-square flex items-center justify-center p-8">
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                👕
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">ROPA</h3>
                <p className="text-white/90 text-sm">Estilo trainer</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Tarjeta Cartas */}
          <a
            href="/cartas"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-400 to-purple-600"
          >
            <div className="aspect-square flex items-center justify-center p-8">
              <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                🃏
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">CARTAS</h3>
                <p className="text-white/90 text-sm">TCG oficial</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Sección de Productos Destacados */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
            Los Más Vendidos
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Descubre los productos favoritos de nuestros clientes
          </p>
          
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <span className="text-6xl mb-4 block">🎯</span>
            <p className="text-gray-600 text-lg font-semibold">
              Próximamente: Catálogo de productos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;