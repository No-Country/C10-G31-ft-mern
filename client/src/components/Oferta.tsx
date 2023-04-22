import { Product } from "@/types/productsspotech"
import Image from "next/image"
import Link from "next/link"

interface OfferProp {
  offer: Product
}

const Oferta = ({offer}: OfferProp) => {
  return (
    <Link href={`/ProductDetail/${offer._id}`} >
      <div className="border border-[#F0604D] rounded-2xl flex gap-3 items-center p-2 min-w-[170px] min-h-[86px]">
        <div>
          <Image src={offer.image[0]} width={60} height={60} alt='Producto Oferta' />
        </div>
        <div>
          <p className="text-[#3681F0] text-xs">{offer.name}</p>
          <p className="text-[#50C21F] text-xs">${offer.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Oferta
