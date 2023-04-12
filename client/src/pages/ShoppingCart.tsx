import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/Shopping_cart.module.css'
import { FaArrowLeft, FaRegDotCircle, FaCreditCard, FaRegTrashAlt} from 'react-icons/fa'
import Header from '../components/shared/Header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'


interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    price: number
    seller: string[]
    apdatedAt: string
    amount: number
}

interface ListProducts {
  products: Product[]
}

const ShoppingCart = () => {

    const [ products, setProducts ] = useState<ListProducts['products']>([])
    const router = useRouter();

    useEffect(() => {
        const cartRaw = localStorage.getItem('cart')
        const cart: ListProducts['products'] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
        setProducts(cart)
    }, [])

    return(
        <div className={Style.container_cart}>
            <Header />
            <div className={Style.back_cart}>
                <FaArrowLeft className={Style.icon_back} onClick={() => router.back()} />
                <p>Carrito</p>
            </div>
            {products.length ? products.map(product => (
                <div key={product._id} className={Style.products_added}>
                    <div className={Style.product}>
                        <div className={Style.flex_icon_image}>
                            <FaRegDotCircle />
                            <div>
                                <Image className={Style.product_image} width={400} height={400} src={product.image[0]} alt={`Imagen del producto ${product.name}`}  />
                            </div>
                        </div>
                        <div className={Style.descripcion_product}>
                            <Link href={`/ProductDetail/${product._id}`} >
                                <p>{product.name}</p>
                            </Link>
                            <p>${product.price}</p>
                        </div>
                    </div>
                </div>
            )): (
                <p>Agrega Productos y podrás encontrarlos aquí</p>
            )}
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

export default ShoppingCart
