import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Empresa from "../../../models/Empresa";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categorias from "../../../pages/categorias/Categorias";

function FormEmpresa() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo_servico: '', })
    
    const [empresa, setEmpresa] = useState<Empresa>({} as Empresa)

    /*const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token*/

    const { id } = useParams<{ id: string }>()

    async function buscarEmpresaId(id: string) {
        try {
            await buscar(`/empresas/${id}`, setEmpresa)
        } catch (error: any) {
        ToastAlerta("Empresa não encontrada!", "info")
            }
        
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta("Categoria não encontrada", "info")
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/Categorias', setCategorias)
        } catch (error: any) {
            ToastAlerta("Erro ao encontrar a categoria", "info")
    }
    }

    /*useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info");
            navigate('/');
        }
    }, [token])*/

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarEmpresaPorId(id)
        }
    }, [id])

    useEffect(() => {
        setEmpresa({
            ...empresa,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setEmpresa({
            ...empresa,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/empresas');
    }

    async function gerarNovaEmpresa(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/empresas`, empresa, setEmpresa);

                ToastAlerta('Empresa atualizada com sucesso', "sucesso")

            } catch (error: any) {
            
                    ToastAlerta('Erro ao atualizar a Empresa', "erro")
            
            }

        } else {
            try {
                await cadastrar(`/empresas`, empresa, setEmpresa)

                ToastAlerta('Empresa cadastrada com sucesso', "sucesso");

            } catch (error: any) {
                    ToastAlerta('Erro ao cadastrar a Empresa', "erro");
                }
            }
        }

        setIsLoading(false)
        retornar()
    

    const carregandoCategoria = categoria.tipo_servico === '';


    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Empresa' : 'Cadastrar Empresa'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovaEmpresa}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome da Empresa</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={empresa.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Dados da Empresa</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={empresa.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria da Empresa</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' 
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.tipo_servico}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                               disabled={carregandoCategoria}
                >
                    { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                           <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
        </div>
    );
}

export default FormEmpresa;