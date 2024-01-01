import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Address, AddressSchema} from 'entities/Address/model/type/address'

import {fetchAddresses} from '.././services/fetchAddresses/fetchAddresses'
import {postAddress} from '../services/postAddress/postAddress'
import {updateAddress} from '../services/updateAddress/updateAddress'


const initialState: AddressSchema = {
	isLoading: true,
	isModalLoading: false,
	addresses: [],
}
export const AddressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Address>) => {
			state.addresses.push(action.payload)
		},
		remove: (state, action: PayloadAction<number>) => {
			state.addresses = state.addresses.filter(address => address.id !== action.payload)
		}
	},
	extraReducers: builder => builder
		.addCase(fetchAddresses.fulfilled, (state, action: PayloadAction<Address[]>) => {
			state.isLoading = false
			state.addresses = action.payload
		})
		.addCase(fetchAddresses.pending, (state) => {
			state.isLoading = true
			state.error = undefined
		})
		.addCase(fetchAddresses.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
		//
		.addCase(postAddress.fulfilled, (state, action: PayloadAction<Address>) => {
			state.isModalLoading = false
			state.addresses.push(action.payload)
		})
		.addCase(postAddress.pending, (state) => {
			state.isModalLoading = true
			state.error = undefined
		})
		.addCase(postAddress.rejected, (state, action) => {
			state.isModalLoading = false
			state.error = action.payload
		})
	//
		.addCase(updateAddress.fulfilled, (state, action: PayloadAction<Address>) => {
			state.isModalLoading = false
			state.addresses[state.addresses.findIndex(address=>address.id===action.payload.id)] = action.payload
		})
		.addCase(updateAddress.pending, (state) => {
			state.isModalLoading = true
			state.error = undefined
		})
		.addCase(updateAddress.rejected, (state, action) => {
			state.isModalLoading = false
			state.error = action.payload
		})
})

export const {actions: addressAction} = AddressSlice
export const {reducer: addressReducer} = AddressSlice