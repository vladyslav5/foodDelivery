import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Order} from 'entities/Order'


export const fetchPastOrders = createAsyncThunk<Order[], void, { rejectValue: string, extra: ThunkExtraArg }>(
	'order/fetchPastOrders',
	async (_, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.get<Order[]>('/orders')
			console.log(response.data,'orders')
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)