import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'

const ChangePaswword = () => {
    return(
        <div>
            <Header />
            <div className="p-3 mt-24 md:mt-16 lg:mt-16 lg:w-4/5 lg:m-auto block">
                <div className="w-full flex items-center gap-4">
                    <FaArrowLeft />
                    <p className="font-bold">Cambiar contraseña</p>
                </div>
                <div className="w-full mt-7 md:w-4/5 md:mt-10 md:shadow-xl md:m-auto md:border-2 md:p-7 md:rounded md:border-[#3681F0]">
                    <form className="w-full" action="">
                        <div className="mb-3">
                            <p>Contraseña actual</p>
                            <input className="w-full p-1 rounded border-gray-400 border-2" type="text" name="" id="" />
                        </div>
                        <div className="mb-3">
                            <p>Nueva contraseña <span className="text-sm text-gray-300">Minimo 8 caracteres, una mayuscula y una minuscula</span></p>
                            <input className="w-full p-1 rounded border-gray-400 border-2" type="text" name="" id="" />
                        </div>
                        <div >
                            <p>Confirmar contraseña</p>
                            <input className="w-full p-1 rounded border-gray-400 border-2" type="text" name="" id="" />
                        </div>
                        <button className="py-2 px-10 block mt-5 m-auto rounded bg-[#3681F0] text-white">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePaswword
