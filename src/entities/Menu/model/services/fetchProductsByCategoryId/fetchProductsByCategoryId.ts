import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Product} from 'entities/Product'


export const fetchProductsByCategoryId = createAsyncThunk<Product[], number, { rejectValue: string, extra: ThunkExtraArg }>(
	'menu/fetchProductsByCategoryId',
	async (id, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.get<Product[]>('/products', {params: {categoryId: id}})

			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (e: any) {
			return rejectWithValue('error')
		}

	}
)