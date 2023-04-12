import Image from "next/image"
import Style from "../styles/ListResults.module.css"
import { FaShareAlt, FaRegHeart } from "react-icons/fa"
import Link from "next/link"


interface Product {
    product: {
        _id: string
        available: string
        category: string[]
        image: string[]
        name: string
        price: number
        seller: string[]
        apdatedAt: string
    }
}

const ProductCard = ({product}: Product) => {

    const addFav = () => {
        const favsRaw = localStorage.getItem('favs')
        const favs: Product['product'][] = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
        
        const existe = favs.filter(fav => fav._id === product?._id)
    
        if(existe[0]?._id === product?._id) {
          const filterFavs = favs.filter(fav => fav._id !== product?._id)
          localStorage.setItem('favs', JSON.stringify(filterFavs))
        } else {
          const newFavs = [...favs, product]
          localStorage.setItem('favs', JSON.stringify(newFavs))
        }
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
