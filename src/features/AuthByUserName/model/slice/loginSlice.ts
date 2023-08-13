import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/loginSchema'
import {loginByUsername} from '../services/loginByUsername/loginByUsername'


const initialState: LoginSchema = {
	isLoading: false,
	password: '',
	username: ''
}

const LoginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(loginByUsername.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(loginByUsername.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const {actions: loginAction} = LoginSlice
export const {reducer: loginReducer} = LoginSlice