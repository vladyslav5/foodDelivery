

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CartSchema, CartType} from '../type/cart'
import {ProductId} from 'entities/Product'


const initialState: CartSchema = {
	products: {}
}
export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct:(state, action:PayloadAction<CartType>)=>{
			state.products = 	{
				...state.products,
				...action.payload
			}
		},
		incrementProduct:(state, action:PayloadAction<ProductId>)=>{
			state.products[action.payload].amount++
		},
		decrementProduct:(state, action:PayloadAction<ProductId>)=>{
			state.products[action.payload].amount--
		},
		deleteProduct:(state, action:PayloadAction<ProductId>)=>{
			delete state.products[action.payload]
		}
	}
})
export const {actions: cartActions} = CartSlice
export const {reducer: cartReducer} = CartSlice