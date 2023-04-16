
export interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    description: string
    price: number
    seller: string[]
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