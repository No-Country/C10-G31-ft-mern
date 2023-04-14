import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/Shopping_cart.module.css'
import { FaArrowLeft, FaRegCircle, FaRegDotCircle, FaCreditCard, FaRegTrashAlt} from 'react-icons/fa'
import Header from '../components/shared/Header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { ProductCart } from '../types/products'


const ShoppingCart = () => {

    const [ products, setProducts ] = useState<ProductCart[]>([])
    const [ totalProducts, setTotalProducts ] = useState(0)
    const router = useRouter();

    useEffect(() => {
        const cartRaw = localStorage.getItem('cart')
        const cart: ProductCart[] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
        setProducts(cart)
        setTotalProducts(cart.length)
    }, [])

    const clearCart = () => {
        const cartDeleted = products.filter(product => !product.selected)
        localStorage.setItem('cart', JSON.stringify(cartDeleted))
        setProducts(cartDeleted)
        setTotalProducts(cartDeleted.length)
    }

    const changeSelected = (id: string) => {
        const newProducts = products.map(prod => prod._id === id ? {...prod, selected: !prod.selected} : prod)
        setProducts(newProducts)
        localStorage.setItem('cart', JSON.stringify(newProducts))
    }

    return(
        <div className={Style.container_cart}>
            <Header totalProducts={totalProducts} />
            <div className={Style.back_cart}>
                <FaArrowLeft className={Style.icon_back} onClick={() => router.back()} />
                <p>Carrito</p>
            </div>
            {products.length ? products.map(product => (
                <div key={product._id} className={Style.products_added}>
                    <div className={Style.product}>
                        <div className={Style.flex_icon_image}>
                            {product.selected ? (
                                <FaRegDotCircle className='text-[#F0604D] cursor-pointer' onClick={() => changeSelected(product._id)} />
                            ) : (
                                <FaRegCircle className='text-[#3681F0] cursor-pointer' onClick={() => changeSelected(product._id)} />
                            )}
                            <div>
                                <Image className={Style.product_image} width={400} height={400} src={product.image[0]} alt={`Imagen del producto ${product.name}`}  />
                            </div>
                        </div>
                        <div className={Style.descripcion_product}>
                            <Link href={`/ProductDetail/${product._id}`} >
                                <p>{product.name}</p>
                            </Link>
                            <p>${product.price}</p>
                            <p>Cantidad: {product.amount}</p>
                        </div>
                    </div>
                </div>
            )): (
                <p className='text-center mt-6 mb-8'>Agrega Productos y podrás encontrarlos aquí</p>
            )}
            <div className={Style.container_buttons}>
                {products.length > 0 && (
                    <>
                        <Link href='/PaymentMethod' >
                            <button className={Style.button_pay}>
                                <FaCreditCard />
                                Pagar
                            </button>
                        </Link>
                        <button className={Style.button_trash} onClick={clearCart}>
                            <FaRegTrashAlt />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart
