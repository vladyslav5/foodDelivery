import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Order, OrderSchema} from '../type/order'
import {fetchPastOrders} from '../services/fetchPastOrders'



const initialState: OrderSchema = {
	isLoading: false,
	pastOrders:[]
}
export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: builder => builder
		.addCase(fetchPastOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
			state.isLoading = false
			state.pastOrders = action.payload
		})
		.addCase(fetchPastOrders.pending, (state) => {
			state.isLoading = true
			state.error = undefined
		})
		.addCase(fetchPastOrders.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
})

export const {actions: orderActions} = orderSlice
export const {reducer: orderReducer} = orderSlice