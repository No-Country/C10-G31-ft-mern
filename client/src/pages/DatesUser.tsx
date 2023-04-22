import Header from "@/components/shared/Headerspotech"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const DatesUser = () => {
    return(
        <div className="block">
            <Header />
            <div className="p-3 mt-24 lg:mt-16 lg:w-4/5 lg:m-auto block">
                <div className="w-full mb-4 flex items-center gap-4">
                    <FaArrowLeft />
                    <p className="font-bold">Mis datos</p>
                </div>
                <p className="font-bold">Datos de la cuenta</p>
                <div className="w-full mt-4 p-3 rounded-tl rounded-tr border-2 border-red-600 flex gap-5 items-center justify-between">
                    <div className="w-full md:w-3/5 md:flex md:items-center md:justify-between">
                        <p>Nombre/s y apellido/s</p>
                        <p>Nombre Apellido</p>
                    </div>
                    <FaArrowRight className="text-[#50C21F]"/>
                </div>
                <div className="w-full p-3 border-2 border-red-600 flex gap-5 items-center justify-between">
                    <div className="w-full md:w-3/5 md:flex md:items-center md:justify-between">
                        <p>E-mail</p>
                        <p>Correo de usuario</p>
                    </div>
                    <FaArrowRight className="text-[#50C21F]"/>
                </div>
                <div className="w-full p-3 border-2 border-red-600 flex gap-5 items-center justify-between">
                    <div className="w-full md:w-3/5 md:flex md:items-center md:justify-between">
                        <p>N° de telefono</p>
                        <p>Numero de telefono</p>
                    </div>
                    <FaArrowRight className="text-[#50C21F]"/>
                </div>
                <div className="w-full p-3 rounded-bl rounded-br border-2 border-red-600 flex gap-5 items-center justify-between">
                    <div className="w-3/5 flex justify-between items-center">
                        <p>Contraseña</p>
                        <p>***********</p>
                    </div>
                    <FaArrowRight className="text-[#50C21F]"/>
                </div>
                <p className="my-6 font-bold">Domicilio de entrega</p>
                <div className="w-full p-3 border-2 border-red-600 rounded flex gap-5 items-center justify-between">
                    <div className="w-3/5 md:flex md:justify-between md:items-center">
                        <p>Domicilio</p>
                        <p>Direccion</p>
                    </div>
                    <FaArrowRight className="text-[#50C21F]"/>
                </div>
                <p className="my-6 font-bold">Tarjetas asociadas</p>
                <div className="w-full p-3 mb-5 border-2 border-red-600 rounded flex gap-5 items-center justify-between">
                    <div className="w-full flex justify-between">
                        <div>
                            <p>Tarjeta de credito</p>
                            <p className="text-sm">Mastercard</p>
                        </div>
                        <div>
                            <p>Terminada en 5678</p>
                            <p className="text-sm">Bamco avVillas</p>
                        </div>
                    </div>
                </div>
                <p className="text-[#013E9A] mb-5">Añadir nueva tarjeta</p>
            </div>
        </div>
    )
}

export default DatesUser
