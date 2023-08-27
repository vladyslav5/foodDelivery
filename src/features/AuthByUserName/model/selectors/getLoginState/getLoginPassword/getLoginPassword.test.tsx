import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getLoginPassword} from './getLoginPassword'


describe('getLoginPassword test',()=>{
	test('should return password',()=>{
		const state:DeepPartial<StateSchema> ={
			loginForm:{
				password:'123qwe'
			}
		}
		expect(getLoginPassword(state as StateSchema)).toEqual('123qwe')
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getLoginPassword(state as StateSchema)).toEqual('')
	})
})