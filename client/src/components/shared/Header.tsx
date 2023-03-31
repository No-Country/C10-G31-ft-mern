import Link from 'next/link'
import Style from '../../styles/Header.module.css'
import { FaBars, FaRegHeart, FaRegUserCircle, } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Header = () => {
    return(
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
    )
}

export default Header
