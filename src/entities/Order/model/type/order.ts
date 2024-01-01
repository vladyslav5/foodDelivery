import {Address} from 'entities/Address'
import {CartItem} from 'entities/Cart'

export type PaymentWay = 'card' | 'cash on delivery'
export type status = 'error' | 'processing' | 'canceled' | 'succeeded'

export interface OrderSchema {
    pastOrders: Order[],
    isLoading:boolean,
    error?:string
}

export interface Order {
    paymentWay?: PaymentWay
    address: Address
    products: CartItem[]
    id?: number,
    date: string,
    status: status
}