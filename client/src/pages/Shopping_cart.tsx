import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/Shopping_cart.module.css'
import { FaBars, FaRegHeart, FaRegUserCircle, FaArrowLeft, FaRegDotCircle, FaCreditCard, FaRegTrashAlt} from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Carrito = () => {
    return(
        <div className={Style.container_cart}>
            <div className={Style.head_cart}>
                <div className={Style.container_1}>
                    <div className={Style.logo}>
                        Logo
                    </div>
                    <div className={Style.container_icons}>
                        <Link href=''>
                            <FaRegUserCircle className={Style.icon_head_cart} />
                        </Link>
                        <Link href=''>
                            <FaRegHeart className={Style.icon_head_cart} />
                        </Link>
                        <Link href=''>
                            <HiOutlineShoppingCart className={Style.icon_head_cart} />
                        </Link>
                    </div>
                </div>
                    <div className={Style.container_2}>
                    <FaBars className={Style.iconMenu} />
                    <input type='text' className={Style.seeker} />
                </div>
            </div>
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
