import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {registrationSchema} from '../type/registration'
import {registrationUser} from 'features/RegByNumber/model/services/registrationUser'


const initialState: registrationSchema = {
	error: '',
	password: '',
	username: '',
	isLoading: false
}
export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setUsername:(state, action:PayloadAction<string>)	=>{
			state.username = action.payload
		},
		setPassword:(state, action:PayloadAction<string>)	=>{
			state.password = action.payload
		}
	},
	extraReducers: builder => builder
		.addCase(registrationUser.fulfilled, (state) => {
			state.isLoading = false
		})
		.addCase(registrationUser.pending, (state) => {
			state.isLoading = true
		})
		.addCase(registrationUser.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
})

export const {actions: registrationSliceActions} = registrationSlice
export const {reducer: registrationSliceReducer} = registrationSlice