import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import type Empresa from "../../../models/Empresa"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarEmpresa() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [empresa, setEmpresa] = useState<Empresa>({} as Empresa)

    const { id } = useParams<{ id: string }>()

    /*const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token*/

    async function buscarPorId(id: string) {
        try {
            await buscar(`/empresas/${id}`, setEmpresa)
        } catch (error: any) {
                ToastAlerta("Empresa não encontrada!", "Info")
            
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
            buscarPorId(id)
        }
    }, [id])

    async function DeletarEmpresa() {
        setIsLoading(true)

        try {
            await deletar(`/empresas/${id}`)

            ToastAlerta('Empresa apagada com sucesso',"sucesso")

        } catch (error: any) {
                ToastAlerta('Empresa não encontrada, pois já não existe no sistema.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/empresas")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Empresa</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a empresa a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Empresa
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{empresa.titulo}</p>
                    <p>{empresa.texto}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarEmpresa}>

                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarEmpresa