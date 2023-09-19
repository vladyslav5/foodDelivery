import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getProfileError} from './getProfileError'

describe('getProfileError test',()=>{

	test('should return error',()=>{
		const state:DeepPartial<StateSchema> ={
			profile:{
				error:'fetch error'
			}
		}
		expect(getProfileError(state as StateSchema)).toEqual('fetch error')
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getProfileError(state as StateSchema)).toEqual(undefined)
	})
})