import {combineReducers, configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {userReducer} from 'entities/User'
import {loginReducers} from 'features/AuthByUserName'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'





export function createReduxStore(initialState?:StateSchema) {
	const rootReducers:ReducersMapObject<StateSchema> ={
		user:userReducer,
	}
	const reduceManager = createReducerManager(rootReducers)

	const store = configureStore({
		reducer: reduceManager.reduce,
		devTools:__IS_DEV__,
		preloadedState:initialState
	})
	// @ts-ignore
	store.reducerManager = reduceManager
	return store
}