
interface ProductCategory {
    _id: string
    name: string
}

export interface Category {
    _id: string
    name: string
    description: string
    subcategories: string[]
    products: string
    createdAt: string
    updatedAt: string
}

interface CategoryProduct {
    _id: string
    name: string
}

export interface Product {
    _id: string
    available: string
    category: CategoryProduct[]
    image: string[]
    name: string
    description: string
    price: number
    seller: string[]
    variations: string[]
    createdAt: string
    updatedAt: string
}

export interface ProductCart extends Product {
    amount: number
    selected: boolean
}

export interface ListProducts {
    products: Product[]
}