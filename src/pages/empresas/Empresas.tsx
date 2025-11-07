import { useState } from "react";
import ListaEmpresas from "../../components/empresa/listaempresas/ListaEmpresas";
import { Plus } from "@phosphor-icons/react";
import ModalEmpresa from "../../components/empresa/modalempresa/ModalEmpresa";

function Empresas() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Empresas Parceiras
            </h1>
            <p className="text-gray-600">
              Gerencie todas as empresas cadastradas no sistema
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            <Plus size={20} color="#fff" />
            Nova Empresa
          </button>
        </div>

        <ListaEmpresas />
      </div>

      {/* Modal controlado externamente */}
      <ModalEmpresa open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Empresas;
