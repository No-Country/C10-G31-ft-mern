import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft, FaHeart } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    price: number
    seller: string[]
    apdatedAt: string
}

interface ListProducts {
  favs: Product[]
}


const Favorites = () => {

    const [ products, setProducts ] = useState<ListProducts['favs']>([])
    const router = useRouter();

    useEffect(() => {
        const favsRaw = localStorage.getItem('favs')
        const favs: ListProducts['favs'] = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
        setProducts(favs)
    }, [])

    const addFav = (product: Product) => {

        const existe = products.filter(fav => fav._id === product._id)
    
        if(existe[0]?._id === product._id) {
          const filterFavs = products.filter(fav => fav._id !== product._id)
          setProducts(filterFavs)
          localStorage.setItem('favs', JSON.stringify(filterFavs))
        } else {
          const newFavs = [...products, product]
          setProducts(newFavs)
          localStorage.setItem('favs', JSON.stringify(newFavs))
        }
    }

    return(

        <div>
            <Header />
            <div className="p-3">
                <div className="w-full flex gap-4 items-center">
                    <FaArrowLeft className="cursor-pointer" onClick={() => router.back()} />
                    <p className="font-bold">Favoritos</p>
                </div>
                {products.length ? products.map(product => (
                    <div key={product._id} className="w-full mt-5">
                        <div className="w-full border-b-2 border-gray-300 py-4 flex justify-between">
                            <div className="pb-1 flex gap-3">
                                <div>
                                    <Image className="w-28 h-28 block rounded-lg bg-[#444]" width={400} height={400} src={product.image[0]} alt={`Imagen del Producto ${product.name}`} />
                                </div>
                                <div>
                                    <Link href={`ProductDetail._id`}>
                                        <p className="font-bold cursor-pointer">{product.name}</p>
                                    </Link>
                                    <p className="mt-6 font-bold">${product.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaHeart className="mr-2 text-xl text-[blue] cursor-pointer" onClick={() => addFav(product)} />
                            </div> 
                        </div>
                    </div>
                )) : (
                    <p className="text-center mt-10">Agrega productos a tus favoritos y los encontrarás aquí</p>
                )}
            </div>
        </div>
    )
}

export default Favorites

