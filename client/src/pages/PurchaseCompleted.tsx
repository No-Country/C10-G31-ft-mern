import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"


interface Product {
  _id: string
  available: string
  category: string[]
  image: string[]
  name: string
  price: number
  seller: string[]
  apdatedAt: string
  amount: number
}

interface ListProducts {
  products: Product[]
}


const PurchaseCompleted = () => {

  const [ products, setProducts ] = useState<ListProducts['products']>([])
  const [ totalProducts, setTotalProducts ] = useState(0)

  useEffect(() => {
      const cartRaw = localStorage.getItem('cart')
      const cart: ListProducts['products'] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
      setProducts(cart)
      setTotalProducts(cart.length)
  }, [])


  return (
    <>
      <Header />
      <div className="flex px-4 py-2 items-center gap-2 text-md font-bold">
        <Link href='/'><FaArrowLeft /></Link>
        <p>¡Compra Exitosa!</p>
      </div>
      <div className="mt-11 text-center flex flex-col items-center">
          <div className="flex" >
            {products.length && products.map(product => (
                <Image key={product._id} className="p-1 rounded-lg border border-red-700" src={product.image[0]} width={120} height={120} alt='Producto' />
            ))}
          </div>
        <p className="text-md px-20 mt-4">| {' '}
          {products.length && products.map(product => (
            <span key={product._id} >{product.name} | </span>
          ))}
        </p>
      </div>
      <div className="mt-6 px-6 text-xs text-center">
        <p className="font-bold">Llega el Martes 32 de febrero a</p>
        <p>República Siria 2331</p>
        <p>C.P.6000 - Junín, Buenos Aires</p>
      </div>
      <Link href='/' >
        <div className="mt-8 mb-20 text-center text-xs">
          <p className="inline-block bg-[#50C21F] px-4 py-3 text-white mx-auto rounded-md">Ir al inicio</p>
        </div>
      </Link>
    </>
  )
}

export default PurchaseCompleted
