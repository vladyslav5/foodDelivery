import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Address} from '../../type/address'


export const postAddress = createAsyncThunk<Address, Address, { rejectValue: string, extra: ThunkExtraArg }>(
	'address/postAddress',
	async (address, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.post<Address>('/addresses', address)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)