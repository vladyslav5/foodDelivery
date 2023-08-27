import type {Profile,ProfileSchema} from './model/types/profile'
import {profileReducer,profileActions} from './model/slice/profileSlice'
import {fetchProfileData} from './model/services/fetchProfileData/fetchProfileData'
import {ProfileCard} from './ui/ProfileCard'

export {
	Profile,
	ProfileSchema
}

export {
	fetchProfileData,
	profileReducer,
	profileActions,
	ProfileCard
}
