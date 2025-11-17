import { useState } from "react";
import { Link } from "react-router-dom";

 function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "FIGURAS", path: "/figuras" },
    { name: "PELUCHES", path: "/peluches" },
    { name: "ROPA", path: "/ropa" },
    { name: "CARTAS", path: "/cartas" },
    { name: "OFERTAS", path: "/ofertas" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Buscando:", searchQuery);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Barra Superior */}
      <div className="bg-gradient-to-r from-[#EA4335] to-[#D32F2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo y Nombre */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#EA4335] rounded-lg"
              aria-label="Ir a página principal de Poke Store"
            >
              <img
                src="/InicioIcon.svg"
                alt="Logo de Poke Store"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                loading="lazy"
              />
              <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                POKE STORE
              </span>
            </Link>

            {/* Barra de Búsqueda - Desktop y Tablet */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex-1 max-w-md shadow-lg hover:shadow-xl transition-shadow"
              role="search"
            >
              <label htmlFor="search-desktop" className="sr-only">
                Buscar productos
              </label>
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="search-desktop"
                type="search"
                placeholder="Buscar productos Pokémon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none text-sm"
                aria-label="Campo de búsqueda"
              />
            </form>

            {/* Botón Acceder - Desktop */}
            <Link
              to="/login"
              className="hidden sm:flex items-center justify-center bg-gradient-to-b from-gray-200 to-white hover:from-gray-300 hover:to-gray-100 text-gray-800 font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              ACCEDER
            </Link>

            {/* Botón Menú Móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Barra de Búsqueda Móvil */}
          <form
            onSubmit={handleSearch}
            className="md:hidden pb-3"
            role="search"
          >
            <label htmlFor="search-mobile" className="sr-only">
              Buscar productos
            </label>
            <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="search-mobile"
                type="search"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none text-sm"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Barra de Navegación - Desktop */}
      <nav
        className="hidden md:block bg-gradient-to-r from-gray-600 to-gray-700 shadow-inner"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-around items-center py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-white font-semibold text-xs sm:text-sm hover:text-yellow-300 transition-colors duration-300 hover:scale-105 inline-block px-4 py-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-gray-700 shadow-2xl animate-slideDown"
          aria-label="Menú de navegación móvil"
        >
          <ul className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-semibold text-sm py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-600">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-b from-gray-200 to-white text-gray-800 font-semibold py-3 px-4 rounded-lg hover:from-gray-300 hover:to-gray-100 transition-colors"
              >
                ACCEDER
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;