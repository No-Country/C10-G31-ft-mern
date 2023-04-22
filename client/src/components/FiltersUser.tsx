import Link from "next/link"
import { FaHistory, FaAddressCard, FaCreditCard } from 'react-icons/fa'
import { RiLogoutBoxLine, RiArchiveLine } from 'react-icons/ri'
import { useAppDispatch } from '../app/hooks'
import { logOutUser } from "../features/auth/authSlice"

interface FilterUserProps {
    FilterUser: boolean;
    setFilterUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersUser = ({ FilterUser, setFilterUser }: FilterUserProps) => {

    const dispatch = useAppDispatch()

    const logOut = () => {
        localStorage.removeItem('spotechToken')
        localStorage.removeItem('spotechId')
        dispatch(logOutUser(''))
        setFilterUser(false)
    }


    return (
        <div className={`fixed top-14 md:top-16 right-4 md:rigth-4 lg:right-16 z-50 w-56 h-44 p-3 rounded bg-[#F0604D] text-white ${FilterUser ? 'block':'hidden'}`}>
            <span className="w-6 h-7 -mt-7 ml-29 block rounded-tl-xl rounded-tr-xl bg-[#F0604D] absolute"></span>
            <div className="w-full h-full flex flex-col justify-between">
                <Link className="w-full flex gap-3 items-center" href={'/'}>
                    <RiArchiveLine className="text-xl" />
                    <p>Compras</p>
                </Link>
                <Link className="w-full z-100 flex gap-3 items-center" href={'/'}>
                    <FaCreditCard className="text-xl" />
                    <p>Metodos de pago</p>
                </Link>
                <Link className="w-full flex gap-3 items-center" href={'/'}>
                    <FaAddressCard className="text-xl" />
                    <p>Mis datos</p>
                </Link>
                <Link className="w-full flex gap-3 items-center" href={'/'}>
                    <FaHistory className="text-xl"/>
                    <p>Historial</p>
                </Link>
                <button className="w-full flex items-center gap-3" onClick={logOut}>
                    <RiLogoutBoxLine className="text-xl"/>
                    <p>Salir</p>
                </button>
            </div>
        </div>
    )
}

export default FiltersUser
