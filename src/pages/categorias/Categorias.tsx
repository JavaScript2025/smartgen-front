import { TagIcon } from "@phosphor-icons/react";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import {Popup} from "reactjs-popup";
function Categorias() {
  return <>
  <div className="flex items-center justify-between p-4">

 
  <div className="flex flex-col pt-30 pl-50 ">
    <h2 className="text-3xl font-bold text-gray-800">
      Gerenciar Categorias
    </h2>
    <p className="text-1sm text-gray-500">
      Organize as categorias de serviços disponiveis.
    </p>
  </div>

 
  <div className="flex-shrink-0 mr-50 pt-30 pr-50">
    <button 
      className="
        bg-blue-500 hover:bg-blue-700 
        text-white font-bold 
        py-2 px-4 rounded-lg 
        transition duration-150 ease-in-out
        flex items-center gap-3
      "
    >
      <PlusIcon size={20} color="#ffffff" />
      Nova Categoria
    </button>
  </div>

</div>
  <div className="flex items-center justify-center h-96">
    <div className="bg-gray-300 inline-block p-4 rounded-4xl flex items-center">
      <TagIcon size={32} color="#000000"  />
    </div>
    <p className="font-bold">Nenhuma categoria cadastrada</p>
    <p>Comece adicionando uma nova categoria de serviço</p>
   </div>
  </>;
}

export default Categorias;
