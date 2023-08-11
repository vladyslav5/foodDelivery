import type {User,UserSchema} from './model/types/user'
import  {userActions,userReducer} from './model/slice/UserSlice'
import {getUserAuthData} from './model/selectors/getUserAuthData'

export type {
	User,UserSchema
}

export {
	getUserAuthData,
	userActions,
	userReducer
}

