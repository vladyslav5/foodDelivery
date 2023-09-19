import {updateProfileData} from './updateProfileData'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'
import {ValidateProfileError} from 'entities/Profile'


describe('updateProfileData test', () => {
	const profileData = {
		avatar: '',
		firstName: 'Jo',
		lastName: 'Doe',
		username: 'Jo123'
	}
	test('success update', async () => {

		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: profileData
			}
		})
		thunk.api.put.mockReturnValue(Promise.resolve({data: profileData}))

		const result = await thunk.callThunk()

		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual({...profileData, avatar: __API__})
	})
	test(' server error update ', async () => {
		const thunk = new TestAsyncThunk(updateProfileData,
			{
				profile: {
					form: profileData
				}
			})
		thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
		const result = await thunk.callThunk()
		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})
	test(' valid error update ', async () => {
		const thunk = new TestAsyncThunk(updateProfileData,
			{
				profile: {
					form: {...profileData,lastName:''}
				}
			})
		const result = await thunk.callThunk()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.INCORRENCT_USER_DATA])
	})
})