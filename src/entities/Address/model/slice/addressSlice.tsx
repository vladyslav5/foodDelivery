import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AddressSchema} from 'entities/Address/model/type/address'


const initialState:AddressSchema = {
	addresses:[]
}
export const AddressSlice = createSlice({
	name:'address',
	initialState,
	reducers:{}
})

export const {actions:addressAction} = AddressSlice
export const {reducer:addressReducer} = AddressSlice