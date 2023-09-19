
import {loginByUsername} from './loginByUsername'
import {userAction} from 'entities/User'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'




describe('loginByUsername test', () => {


	test('success login', async () => {
		const userValue = {username: 'vasya', id: 1}
		const thunk = new TestAsyncThunk(loginByUsername)

		thunk.api.post.mockReturnValue(Promise.resolve({data:userValue}))

		const result = await thunk.callThunk({username: 'vasya', password: '123'})

		expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
		expect(thunk.api.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(userValue)
	})
	test('error login', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)

		thunk.api.post.mockReturnValue(Promise.resolve({status:403}))

		const result = await thunk.callThunk({username: 'vasya', password: '123'})

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	})
})