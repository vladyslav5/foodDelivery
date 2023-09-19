import {profileActions, profileReducer} from './profileSlice'
import {ProfileSchema, updateProfileData, ValidateProfileError} from 'entities/Profile'
const profileData = {
	avatar: '',
	firstName: 'Jo',
	lastName: 'Doe',
	username: 'Jo123'
}
describe('profileSlice test', () => {
	test('set test readonly', () => {
		const state: DeepPartial<ProfileSchema> = {readonly: false}
		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
			.toEqual({readonly: true})
	})
	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = {
			form: {
				avatar: '',
				firstName: '',
				lastName: '',
				username: ''
			},
		}
		expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(profileData)))
			.toEqual({
				form: profileData
			})
	})
	test('set test cancel', () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			data: profileData,
		}
		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
			.toEqual({
				readonly: true,
				data: profileData,
				form: profileData,
				validateError: undefined
			})
	})
	test('test update pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.INCORRENCT_USER_DATA]
		}
		expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
			.toEqual({
				isLoading: true,
				validateError: undefined
			})
	})
	test('test update fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			readonly:false,
			validateError: [ValidateProfileError.INCORRENCT_USER_DATA]
		}
		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData,'')))
			.toEqual({
				isLoading: false,
				readonly:true,
				data: profileData,
				form: profileData,
				validateError: undefined
			})
	})

})