import Header from "@/components/shared/Headerspotech"
import Style from "../styles/ListResults.module.css"
import ProductCard from "@/components/ProductCardspotech"
import clienteAxios from '@/config/clienteAxiosspotech'
import { useState, useEffect } from 'react'
import { Product } from '../types/products'


const ListProducts = () => {

    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
      const getProducts = async () => {
        const { data } = await clienteAxios('/product')
        setProducts(data)
      }
      getProducts()
    }, [])


    return(
        <div>
            <Header />
            <div className={Style.containerResults}>
                <p className={Style.Category}>Home &gt; Smartphones &gt; Android &gt; Motorola</p>
                <div className={Style.cantResult}>
                    <p>{products.length} resultados</p>
                    <span></span>
                </div>
                {products.length && products.map((product: Product) => (
                    <ProductCard product={product} key={product._id} />
                ))}
            </div>
        </div>
    )
}

export default ListProducts
