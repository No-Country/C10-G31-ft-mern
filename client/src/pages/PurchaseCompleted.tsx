import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ProductCart } from '../types/products'


const PurchaseCompleted = () => {

  const [ products, setProducts ] = useState<ProductCart[]>([])
  const [ totalProducts, setTotalProducts ] = useState(0)

  useEffect(() => {
      const cartRaw = localStorage.getItem('cart')
      const cart: ProductCart[] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
      const cartSelected = cart.filter(car => car.selected)
      let cartShort: ProductCart[] = []
      if(cartSelected.length > 3) {
        for(let i = 0; i < 3; i++) {
          cartShort = [...cartShort, cartSelected[i]]
        }
      } else {
        for(let i = 0; i < cartSelected.length; i++) {
          cartShort = [...cartShort, cartSelected[i]]
        }
      }
      setProducts(cartShort)
      setTotalProducts(cartSelected.length)
  }, [])


  return (
    <>
      <Header />
      <div className="flex px-4 lg:pl-24 py-2 items-center gap-2 text-md font-bold mt-28 md:mt-20">
        <Link href='/'><FaArrowLeft /></Link>
        <p>¡Compra Exitosa!</p>
      </div>
      <div className="flex flex-col items-center mt-11">
        <div className={`relative ${products.length < 3 ? 'ml-12' : 'mr-4'}`} >
          {products.length && products.map((product, index) => (
              <Image key={product._id} className={`absolute -right-8 transform translate-x-${8 * (index)} min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px] rounded-lg border ${index%2 ? 'border-red-700' : 'border-blue-700'}`} src={product.image[0]} width={120} height={120} alt='Producto' />
          ))}
          {totalProducts > 3 && 
            <div className="absolute w-[120px] h-[120px] bg-white -right-8 transform translate-x-24 rounded-lg border border-red-700">
              <div className="flex items-center justify-center mt-10">
                <p className="text-4xl font-bold">{totalProducts - 3}+</p>
              </div>
            </div>
          }
        </div>
        <div className="mt-[152px]">
          <p className="text-md text-center px-20">| {' '}
            {products.length && products.map(product => (
              <span key={product._id} >{product.name} | </span>
            ))} {totalProducts > 3 && <span className="text-[#3681F0] font-bold">y {totalProducts - 3}+</span>}
          </p>
        </div>
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
