import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/Shopping_cart.module.css'
import { FaArrowLeft, FaRegCircle, FaRegDotCircle, FaCreditCard, FaRegTrashAlt} from 'react-icons/fa'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import Header from '../components/shared/Header'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { getCart, updateCart } from "../features/cart/cartSlice";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'


const ShoppingCart = () => {

    const cart = useAppSelector((state) => state.cart.cart)
    const dispatch = useAppDispatch()
    
    const router = useRouter();

    useEffect(() => {
        dispatch(getCart(''))
    }, [dispatch])

    const clearCart = () => {
        const cartDeleted = cart.filter(product => !product.selected)
        dispatch(updateCart(cartDeleted))
    }

    const changeSelected = (id: string) => {
        const newProducts = cart.map(prod => prod._id === id ? {...prod, selected: !prod.selected} : prod)
        dispatch(updateCart(newProducts))
    }

    const substract = (id: string) => {
        const newProducts = cart.map(prod => prod._id === id ? prod.amount > 1 ? {...prod, amount: prod.amount - 1} : prod : prod)
        dispatch(updateCart(newProducts))
    }
    
    const sum = (id: string) => {
        const newProducts = cart.map(prod => prod._id === id ? prod.amount < 5 ? {...prod, amount: prod.amount + 1} : prod : prod)
        dispatch(updateCart(newProducts))
    }

    return(
        <div className={Style.container_cart}>
            <Header />
            <div className={Style.back_cart}>
                <FaArrowLeft className={Style.icon_back} onClick={() => router.back()} />
                <p>Carrito</p>
            </div>
            <div className='lg:w-2/3 mx-auto'>
                {cart.length ? cart.map(product => (
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
                                <Link href={`/ProductDetail/${product._id}`} className='inline-block' >
                                    <p>{product.name}</p>
                                </Link>
                                <p className='text-[#50C21F]'>${product.price}</p>
                                <p>Cantidad</p>
                                <div className='flex gap-3'>
                                    <AiOutlineMinusSquare className='w-6 h-6 rounded-xl cursor-pointer text-[#3681F0]' onClick={() => substract(product._id)} />
                                    <p className="font-extrabold text-[#50C21F]">{product.amount}</p>
                                    <AiOutlinePlusSquare className='w-6 h-6 rounded-xl cursor-pointer text-[#3681F0]' onClick={() => sum(product._id)} />
                                </div>
                            </div>
                        </div>
                    </div>
                )): (
                    <p className='text-center mt-6 mb-8'>Agrega Productos y podrás encontrarlos aquí</p>
                )}
            </div>
            <div className={Style.container_buttons}>
                {cart.length > 0 && (
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
