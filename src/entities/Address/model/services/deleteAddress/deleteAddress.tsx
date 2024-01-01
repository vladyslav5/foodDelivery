import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {addressAction} from '../../slice/addressSlice'


export const deleteAddress = createAsyncThunk<void, number, { rejectValue: string, extra: ThunkExtraArg }>(
	'address/deleteAddress',
	async (id, {extra, rejectWithValue,dispatch}) => {
		try {
			dispatch(addressAction.remove(id))
			await extra.api.delete(`/addresses/${id}`)
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)