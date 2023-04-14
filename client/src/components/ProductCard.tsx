import Image from "next/image"
import Style from "../styles/ListResults.module.css"
import { FaShareAlt, FaRegHeart } from "react-icons/fa"
import Link from "next/link"
import { useDispatch } from 'react-redux'
import { addFavorite } from "@/features/favorites/favoritesSlicespotech"
import { Product } from '../types/products'


interface ProductCardProps {
    key: string;
    product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {

    const dispatch = useDispatch()
    const addFav = () => {
        dispatch(addFavorite(product))
    }

    const share = (id: string) => {
        // TODO Pasar a variable de entorno
        navigator.clipboard.writeText(`http://localhost:3000/ProductDetail/${id}`)
            .then(() => {
                console.log('Texto copiado al portapapeles');
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles: ', error);
            });
    }

  return (
    <div className={Style.results}>
        <div className={Style.result}>
            <Image className={Style.imageResult} width={400} height={400} src={product.image[0]} alt={`Imagen del producto ${product.name}`}  />
            <div className={Style.infoResult}>
                <p className={Style.brandResult}>Marca producto</p>
                <Link href={`/ProductDetail/${product._id}`} ><p className={Style.nameResult}>{product.name}</p></Link>
                <p className={Style.priceResult}>${product.price}</p>
                <p className={Style.shippingcostResult}>Envio gratis</p>
                <div className={Style.icons}>
                    <FaRegHeart className="cursor-pointer" onClick={addFav} />
                    <FaShareAlt className="cursor-pointer" onClick={() => share(product._id)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
