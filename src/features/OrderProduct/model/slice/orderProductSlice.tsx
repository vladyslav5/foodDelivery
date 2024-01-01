import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Address} from 'entities/Address'
import {postOrder} from '../services/postOrder'
import {Order, PaymentWay} from 'entities/Order'
import {OrderProductSchema} from '../type/orderProduct'


const initialState: OrderProductSchema = {
	isLoading: false
}
export const orderProductSlice = createSlice({
	name: 'orderProduct',
	initialState,
	reducers: {
		selectAddressId: (state, action: PayloadAction<Address | null>) => {
			state.selectedAddress = action.payload
		},
		selectPaymentWay: (state, action: PayloadAction<PaymentWay>) => {
			state.selectedPaymentWay = action.payload
		},
		setOrderId: (state, action: PayloadAction<number>) => {
			state.orderId = action.payload
		}
	},
	extraReducers: builder => builder
		.addCase(postOrder.fulfilled, (state, action: PayloadAction<Order>) => {
			state.orderId = action.payload.id
			state.isLoading = false
		})
		.addCase(postOrder.pending, (state) => {
			state.isLoading = true
		})
		.addCase(postOrder.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
})

export const {actions: orderProductActions} = orderProductSlice
export const {reducer: orderProductReducer} = orderProductSlice