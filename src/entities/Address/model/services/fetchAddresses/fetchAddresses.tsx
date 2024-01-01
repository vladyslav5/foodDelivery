import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Address} from '../../../model/type/address'





export const fetchAddresses = createAsyncThunk<Address[],void, {rejectValue:string,extra:ThunkExtraArg}>(
	'address/fetchAddresses',
	async (_, {extra,rejectWithValue}) => {
		try {
			const response = await extra.api.get<Address[]>('/addresses')
			if(!response.data){
				throw new Error()
			}
			return response.data
		}
		catch (e:any){
			return rejectWithValue('error')
		}

	}
)