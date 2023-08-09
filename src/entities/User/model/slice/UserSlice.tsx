import {createSlice} from '@reduxjs/toolkit'
import {UserSchema} from '../types/user'


const initialState:UserSchema = {}
export const UserSlice = createSlice({
	name:'user',
	initialState,
	reducers:{
		login:(state,action)=>{

		}
	}
})

export const {actions:userActions} = UserSlice
export const {reducer:userReducer} = UserSlice