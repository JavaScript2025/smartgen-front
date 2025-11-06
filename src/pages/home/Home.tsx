import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div
        className="
          pt-16 pb-24 lg:pt-20 lg:pb-32 
          bg-gradient-to-r from-blue-600 to-green-500 
          text-white shadow-xl
        "
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 m-10">
            Encontre os melhores parceiros
          </h1>

          <p className="text-lg opacity-90">
            Descubra empresas e serviços selecionados para você: Academias,
            nutrição, wellness e muito mais.
          </p>

          <div className="mt-8 max-w-2xl mx-auto flex shadow-2xl rounded-lg overflow-hidden">
            <div className="flex-grow">
              <label htmlFor="search-input" className="sr-only">
                Buscar empresas
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-white">
                  <MagnifyingGlass size={20} color="#433d3d" />
                </div>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Buscar empresas"
                  className="w-full h-12 py-2 pl-10 pr-4 text-gray-900 border-none focus:ring-0 focus:outline-none placeholder-gray-500 text-base bg-white"
                />
              </div>
            </div>

            <div className="relative">
              <select
                className="
                  appearance-none h-12 
                  bg-white text-gray-700 font-medium 
                  border-l border-gray-200 
                  pl-4 pr-10 py-2 focus:ring-0 focus:outline-none 
                  cursor-pointer text-base
                "
              >
                <option value="all">Todas</option>
                <option value="academies">SmartFit</option>
                <option value="academies">SuperFit</option>
                <option value="academies">SuperForce</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <CaretDown size={20} color="#433d3d" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
