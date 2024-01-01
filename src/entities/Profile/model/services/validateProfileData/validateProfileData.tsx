import {Profile, ValidateProfileError} from '../../types/profile'

export function validateProfileData(profile?: Profile) {
	if(!profile){
		return [ValidateProfileError.NOT_DATA]
	}
	const {
		username,
		firstName,
		lastName,
		avatarFile,
	} = profile
	const errors: ValidateProfileError[] = []
	if (!username || !lastName || !firstName) {
		errors.push(ValidateProfileError.INCORRENCT_USER_DATA)
	}
	return errors
}