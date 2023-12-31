import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Profile} from '../../types/profile'




export const fetchProfileData = createAsyncThunk<Profile,void, {rejectValue:string,extra:ThunkExtraArg}>(
	'profile/fetchProfileData',
	async (_, {extra,rejectWithValue}) => {
		try {
			const response = await extra.api.get<Profile>('/profile')
			// throw new Error()
			response.data.avatar = __API__ + response.data.avatar
			return response.data
		}
		catch (e:any){
			return rejectWithValue('error')
		}

	}
)