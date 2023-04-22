import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { getCart } from "../features/cart/cartSlice";
import { useState, useEffect } from "react"
import { ProductCart } from "../types/products"

const PurchaseSummary = () => {

  const [ products, setProducts ] = useState<ProductCart[]>([])
  const [ price, setPrice ] = useState<number>(0)
  const [ shipping, setShipping ] = useState(1239.99)

  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart.cart)

  useEffect(() => {
      dispatch(getCart(''))
      const cartSelected = cart.filter(car => car.selected)
      setProducts(cartSelected)
      let newPrice = 0
      cartSelected.forEach(car => {
        newPrice += car.amount * car.price
      })
      setPrice(newPrice)
  }, [dispatch])


  return (
    <>
      <Header />
      <div className="flex px-4 items-center gap-2 text-md font-bold mt-28 md:mt-20 lg:pl-24">
        <Link href='/MethodDelivery'><FaArrowLeft /></Link>
        <p>Resumen de compra</p>
      </div>
      <div className="lg:w-2/5 mx-auto">
        {products.length > 0 ? (
          <>
            <div className="mt-11 text-center space-y-8">
              {products.length && products.map(product => (
                <div key={product._id} >
                  <Image className="bg-gray-500 mx-auto rounded-lg" src={product.image[0]} width={120} height={120} alt='Producto' />
                  <p className="font-bold px-20 mt-4">{product.name}</p>
                  <p className="text-[#50C21F]">${product.price}</p>
                  <p className="text-[#3681F0]">Cantidad: {product.amount}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 mt-8 px-8 text-sm">
              <div className="flex justify-between">
                  <p className="font-bold">Enviar a</p>
                  <div className="text-right">
                      <p className="text-xs">República Siria 2331</p>
                      <p className="text-xs">C.P.6000 - Junín, Buenos Aires</p>
                  </div>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Llega</p>
                  <p className="text-xs">Martes 32 de febrero</p>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Método de pago</p>
                  <div className="text-right">
                      <p className="font-bold text-xs">Tarjeta de crédito</p>
                      <p className="text-xs">xxxx 5765</p>
                  </div>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Precio</p>
                  <p className="font-bold text-xs">${price}</p>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Envío</p>
                  <p className="font-bold text-xs">${shipping}</p>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold text-xs">${price + shipping}</p>
              </div>
            </div>
            <Link href='/PurchaseCompleted' >
              <div className="mt-7 mb-20 text-center text-xs">
                <p className="inline-block bg-[#50C21F] px-5 py-3 text-white mx-auto rounded-md">Confirmar Compra</p>
              </div>
            </Link>
          </>
        ) : (
          <p className="text-[#F0604D] mt-20 max-w-md mx-auto text-center">Selecciona los productos que deseas comprar en el carrito de compras para poder confirmar la compra</p>
        )}
      </div>
    </>
  )
}

export default PurchaseSummary
