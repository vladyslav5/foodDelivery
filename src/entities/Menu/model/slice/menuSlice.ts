import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Category, MenuSchema} from '../type/menu'
import {fetchCategories} from 'entities/Menu/model/services/fetchCategories/fetchCategories'
import {
	fetchProductsByCategoryId
} from 'entities/Menu/model/services/fetchProductsByCategoryId/fetchProductsByCategoryId'
import {Product} from 'entities/Product'



const initialState: MenuSchema = {
	categories:[],
	basket:[],
	products:[],
	isLoadingCategories:false,
	isLoadingProducts:false
}
export const MenuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setSelectedCategory:(state,action:PayloadAction<number>)=>{
			state.selectedCategory = state.categories.find(category=>category.id === action.payload)
		}
	},
	extraReducers:builder =>
		builder
			.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
				state.isLoadingCategories = false
				state.categories = action.payload
			})
			.addCase(fetchCategories.pending, (state) => {
				state.isLoadingCategories = true
				state.error = undefined
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.isLoadingCategories = false
				state.error = action.payload
			})
			//
			.addCase(fetchProductsByCategoryId.fulfilled, (state, action: PayloadAction<Product[]>) => {
				state.isLoadingProducts = false
				state.products = action.payload
			})
			.addCase(fetchProductsByCategoryId.pending, (state) => {
				state.isLoadingProducts = true
				state.error = undefined
			})
			.addCase(fetchProductsByCategoryId.rejected, (state, action) => {
				state.isLoadingProducts = false
				state.error = action.payload
			})
})

export const {actions: menuActions} = MenuSlice
export const {reducer: menuReducer} = MenuSlice