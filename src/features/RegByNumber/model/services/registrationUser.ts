import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {User, userAction} from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import {USER_LOCALSTORAGE_KEY} from 'shared/config/consts/localStorage'

interface data {
    user: User
    status: number,
    message: string
}
export const registrationUser = createAsyncThunk<User, User, { rejectValue: string, extra: ThunkExtraArg }>(
	'registration/registrationUser',
	async (user, {extra,dispatch, rejectWithValue}) => {
		try {
			const response = await extra.api.post<data>('/reg', user)
			if (!response.data) {
				throw new Error()
			}
			switch (response.data.message){
			case 'USERNAME_NOT_UNIQUE':
				return rejectWithValue(i18n.t('username already in use'))
			case 'USERNAME_NOT_VALID':
				return rejectWithValue(i18n.t('username is invalid'))
			}
			localStorage.setItem(USER_LOCALSTORAGE_KEY,JSON.stringify(response.data.user))
			dispatch(userAction.setAuthData(response.data.user))
			return response.data.user
		} catch (e: any) {
			return rejectWithValue('error')
		}
	}
)