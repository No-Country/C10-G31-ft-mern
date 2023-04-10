import Header from "@/components/shared/Headerspotech";
import Style from '../styles/NotFoundSearch.module.css'
import { FaArrowLeft } from 'react-icons/fa';
import Image from "next/image";
import ImageNotFound from '../../public/Not_results.png'
import Link from "next/link";

const NotfoundSearch = () => {
    return(
        <div>
            <Header />
            <div className={Style.container_NotResult}>
                <div>
                    <Link href={'/'}>
                        <FaArrowLeft />
                    </Link>
                </div> 
                <div className={Style.AlertsNotFound}>
                    <p className={Style.AlertFirst}>No se encontraron resultados</p>
                    <p className={Style.AlertLast}>Prueba utilizando otros terminos</p>
                    <Image className={Style.Image} src={ImageNotFound} alt={'Lupa not search'} />
                </div>
            </div>
        </div> 
    )
}

export default NotfoundSearch
