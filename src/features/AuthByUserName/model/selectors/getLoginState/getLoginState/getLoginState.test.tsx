import {DeepPartial} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getLoginState} from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState/getLoginState'

describe('getLoginState test',()=>{
	test('should return state',()=>{
		const state:DeepPartial<StateSchema> ={
			loginForm:{
				error:'error',
				username:'vasya',
				password:'123qwe',
				isLoading:false
			}
		}
		expect(getLoginState(state as StateSchema)).toEqual({
			error:'error',
			username:'vasya',
			password:'123qwe',
			isLoading:false
		})
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getLoginState(state as StateSchema)).toEqual(undefined)
	})
})