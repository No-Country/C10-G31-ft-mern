/* import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Style from '../../styles/SectionBack.module.css'

const SectionBack = ({ (section:String), (route:String) }) => {
    return (
        <div className={Style.ContainerBack}>
            <Link href={`/${route}`}>
                <FaArrowLeft />
            </Link>
            <p>{section}</p>
        </div>
    )
}

export default SectionBack */
