import {combineReducers, configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'





export function createReduxStore(initialState?:StateSchema,asyncReducers?:ReducersMapObject<StateSchema>) {
	const rootReducers:ReducersMapObject<StateSchema> ={
		...asyncReducers,
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