import Header from "@/components/shared/Headerspotech"
import Style from '../styles/Payment_method.module.css'
import { FaArrowLeft } from 'react-icons/fa'
import Link from "next/link"

const PaymentMethod = () => {
    return(
        <div className={Style.Container_payment}>
            <Header />
            <div className={Style.Methods_pay}>
                <div className={Style.back_payment}>
                    <Link href={'/ShoppingCart'}>
                        <FaArrowLeft />
                    </Link>
                    <p>Seleccionar metodo de pago</p>
                </div>
                <div className={Style.Container_methods}>
                    <div className={Style.Method_pay}>
                        <input type='radio' />
                        <p>Tarjeta de credito/debito</p>
                    </div>
                    <div className={Style.Method_pay}>
                        <input type='radio' />
                        <p>Efectivo en el local</p>
                    </div>
                </div>
                <Link href={'/MethodDelivery'} className={Style.buttonContinue}>Continuar compra</Link>
            </div>
        </div>
    )
}

export default PaymentMethod
