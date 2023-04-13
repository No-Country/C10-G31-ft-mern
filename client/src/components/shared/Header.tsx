import Link from 'next/link'
import Image from 'next/image'
import Style from '../../styles/Header.module.css'
import { FaBars, FaRegHeart, FaRegUserCircle, } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import Search from '../Search'

const Header = () => {

    const [ menuActive, setMenuActive ] = useState(false)
    const [ searchActive, setSearchActive ] = useState(false)

    return(
        <>
            {searchActive && (
                <Search searchActive={searchActive} setSearchActive={setSearchActive} />
            )}
            {menuActive && (
                <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
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
                        <Link href='/Favorites'>
                            <FaRegHeart className={Style.icon_head_cart} />
                        </Link>
                        <Link href='/ShoppingCart'>
                            <HiOutlineShoppingCart className={Style.icon_head_cart} />
                        </Link>
                    </div>
                </div>
                <div className={Style.container_2}>
                    <FaBars className={Style.iconMenu} onClick={() => setMenuActive(!menuActive)} />
                    <input type='text' onClick={() => setSearchActive(!searchActive)} className={Style.seeker} />
                </div>
            </div>
        </>
    )
}

export default Header
