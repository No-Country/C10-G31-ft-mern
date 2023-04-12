import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const PurchaseSummary = () => {
  return (
    <>
      <Header />
      <div className="flex px-4 mt-3 items-center gap-2 text-md font-bold">
        <Link href='/MethodDelivery'><FaArrowLeft /></Link>
        <p>Resumen de compra</p>
      </div>
      <div className="mt-11 text-center">
        <Image className="bg-gray-500 mx-auto rounded-lg" src='/' width={120} height={120} alt='Producto' />
        <p className="font-bold px-20 mt-4">Producto específico con sus características intrínsecas y modelo</p>
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
            <p className="font-bold text-xs">$28.505,28</p>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Envío</p>
            <p className="font-bold text-xs">$1239,99</p>
        </div>
        <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold text-xs">$29.745,27</p>
        </div>
      </div>
      <Link href='/PurchaseCompleted' >
        <div className="mt-7 mb-20 text-center text-xs">
          <p className="inline-block bg-gray-600 px-5 py-3 text-white mx-auto rounded-md">Confirmar Compra</p>
        </div>
      </Link>
    </>
  )
}

export default PurchaseSummary
