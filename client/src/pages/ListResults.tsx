import Header from "@/components/shared/Headerspotech"
import Style from "../styles/ListResults.module.css"
import Image from "next/image"
import { FaShareAlt, FaRegHeart } from "react-icons/fa"

const ListProducts = () => {
    return(
        <div>
            <Header />
            <div className={Style.containerResults}>
                <p className={Style.Category}>Home &gt; Smartphones &gt; Android &gt; Motorola</p>
                <div className={Style.cantResult}>
                    <p>233 resultados</p>
                    <span></span>
                </div>
                <div className={Style.results}>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className={Style.result}>
                        <Image className={Style.imageResult} src={''} alt={''}  />
                        <div className={Style.infoResult}>
                            <p className={Style.brandResult}>Marca producto</p>
                            <p className={Style.nameResult}>Nombre Producto</p>
                            <p className={Style.priceResult}>$98670,02</p>
                            <p className={Style.shippingcostResult}>Envio gratis</p>
                            <div className={Style.icons}>
                                <FaRegHeart />
                                <FaShareAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProducts
