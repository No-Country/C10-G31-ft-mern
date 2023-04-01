import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const PurchaseSummary = () => {
  return (
    <>
      <Header />
      <div className="flex p-3 items-center gap-2 text-xs font-bold">
        <Link href='/'><FaArrowLeft /></Link>
        <p>Resumen de compra</p>
      </div>
      <div className="mt-4 text-center space-y-2">
        <Image className="bg-gray-500 mx-auto" src='/' width={120} height={120} alt='Producto' />
        <p className="text-xs px-28">Producto específico con sus características intrínsecas y modelo</p>
      </div>
      <div className="space-y-3 p-6 text-xs">
        <div className="flex justify-between">
            <p className="font-bold">Enviar a</p>
            <div className="text-right">
                <p>República Siria 2331</p>
                <p>C.P.6000 - Junín, Buenos Aires</p>
            </div>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Llega</p>
            <p>Martes 32 de febrero</p>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Método de pago</p>
            <div className="text-right">
                <p className="font-bold">Tarjeta de crédito</p>
                <p>xxxx 5765</p>
            </div>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Precio</p>
            <p className="font-bold">$28.505,28</p>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Envío</p>
            <p className="font-bold">$1239,99</p>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">$29.745,27</p>
        </div>
      </div>
      <div className="mb-20 text-center text-xs">
        <p className="inline-block bg-gray-600 p-2 text-white mx-auto rounded-md">Confirmar Compra</p>
      </div>
    </>
  )
}

export default PurchaseSummary
