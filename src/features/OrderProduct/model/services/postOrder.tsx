import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Order} from 'entities/Order'


export const postOrder = createAsyncThunk<Order, Order, { rejectValue: string, extra: ThunkExtraArg }>(
	'orderProduct/postOrder',
	async (order, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.post<Order>('/orders', order)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)