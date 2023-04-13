import Header from "@/components/shared/Headerspotech"
import Style from "../styles/ListResults.module.css"
import ProductCard from "@/components/ProductCardspotech"
import clienteAxios from '@/config/clienteAxiosspotech'
import { useState, useEffect } from 'react'

interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    price: number
    seller: string[]
    apdatedAt: string
}

interface ListProducts {
    products: Product[]
}

const ListProducts = () => {

    const [ products, setProducts ] = useState<ListProducts['products']>([])

    useEffect(() => {
      const getProducts = async () => {
        const { data } = await clienteAxios('/products')
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
                {products.length && products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ListProducts
