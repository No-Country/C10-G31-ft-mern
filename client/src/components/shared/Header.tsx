import Link from 'next/link'
import Image from 'next/image'
import Style from '../../styles/Header.module.css'
import { FaBars, FaRegHeart, FaRegUserCircle, } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import Search from '../Search'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getCart } from "../../features/cart/cartSlice";
import { getUser } from "../../features/auth/authSlice"

const Header = () => {

    const [ menuActive, setMenuActive ] = useState(false)
    const [ searchActive, setSearchActive ] = useState(false)
    const [ totalProducts, setTotalProducts ] = useState(0)
    // TODO si el usuario está autenticado cambiar los iconos del header y en el menu de hamburguesa mostrar el boton de salir
    const userAuth = useAppSelector((state) => state.auth.userAuth)
    const cart = useAppSelector((state) => state.cart.cart)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUser())
        dispatch(getCart(''))
        setTotalProducts(cart.length)
    }, [dispatch, cart.length])


    return(
        <>
            {searchActive && (
                <Search searchActive={searchActive} setSearchActive={setSearchActive} />
            )}
            <div className={Style.head_cart}>
                <div className={Style.container_1}>
                    <div className={Style.logo}>
                        <Link href='/'>
                            <Image src='/Logo.png' width={100} height={100} alt='Logo' />
                        </Link>
                    </div>
                    <div className={Style.SearchHeaderTablet}>
                        <FaBars className={Style.iconMenu} onClick={() => setMenuActive(!menuActive)} />
                        <input type='text' onClick={() => setSearchActive(!searchActive)} className={Style.seeker} />
                    </div>
                    <div className={Style.container_icons}>
                        <Link href='/LogIn'>
                            <FaRegUserCircle className={Style.icon_head_cart} />
                        </Link>
                        <Link href='/FavoritesProduct'>
                            <FaRegHeart className={Style.icon_head_cart} />
                        </Link>
                        <Link href='/ShoppingCart'>
                            <div className='relative'>
                                <HiOutlineShoppingCart className={Style.icon_head_cart} />
                                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-[6px] py-[3px] text-[8px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {totalProducts}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={Style.container_2}>
                    <FaBars className={Style.iconMenu} onClick={() => setMenuActive(!menuActive)} />
                    <input type='text' onClick={() => setSearchActive(!searchActive)} className={Style.seeker} />
                </div>
            </div>
            <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        </>
    )
}

export default Header
