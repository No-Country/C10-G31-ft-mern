import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { IoLocationOutline } from 'react-icons/io5'
import Header from "@/components/shared/Headerspotech"
import Style from "../styles/MethodDelivery.module.css";

const MethodDelivery = () => {
    return (
        <div className={Style.ContainerMethods}>
            <Header />
            <div className={Style.MethodsDeliverys}>
                <div className={Style.BackMethods}>
                    <Link href={'/'}>
                        <FaArrowLeft />
                    </Link>
                    <p>Seleccionar metodo de entrega</p>
                </div>
                <div className={Style.ContainerLocation}>
                    <div>
                        <p className={Style.Location1}>Republica Siria 2335</p>
                        <p className={Style.Location2}>C.P. 6000 - Junin, Buenos Aires</p>
                    </div>
                    <div className={Style.ContainerbuttonLocation}>
                        <IoLocationOutline className={Style.IconLocation} />
                        <button className={Style.buttonLocation}>Cambiar ubicacion</button>
                    </div>
                </div>
                <div className={Style.SectionReceive}>
                        <p>Recibir</p>
                        <div className={Style.OptionReceive}>
                            <input type="radio" />
                            <p className={Style.WarningReceive}>Llega a tu domicilio el martes</p>
                            <p>1889,08</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MethodDelivery
