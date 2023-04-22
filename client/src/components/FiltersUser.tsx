import Link from "next/link"
import { FaHistory, FaAddressCard, FaCreditCard } from 'react-icons/fa'
import { RiLogoutBoxLine, RiArchiveLine } from 'react-icons/ri'

interface FilterUserProps {
    FilterUser: boolean;
}

const FiltersUser = ({ FilterUser }: FilterUserProps) => {
    return (
        <div className={`absolute w-56 h-44 mt-0 mr-auto ull p-3 rounded bg-[#F0604D] text-white ${FilterUser ? 'block':'hidden'}`}>
            <span className="w-6 h-7 -mt-7 m-auto block rounded-tl-xl rounded-tr-xl bg-[#F0604D] block"></span>
            <div className="w-full h-full flex flex-col justify-between">
                <Link className="w-full z-100 flex gap-3 items-center" href={'/'}>
                    <RiArchiveLine className="text-xl" />
                    <p>Compras</p>
                </Link>
                <Link className="w-full z-100 flex gap-3 items-center block" href={'/'}>
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
                <button className="w-full flex items-center gap-3">
                    <RiLogoutBoxLine className="text-xl"/>
                    <p>Salir</p>
                </button>
            </div>
        </div>
    )
}

export default FiltersUser
