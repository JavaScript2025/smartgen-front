import type Empresa from "./Empresa";

export default interface Categoria {
  id: number;
  tipo_servico: string;
  empresas?: Empresa[];
}
