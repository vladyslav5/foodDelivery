import {loginActions, LoginSchema} from 'features/AuthByUserName'
import {DeepPartial} from '@reduxjs/toolkit'
import {loginReducer} from './loginSlice'

describe('loginSlice test',()=>{
	test('set test username',()=>{
		const state:DeepPartial<LoginSchema> = {username:''}
		expect(loginReducer(state as LoginSchema,loginActions.setUsername('vasya')))
			.toEqual({username:'vasya'})
	})
	test('set test password',()=>{
		const state:DeepPartial<LoginSchema> = {password:'123'}
		expect(loginReducer(state as LoginSchema,loginActions.setPassword('123')))
			.toEqual({password:'123'})
	})

})