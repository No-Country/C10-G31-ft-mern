import Style from "../styles/Splash.module.css"
import { FaGoogle } from "react-icons/fa"
import Logo from '../../public/Logo Login.png'
import Image from "next/image"
import Link from "next/link"

const Splash = () => {
    return (
        <div className={Style.ContainerSplash}>
            <div className={Style.ContainerLogo}>
                <Image className={Style.Logo} src={Logo} alt={'Logo empresa'} />
            </div>
            <div className={Style.ContainerButtons}>
                <Link href='/LogIn' className={Style.ButtonInit}>Inicar seccion</Link>
                <Link href='/SignIn' className={Style.ButtonRegistrer}>Registrarse</Link>
            </div>
            <div className="flex items-center">
                <div className="border-t-2 border-gray-400 mx-2 w-1/2"></div>
                <p>o</p>
                <div className="border-t-2 border-gray-400 mx-2 w-1/2"></div>
            </div>
            <div className={Style.ContainerbuttonGogle}>
                <button className={Style.ButtonGoogle}>
                    <FaGoogle className={Style.LogoGoogle} />
                    Registrarse con Google
                </button>
            </div>
        </div>
    )
}

export default Splash
