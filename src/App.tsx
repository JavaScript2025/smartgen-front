import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
// import Categorias from "./pages/categorias/Categorias";
// import Usuarios from "./pages/usuarios/Usuarios";
import DeletarEmpresa from "./components/empresa/deletarempresa/DeletarEmpresa";
import FormEmpresa from "./components/empresa/formempresa/FormEmpresa";
import Empresas from "./pages/empresas/Empresas";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/empresas" element={<Empresas />} /> 
            <Route path="/cadastrarempresas" element={<FormEmpresa />} />
            <Route path="/editarempresas/:id" element={<FormEmpresa />} />
            <Route path="/deletarempresas/:id" element={<DeletarEmpresa />} />
            {/* <Route path="/categorias" element={<Categorias />} />
            <Route path="/cadastrarcategorias" element={<Categorias />} />
            <Route path="/editarcategorias/:id" element={<Categorias />} />
            <Route path="/deletarcategorias/:id" element={<Categorias />} />
            <Route path="/usuarios" element={<Usuarios />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
