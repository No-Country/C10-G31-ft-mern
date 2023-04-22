import Header from "@/components/shared/Headerspotech"
import Style from "../../styles/ListResults.module.css"
import ProductCard from "@/components/ProductCardspotech"
import clienteAxios from '@/config/clienteAxiosspotech'
import { useState, useEffect } from 'react'
import { Product } from '../../types/products'
import { useRouter } from 'next/router'

interface ProductCategory {
    _id: string
    name: string
}

const CategoryResults = () => {

    const [ products, setProducts ] = useState<Product[]>([])

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
      if(id) {
        const getProducts = async () => {
            const { data: productsCategory } = await clienteAxios(`/category/${id}`)
            let productsCategoryFinal: Product[] = []
            for(let i = 0; i < productsCategory.products.length; i++) {
                const { data: productCategory } = await clienteAxios(`/product/${productsCategory.products[i]?._id}`)
                productsCategoryFinal.push(productCategory)
            }
            setProducts(productsCategoryFinal)
          }
          getProducts()
      }
    }, [id])


    return(
        <div className='container mx-auto' >
            <Header />
            <div className={Style.containerResults}>
                <div className={Style.cantResult}>
                    <p>{products.length} resultados</p>
                    <span></span>
                </div>
                <div className="md:grid md:grid-cols-3 md:items-center">
                    {products.length && products.map((product: Product) => (
                        <ProductCard product={product} key={product._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryResults