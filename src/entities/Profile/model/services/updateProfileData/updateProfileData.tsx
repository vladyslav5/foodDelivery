import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile, ValidateProfileError} from '../../types/profile'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {validateProfileData} from '../validateProfileData/validateProfileData'


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, {extra, rejectWithValue, getState}) => {
		const form = getProfileForm(getState())
		try {
			const formData = new FormData()
			const errors = validateProfileData(form)

			if (errors.length) {
				return rejectWithValue(errors)
			}
			form?.lastName && formData.append('lastName', form?.lastName)
			form?.firstName && formData.append('firstName', form?.firstName)
			form?.username && formData.append('username', form?.username)
			form?.avatarFile && formData.append('avatar', form?.avatarFile)
			const {data} = await extra.api.put<Profile>('/profile', formData)
			data.avatar = __API__ + data.avatar
			return data
		} catch (e: any) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}

	}
)