import { useState, useEffect } from "react";
import type Empresa from "../../../models/Empresa";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../assets/utils/ToastAlerta";
import { useNavigate, useParams } from "react-router-dom";

function DeletarEmpresa() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [empresa, setEmpresa] = useState<Empresa>({} as Empresa);

  const { id } = useParams<{ id: string }>();

  /*const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token*/

  async function buscarPorId(id: string) {
    try {
      await buscar(`/empresas/${id}`, setEmpresa);
    } catch (error: any) {
      ToastAlerta("Empresa não encontrada!", "info");
    }
  }

  /*useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info")
            navigate('/')
        }
    }, [token])*/

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function handleDeletarEmpresa() {
    setIsLoading(true);

    try {
      await deletar(`/empresas/${id}`, {});
      ToastAlerta("Empresa apagada com sucesso", "sucesso");
      retornar();
    } catch (error: any) {
      ToastAlerta(
        "Erro ao deletar empresa. Ela pode não existir mais no sistema.",
        "erro"
      );
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/empresas");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Empresa</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a empresa a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Empresa
        </header>
        <div className="p-4">
          <p className="text-xl h-full font-semibold">{empresa.titulo}</p>
          <p className="text-gray-600">{empresa.texto}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 transition-colors"
            onClick={retornar}
            disabled={isLoading}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleDeletarEmpresa}
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarEmpresa;
