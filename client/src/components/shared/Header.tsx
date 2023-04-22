import Link from 'next/link'
import Image from 'next/image'
import Style from '../../styles/Header.module.css'
import { FaBars, FaRegHeart, FaRegUserCircle, } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import Search from '../Search'
import FiltersUser from '../FiltersUser'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getCart } from "../../features/cart/cartSlice";
import { getUser } from "../../features/auth/authSlice"
import { useRouter } from 'next/router'

const Header = () => {

    const [ menuActive, setMenuActive ] = useState(false)
    const [ searchActive, setSearchActive ] = useState(false)
    // const [ totalProductsStorage, setTotalProductsStorage ] = useState(0)
    const [ FilterUser, setFilterUser ] = useState(false)
    const [ totalProducts, setTotalProducts ] = useState(0)
    const router = useRouter();
    const userAuth = useAppSelector((state) => state.auth.userAuth)
    const cart = useAppSelector((state) => state.cart.cart)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUser())
        dispatch(getCart(''))
        dispatch(getUser())
        setTotalProducts(cart.length)
    }, [dispatch, cart.length])


    function ActiveOptionsUser() {
        if(!userAuth.auth) {
            return router.push('/Splash');
        }
        setFilterUser(!FilterUser)
    }

    return(
        <>
            {searchActive && (
                <div className='bg-white fixed top-0 left-0 z-50 w-full min-h-screen'>
                    <Search searchActive={searchActive} setSearchActive={setSearchActive} />
                </div>
            )}
            <div className={Style.head_cart}>
                <div className={Style.container_1}>
                    <div className={Style.logo}>
                        <Link href='/'>
                            <Image src='/Logo.png' width={100} height={100} alt='Logo' />
                        </Link>
                    </div>
                    <div className={Style.SearchHeaderTablet}>
                        <FaBars className={`${menuActive ? 'text-[#3681F0] bg-white' : 'text-white'} h-8 text-3xl cursor-pointer py-1 rounded-lg`} onClick={() => setMenuActive(!menuActive)} />
                        <input type='text' onClick={() => setSearchActive(!searchActive)} className={Style.seeker} />
                    </div>
                    <div className={Style.container_icons}>
                        <button onClick={ActiveOptionsUser}>
                            <FaRegUserCircle className={Style.icon_head_cart} />
                        </button>
                        <FiltersUser FilterUser={FilterUser} setFilterUser={setFilterUser} />
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
                    <FaBars className={`${menuActive ? 'text-[#3681F0] bg-white' : 'text-white'} h-8 text-3xl cursor-pointer py-1 rounded-lg`} onClick={() => setMenuActive(!menuActive)} />
                    <input type='text' onClick={() => setSearchActive(!searchActive)} className={Style.seeker} />
                </div>
            </div>
            <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        </>
    )
}

export default Header
