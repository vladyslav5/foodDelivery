import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {User, userAction} from 'entities/User'
import {USER_LOCALSTORAGE_KEY} from 'shared/config/consts/localStorage'


interface loginByUsernameProps{
    username:string
    password:string
}
enum LoginErrors{
	INCORECT_DATA='Incorrect password or username',
	SERVER_ERROR='Server error'
}
export const loginByUsername = createAsyncThunk<User,loginByUsernameProps, {rejectValue:string}>(
	'login/loginByUsername',
	async ({username,password}, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:4000/login',{
				username,password
			})
			if(!response.data){
				throw new Error()
			}
			localStorage.setItem(USER_LOCALSTORAGE_KEY,JSON.stringify(response.data))
			thunkAPI.dispatch(userAction.setAuthData(response.data))
			return response.data
		}
		catch (e:any){
			return thunkAPI.rejectWithValue('error')
		}

	}
)