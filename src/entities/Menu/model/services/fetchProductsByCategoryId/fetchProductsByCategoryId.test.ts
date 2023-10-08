
import {fetchProductsByCategoryId} from './fetchProductsByCategoryId'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'
import {Product} from 'entities/Product'




describe('fetchProductsByCategoryId test', () => {
	const productsData: Product[] = [
		{
			icon:'icon',
			id:1,
			price:300,
			rating:4,
			name:'burger',
			categoryId:1
		},
		{
			icon:'icon2',
			id:2,
			price:300,
			rating:4,
			name:'burger 2',
			categoryId:1
		}
	]
	test('success fetch', async () => {

		const thunk = new TestAsyncThunk(fetchProductsByCategoryId)
		thunk.api.get.mockReturnValue(Promise.resolve({data:productsData}))

		const result = await thunk.callThunk(1)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(productsData)
	})


	test('error fetchProductsByCategoryId', async () => {
		const thunk = new TestAsyncThunk(fetchProductsByCategoryId)
		thunk.api.get.mockReturnValue(Promise.resolve({status:403}))

		const result = await thunk.callThunk(1)
		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual('error')
	})
})