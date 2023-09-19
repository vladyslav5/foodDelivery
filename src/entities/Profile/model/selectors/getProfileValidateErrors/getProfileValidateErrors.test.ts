import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getProfileValidateErrors} from './getProfileValidateErrors'
import {ValidateProfileError} from 'entities/Profile'

describe('getProfileValidateErrors test',()=>{
	const validateError:ValidateProfileError[]=[
		ValidateProfileError.SERVER_ERROR,
		ValidateProfileError.NOT_DATA,
		ValidateProfileError.INCORRENCT_USER_DATA,
		ValidateProfileError.INCORRENCT_USER_AVATAR_IMAGE
	]
	test('should return error',()=>{
		const state:DeepPartial<StateSchema> ={
			profile:{
				validateError
			}
		}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError)
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
	})
})