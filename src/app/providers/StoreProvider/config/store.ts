import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {userReducer} from 'entities/User'



const RootReducer = combineReducers<StateSchema>({
	user:userReducer
})
export function createReduxStore(initialState?:StateSchema) {
	return configureStore({
		reducer: RootReducer,
		devTools:__IS_DEV__,
		preloadedState:initialState
	})
}

