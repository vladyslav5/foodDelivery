import axios from 'axios'
import {loginByUsername} from './loginByUsername'
import {Dispatch} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {User, userAction} from 'entities/User'
import TestAsyncThunk from 'shared/config/test/TestAsyncThunk'



jest.mock('axios')

const mockedAxios = jest.mocked(axios)
describe('loginByUsername test', () => {

	test('success login', async () => {
		const userValue = {username: 'vasya', id: 1}
		mockedAxios.post.mockReturnValue(Promise.resolve({data:userValue}))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({username: 'vasya', password: '123'})

		expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(userValue)
	})
	test('error login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({status:403}))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({username: 'vasya', password: '123'})

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')

	})
})