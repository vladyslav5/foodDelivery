import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Address} from '../../type/address'



export const updateAddress = createAsyncThunk<Address, Address, { rejectValue: string, extra: ThunkExtraArg }>(
	'address/updateAddress',
	async (address, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.put<Address>(`/addresses/${address.id}`, address)
			console.log(response.data)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)