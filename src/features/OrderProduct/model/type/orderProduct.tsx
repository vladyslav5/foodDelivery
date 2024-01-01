import {CartItem} from 'entities/Cart/model/type/cart'
import {Address} from 'entities/Address'
import {PaymentWay} from 'entities/Order'

export interface OrderProductSchema {
    selectedAddress?:Address | null,
    selectedPaymentWay?:PaymentWay,
    orderId?:number
    error?:string,
    isLoading:boolean
}
