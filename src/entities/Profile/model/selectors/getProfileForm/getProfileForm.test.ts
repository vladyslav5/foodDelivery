import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getProfileForm} from './getProfileForm'
import AvatarImg from 'shared/assets/AvatarImg.jpg'

describe('getProfileForm test',()=>{
	const form = {
		avatar:AvatarImg,
		firstName:'Jo',
		lastName:'Doe',
		username:'Jo123'
	}
	test('should return form',()=>{
		const state:DeepPartial<StateSchema> ={
			profile:{
				form
			}
		}
		expect(getProfileForm(state as StateSchema)).toEqual(form)
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getProfileForm(state as StateSchema)).toEqual(undefined)
	})
})