import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Empresa {
  id: number;
  titulo: string;
  texto: string;
  localizacao: string;
  telefone_contato: string;
  instagram: string;
  categoria?: Categoria;
  usuario?: Usuario;
}