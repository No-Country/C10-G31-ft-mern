import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const PurchaseCompleted = () => {
  return (
    <>
      <Header />
      <div className="flex px-4 py-2 items-center gap-2 text-md font-bold">
        <Link href='/'><FaArrowLeft /></Link>
        <p>¡Compra Exitosa!</p>
      </div>
      <div className="mt-11 text-center">
        <Image className="bg-gray-500 mx-auto rounded-lg" src='/' width={120} height={120} alt='Producto' />
        <p className="text-md px-20 mt-4">Producto específico con sus características intrínsecas y modelo</p>
      </div>
      <div className="mt-6 px-6 text-xs text-center">
        <p className="font-bold">Llega el Martes 32 de febrero a</p>
        <p>República Siria 2331</p>
        <p>C.P.6000 - Junín, Buenos Aires</p>
      </div>
      <Link href='/' >
        <div className="mt-8 mb-20 text-center text-xs">
          <p className="inline-block bg-gray-600 px-4 py-3 text-white mx-auto rounded-md">Ir al inicio</p>
        </div>
      </Link>
    </>
  )
}

export default PurchaseCompleted
