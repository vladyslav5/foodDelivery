import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {To} from '@remix-run/router'
import {NavigateOptions} from 'react-router/dist/lib/context'
import axios from 'axios'
import {USER_LOCALSTORAGE_KEY} from 'shared/config/consts/localStorage'

const api = axios.create({
	baseURL:__API__,
	headers:{
		authorization:localStorage.getItem(USER_LOCALSTORAGE_KEY)
	}
})



export function createReduxStore(
	initialState?:StateSchema,
	asyncReducers?:ReducersMapObject<StateSchema>,
	navigate?:(to: To, options?: NavigateOptions) => void,

)
{
	const rootReducers:ReducersMapObject<StateSchema> ={
		...asyncReducers,
		user:userReducer,
	}
	const reduceManager = createReducerManager(rootReducers)
	const store = configureStore({
		reducer: reduceManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools:__IS_DEV__,
		preloadedState:initialState,
		middleware:getDefaultMiddleware => getDefaultMiddleware({
			thunk:{
				extraArgument:{
					api: api,
					navigate:navigate
				}
			}
		})
	})
	// @ts-ignore
	store.reducerManager = reduceManager
	return store
}

export type AppDispatch= ReturnType< typeof createReduxStore>['dispatch']

