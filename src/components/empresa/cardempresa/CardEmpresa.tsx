import { Link } from 'react-router-dom'
import type Empresa from "../../../models/Empresas"

interface CardEmpresasProps {
    empresa: Empresa
}

function CardEmpresa({ empresa }: CardEmpresasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={empresa.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={empresa.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {empresa.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{empresa.titulo}</h4>
                    <p>{empresa.texto}</p>
                    <p>Categoria: {empresa.categoria?.tipo_servico}</p>
                    <p>Localização: {empresa.localizacao}</p>
                    <p>Telefone: {empresa.telefone_contato}</p>
                    <p>Instagram: {empresa.instagram}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarempresa/${empresa.id}`}
                    className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarempresa/${empresa.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardEmpresa