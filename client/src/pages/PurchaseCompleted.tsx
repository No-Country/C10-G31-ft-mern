import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const PurchaseCompleted = () => {
  return (
    <>
      <Header />
      <div className="flex p-3 items-center gap-2 text-xs font-bold">
        <Link href='/'><FaArrowLeft /></Link>
        <p>¡Compra Exitosa!</p>
      </div>
      <div className="mt-4 text-center space-y-2">
        <Image className="bg-gray-500 mx-auto" src='/' width={120} height={120} alt='Producto' />
        <p className="text-xs px-28">Producto específico con sus características intrínsecas y modelo</p>
      </div>
      <div className="p-6 text-xs text-center">
        <p className="font-bold">Llega el Martes 32 de febrero a</p>
        <p>República Siria 2331</p>
        <p>C.P.6000 - Junín, Buenos Aires</p>
      </div>
      <div className="mb-20 text-center text-xs">
        <p className="inline-block bg-gray-600 p-2 text-white mx-auto rounded-md">Ir al inicio</p>
      </div>
    </>
  )
}

export default PurchaseCompleted