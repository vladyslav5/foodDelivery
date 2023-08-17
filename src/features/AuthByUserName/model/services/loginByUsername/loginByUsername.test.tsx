import axios from 'axios'
import {loginByUsername} from './loginByUsername'
import {Dispatch} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)
describe('loginByUsername test', () => {
	let dispatch:Dispatch
	let getState:()=>StateSchema

	beforeEach(()=>{
		dispatch = jest.fn()
		getState = jest.fn()
	})
	test('', async () => {
		// mockedAxios.post.mockReturnValue(Promise.resolve({data: {username: 'vasya', id: 1}}))
		// const action = loginByUsername({username:'vasya',password:'123'})
		// const result = await action(dispatch,getState,undefined)
		// console.log(result)
		// expect(result)
		expect(loginByUsername()).toBeCalled()
	})
})