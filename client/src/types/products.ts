
export interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    price: number
    seller: string[]
    apdatedAt: string
}

export interface ProductCart extends Product {
    amount: number
    selected: boolean
}

export interface ListProducts {
    products: Product[]
}