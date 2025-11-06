import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 bg-[#FFFAFA]/70 font-roboto text-black border-b-2 border-gray-100 backdrop-blur-md">
      <div className="container flex justify-between text-lg mx-8 ">
        <Link to="/home" className="text-2xl">
          <h1>SmartGen</h1>
        </Link>
        
        <div className="flex gap-8">
          <Link
            to="/home"
            className="border-b-2 border-transparent text-gray-600 hover:text-blue-300"
          >
            Inicio
          </Link>
          <Link
            to="/empresas"
            className="border-b-2 border-transparent text-gray-600 hover:text-blue-300"
          >
            Empresas
          </Link>
          <Link
            to="/categorias"
            className="border-b-2 border-transparent text-gray-600 hover:text-blue-300"
          >
            Categorias
          </Link>
          <Link
            to="/usuarios"
            className="border-b-2 border-transparent text-gray-600 hover:text-blue-300"
          >
            Usuários
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
