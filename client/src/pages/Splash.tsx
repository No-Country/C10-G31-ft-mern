import Style from "../styles/Splash.module.css"
import { FaGoogle } from "react-icons/fa"

const Splash = () => {
    return (
        <div className={Style.ContainerSplash}>
            <div className={Style.ContainerLogo}>
                <p className={Style.Logo}>Logo</p>
            </div>
            <div className={Style.ContainerButtons}>
                <button className={Style.ButtonInit}>Inicar seccion</button>
                <button className={Style.ButtonRegistrer}>Registrarse</button>
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
