import type Empresa from "./Empresa";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  altura: number;
  peso: number;
  empresas?: Empresa[];
}
