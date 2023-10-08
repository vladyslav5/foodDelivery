
import {fetchCategories} from './fetchCategories'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'
import {Category} from '../../type/menu'




describe('fetchCategories test', () => {
	const categoriesData: Category[] = [
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
	test('success fetch', async () => {

		const thunk = new TestAsyncThunk(fetchCategories)
		thunk.api.get.mockReturnValue(Promise.resolve({data:categoriesData}))

		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		console.log('res suc',result)
		expect(result.payload).toEqual(categoriesData)
	})


	test('error fetchCategories', async () => {
		const thunk = new TestAsyncThunk(fetchCategories)
		thunk.api.get.mockReturnValue(Promise.resolve({status:403}))

		const result = await thunk.callThunk()
		console.log('res err',result)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual('error')
	})
})