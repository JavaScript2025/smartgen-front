import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Empresa from "../../../models/Empresa";
import { buscar } from "../../../services/Service";
import CardEmpresa from "../cardempresa/CardEmpresa";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaEmpresas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [postagens, setPEmpresas] = useState<Empresa[]>([])

    /*const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', "info")
            navigate('/')
        }
    }, [token])*/

    useEffect(() => {
        buscarEmpresas()    
    }, [empresas.length])

    async function buscarEmpresas() {
        try {

            setIsLoading(true)

            await buscar('/empresas', setEmpresas)
        } catch (error: any) {
            ToastAlerta("Erro ao buscar empresas","erro")
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && empresas.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhuma Empresa foi encontrada!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                empresas.map((empresa) => (
                                    <CardEmpresa key={empresa.id} empresa={empresa}/>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaEmpresas;