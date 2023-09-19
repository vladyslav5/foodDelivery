
import {validateProfileData} from './validateProfileData'
import {ValidateProfileError} from 'entities/Profile'




describe('validateProfileData test', () => {
	const profileData = {
		avatar:'',
		firstName:'Jo',
		lastName:'Doe',
		username:'Jo123'
	}
	test('success valid', async () => {
		const result = validateProfileData(profileData)
		expect(result).toEqual([])
	})
	test('error incorrect user data without first name', async () => {
		const result = validateProfileData({
			...profileData,
			firstName:'',
			lastName:'Doe',
		})
		expect(result).toEqual([ValidateProfileError.INCORRENCT_USER_DATA])
	})
	test('error incorrect user data without last name', async () => {
		const result = validateProfileData({
			...profileData,
			firstName:'jonh',
			lastName:'',
		})
		expect(result).toEqual([ValidateProfileError.INCORRENCT_USER_DATA])
	})
	test('error incorrect user data empty profileData', async () => {
		const result = validateProfileData({})
		expect(result).toEqual([ValidateProfileError.INCORRENCT_USER_DATA])
	})
	test('error not data', async () => {
		const result = validateProfileData()
		expect(result).toEqual([ValidateProfileError.NOT_DATA])
	})
})