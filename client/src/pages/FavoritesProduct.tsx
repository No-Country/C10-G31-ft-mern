import Header from "@/components/shared/Headerspotech"
import { FaArrowLeft, FaHeart } from 'react-icons/fa'
import Image from "next/image"

const Favorites = () => {
    return(
        <div>
            <Header />
            <div className="p-3">
                <div className="w-full flex gap-4 items-center">
                    <FaArrowLeft />
                    <p className="font-bold">Favoritos</p>
                </div>
                <div className="w-full mt-5">
                    <div className="w-full border-b-2 border-gray-300 py-4 flex justify-between">
                        <div className="pb-1 flex gap-3">
                            <div>
                                <Image className="w-28 h-28 block rounded-lg bg-[#444]" src={''} alt={''} />
                            </div>
                            <div>
                                <p className="font-bold">Nombre del producto</p>
                                <p className="mt-6 font-bold">$23380,00</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaHeart className="mr-2 text-xl text-[blue]" />
                        </div> 
                    </div>
                    <div className="w-full border-b-2 border-gray-300 py-4 flex justify-between">
                        <div className="pb-1 flex gap-3">
                            <div>
                                <Image className="w-28 h-28 block rounded-lg bg-[#444]" src={''} alt={''} />
                            </div>
                            <div>
                                <p className="font-bold">Nombre del producto</p>
                                <p className="mt-6 font-bold">$23380,00</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaHeart className="mr-2 text-xl text-[blue]" />
                        </div> 
                    </div>
                    <div className="w-full border-b-2 border-gray-300 py-4 flex justify-between">
                        <div className="pb-1 flex gap-3">
                            <div>
                                <Image className="w-28 h-28 block rounded-lg bg-[#444]" src={''} alt={''} />
                            </div>
                            <div>
                                <p className="font-bold">Nombre del producto</p>
                                <p className="mt-6 font-bold">$23380,00</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaHeart className="mr-2 text-xl text-[blue]" />
                        </div> 
                    </div>
                    <div className="w-full border-b-2 border-gray-300 py-4 flex justify-between">
                        <div className="pb-1 flex gap-3">
                            <div>
                                <Image className="w-28 h-28 block rounded-lg bg-[#444]" src={''} alt={''} />
                            </div>
                            <div>
                                <p className="font-bold">Nombre del producto</p>
                                <p className="mt-6 font-bold">$23380,00</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaHeart className="mr-2 text-xl text-[blue]" />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites

