import Image from "next/image"
import Style from "../styles/ListResults.module.css"
import { FaShareAlt, FaHeart, FaRegHeart } from "react-icons/fa"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addFavorite, getFavorites } from "@/features/favorites/favoritesSlicespotech"
import { Product } from '../types/products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ProductCardProps {
    key: string;
    product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {

    const favorites = useAppSelector((state) => state.favorites.favs)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFavorites(''))
    }, [dispatch])

    const addFav = (product: Product) => {
        dispatch(addFavorite(product))
    }

    const share = (id: string) => {
        // TODO Pasar a variable de entorno
        navigator.clipboard.writeText(`http://localhost:3000/ProductDetail/${id}`)
            .then(() => {
                toast.success("Enlace del producto copiado correctamente!", {
                    position: 'top-right',
                    className: 'max-w-[450px]',
                    autoClose: 1500,
                    closeOnClick: true,
                    pauseOnHover: false
                })
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles: ', error);
            });
    }

  return (
    <div className={Style.results}>
        <ToastContainer />
        <div className={Style.result}>
            <div className="md:flex md:items-center md:justify-between md:h-60">
                <Image className={Style.imageResult} width={400} height={300} src={product.image[0]} alt={`Imagen del producto ${product.name}`}  />
            </div>
            <div className={Style.infoResult}>
                {/* <p className={Style.brandResult}>Marca producto</p> */}
                <Link href={`/ProductDetail/${product._id}`} ><p className={Style.nameResult}>{product.name}</p></Link>
                <p className={Style.priceResult}>${product.price}</p>
                <p className={Style.shippingcostResult}>Envio gratis</p>
                <div className={Style.icons}>
                    {favorites.length && favorites.some(fav => fav._id === product._id) ? (
                      <FaHeart className="w-6 h-6 cursor-pointer text-[#3681F0]" onClick={() => addFav(product)} />
                    ) : (
                      <FaRegHeart className='w-6 h-6 cursor-pointer text-[#3681F0]' onClick={() => addFav(product)} />
                    )}
                    <FaShareAlt className="cursor-pointer text-[#50C21F]" onClick={() => share(product._id)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
