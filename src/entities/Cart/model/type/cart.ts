import {Product, ProductId} from 'entities/Product'


export interface CartItem {
    product: Product,
    amount: number
}

const u: Record<ProductId, CartItem> = {
	[8]: {
		amount: 1,
		product: {} as Product
	}
}
export type CartType = Record<ProductId, CartItem>
export interface CartSchema {
    products: CartType
}