import {Category, MenuSchema} from '../type/menu'
import {menuReducer} from './menuSlice'
import {fetchCategories} from '../services/fetchCategories/fetchCategories'
import {Product} from 'entities/Product'
import {
	fetchProductsByCategoryId
} from 'entities/Menu/model/services/fetchProductsByCategoryId/fetchProductsByCategoryId'


describe('profileSlice test', () => {
	const categories: Category[] = [
		{
			icon: 'icon',
			title: 'title',
			id: 1
		},
		{
			icon: 'icon2',
			title: 'title2',
			id: 2
		}
	]
	const products: Product[] = [
		{
			icon: 'icon',
			id: 1,
			categoryId: 1,
			price: 300,
			rating: 4,
			name: 'pizza'
		},
		{
			icon: 'icon2',
			id: 2,
			categoryId: 1,
			price: 300,
			rating: 4,
			name: 'pizza 2'
		}
	]
	test('test fetchCategories fulfilled', () => {
		const state: DeepPartial<MenuSchema> = {
			categories: [],
			isLoadingCategories: true
		}
		expect(menuReducer(state as MenuSchema, fetchCategories.fulfilled(categories, '')))
			.toEqual({
				categories: categories,
				isLoadingCategories: false
			})
	})
	test('test fetchCategories pending', () => {
		const state: DeepPartial<MenuSchema> = {
			isLoadingCategories: false
		}
		expect(menuReducer(state as MenuSchema, fetchCategories.pending))
			.toEqual({
				isLoadingCategories: true,
				error: undefined
			})
	})

	test('test fetchProducts fulfilled', () => {
		const state: DeepPartial<MenuSchema> = {
			products: [],
			isLoadingProducts: true
		}
		expect(menuReducer(state as MenuSchema, fetchProductsByCategoryId.fulfilled(products, '', 1)))
			.toEqual({
				products: products,
				isLoadingProducts: false
			})
	})
	test('test fetchProducts pending', () => {
		const state: DeepPartial<MenuSchema> = {
			isLoadingProducts: false
		}
		expect(menuReducer(state as MenuSchema, fetchProductsByCategoryId.pending))
			.toEqual({
				isLoadingProducts: true,
				error: undefined
			})
	})
})