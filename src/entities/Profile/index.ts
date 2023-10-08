import type {Profile, ProfileSchema} from './model/types/profile'
import {profileReducer, profileActions} from './model/slice/profileSlice'
import {fetchProfileData} from './model/services/fetchProfileData/fetchProfileData'
import {ProfileCard} from './ui/ProfileCard'
import {getProfileReadonly} from './model/selectors/getProfileReadonly/getProfileReadonly'
import {getProfileError} from './model/selectors/getProfileError/getProfileError'
import {getProfileData} from './model/selectors/getProfileData/getProfileData'
import {getProfileUsername} from './model/selectors/getProfileUsername/getProfileUsername'
import {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import {getProfileForm} from './model/selectors/getProfileForm/getProfileForm'
import {updateProfileData} from './model/services/updateProfileData/updateProfileData'
import {ProfileLoadAvatarModal} from './ui/ProfileLoadAvatarModal/ProfileLoadAvatarModal'
import {getProfileValidateErrors} from './model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import {ValidateProfileError} from './model/types/profile'
import {Addresses} from 'entities/Address/ui/Addresses'

export {
	Profile,
	ProfileSchema,
}

export {
	ValidateProfileError,
	ProfileLoadAvatarModal,
	updateProfileData,
	fetchProfileData,
	getProfileForm,
	profileReducer,
	profileActions,
	ProfileCard,
	getProfileValidateErrors,
	getProfileReadonly,
	getProfileError,
	getProfileData,
	getProfileUsername,
	getProfileIsLoading,
}
