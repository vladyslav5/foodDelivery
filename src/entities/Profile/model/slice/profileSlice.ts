import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema} from '../types/profile'
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData'
import {updateProfileData} from '../services/updateProfileData/updateProfileData'


const initialState: ProfileSchema = {
	readonly: true,
	isLoading: true,
}
export const ProfileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelEdit: (state) => {
			state.readonly = true
			state.form = state.data
			state.validateError = undefined
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
			})
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
				state.validateError = undefined
			})
			.addCase(updateProfileData.pending, (state) => {
				state.isLoading = true
				state.validateError = undefined
			})
			.addCase(updateProfileData.rejected, (state,action) => {
				state.isLoading = false
				state.validateError = action.payload
			})
	}

})

export const {actions: profileActions} = ProfileSlice
export const {reducer: profileReducer} = ProfileSlice