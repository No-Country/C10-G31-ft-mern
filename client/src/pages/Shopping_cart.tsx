import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/Shopping_cart.module.css'
import { FaArrowLeft, FaRegDotCircle, FaCreditCard, FaRegTrashAlt} from 'react-icons/fa'
import Header from '../components/shared/Header'

const Carrito = () => {
    return(
        <div className={Style.container_cart}>
            <Header />
            <div className={Style.back_cart}>
                <Link href=''>
                    <FaArrowLeft className={Style.icon_back} />
                </Link>
                <p>Carrito</p>
            </div>
            <div className={Style.products_added}>
                <div className={Style.product}>
                    <div className={Style.flex_icon_image}>
                        <FaRegDotCircle />
                        <div>
                            <Image className={Style.product_image} src='' alt='' />
                        </div>
                    </div>
                    <div className={Style.descripcion_product}>
                        <p>Nombre producto</p>
                        <p>$70788,9</p>
                    </div>
                </div>
                <div className={Style.product}>
                    <div className={Style.flex_icon_image}>
                        <FaRegDotCircle />
                        <div>
                            <Image className={Style.product_image} src='' alt='' />
                        </div>
                    </div>
                    <div className={Style.descripcion_product}>
                        <p>Nombre producto</p>
                        <p>$70788,9</p>
                    </div>
                </div>
                <div className={Style.product}>
                    <div className={Style.flex_icon_image}>
                        <FaRegDotCircle />
                        <div>
                            <Image className={Style.product_image} src='' alt='' />
                        </div>
                    </div>
                    <div className={Style.descripcion_product}>
                        <p>Nombre producto</p>
                        <p>$70788,9</p>
                    </div>
                </div>
                <div className={Style.product}>
                    <div className={Style.flex_icon_image}>
                        <FaRegDotCircle />
                        <div>
                            <Image className={Style.product_image} src='' alt='' />
                        </div>
                    </div>
                    <div className={Style.descripcion_product}>
                        <p>Nombre producto</p>
                        <p>$70788,9</p>
                    </div>
                </div>
            </div> 
            <div className={Style.container_buttons}>
                    <button className={Style.button_pay}>
                        <FaCreditCard />
                        Pagar
                    </button>
                    <button className={Style.button_trash}>
                        <FaRegTrashAlt />
                    </button>
            </div>
        </div>
    )
}

export default Carrito
