import type {User,UserSchema} from './model/types/user'
import {userAction,userReducer} from './model/slice/userSlice'
import {getUserAuthData} from './model/selectors/getUserAuthData'

export {
	getUserAuthData,
	userAction,
	userReducer,
	User,
	UserSchema
}

