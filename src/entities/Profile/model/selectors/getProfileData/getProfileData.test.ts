import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {getProfileData} from './getProfileData'
import AvatarImg from 'shared/assets/AvatarImg.jpg'

describe('getProfileData test',()=>{
	const data = {
		avatar:AvatarImg,
		firstName:'Jo',
		lastName:'Doe',
		username:'Jo123'
	}
	test('should return data',()=>{
		const state:DeepPartial<StateSchema> ={
			profile:{
				data
			}
		}
		expect(getProfileData(state as StateSchema)).toEqual(data)
	})
	test('should work with empty state',()=>{
		const state:DeepPartial<StateSchema> ={}
		expect(getProfileData(state as StateSchema)).toEqual(undefined)
	})
})