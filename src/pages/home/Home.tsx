import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import { ToastAlerta } from "../../assets/utils/ToastAlerta";
import { useState } from "react";
import { buscar } from "../../services/Service";
import type Empresa from "../../models/Empresa";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buscaEmpresa, setBuscaEmpresa] = useState<string>("");
  const [empresasEncontradas, setEmpresasEncontradas] = useState<Empresa[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuscaEmpresa(event.target.value);
  };

  const handleSearch = async () => {
    if (buscaEmpresa.trim() === "") {
      ToastAlerta(
        "Por favor, insira o nome de uma empresa para buscar.",
        "info"
      );
      return;
    }

    setIsLoading(true);
    try {
      await buscar(
        `/empresas/nome_empresa/${buscaEmpresa}`,
        setEmpresasEncontradas
      );
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta(
          "Erro de autenticação. Por favor, faça login novamente.",
          "erro"
        );
      } else {
        ToastAlerta("Erro ao buscar empresas. Tente novamente.", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-xl">
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
                  value={buscaEmpresa}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* <div className="relative">
              <select className="appearance-none h-12 bg-white text-gray-700 font-medium border-l border-gray-200 pl-4 pr-10 py-2 focus:ring-0 focus:outline-none cursor-pointer text-base">
                <option value="all">Todas</option>
                <option value="academies">Academias</option>
                <option value="nutricao">Nutrição</option>
                <option value="superforce">SuperForce</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <CaretDown size={20} color="#433d3d" />
              </div>
            </div> */}

            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="h-12 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Buscando..." : "Buscar"}
            </button>
          </div>
        </div>
      </div>

      {/* Área para exibir resultados */}
      {empresasEncontradas.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Resultados da Busca</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {empresasEncontradas.map((emp) => (
              <div
                key={emp.id}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2">{emp.titulo}</h3>
                <p className="text-gray-600 mb-2">{emp.texto}</p>
                <p className="text-sm text-gray-500">{emp.localizacao}</p>
                {emp.telefone_contato && (
                  <p className="text-sm mt-2">📞 {emp.telefone_contato}</p>
                )}
                {emp.instagram && <p className="text-sm">📱 {emp.instagram}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
