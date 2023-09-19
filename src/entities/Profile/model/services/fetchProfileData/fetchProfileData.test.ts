
import {fetchProfileData} from './fetchProfileData'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'




describe('fetchProfileData test', () => {
	const profileData = {
		avatar:'',
		firstName:'Jo',
		lastName:'Doe',
		username:'Jo123'
	}
	test('success fetch', async () => {

		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockReturnValue(Promise.resolve({data:profileData}))

		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual({...profileData,avatar:__API__})
	})
	test('error fetch', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)

		thunk.api.get.mockReturnValue(Promise.resolve({status:403}))

		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	})
})