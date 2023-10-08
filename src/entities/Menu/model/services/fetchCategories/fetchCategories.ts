import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkExtraArg} from 'app/providers/StoreProvider'
import {Category} from 'entities/Menu/model/type/menu'





export const fetchCategories = createAsyncThunk<Category[],void, {rejectValue:string,extra:ThunkExtraArg}>(
	'menu/fetchCategories',
	async (_, {extra,rejectWithValue}) => {
		try {
			const response = await extra.api.get<Category[]>('/categories')
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