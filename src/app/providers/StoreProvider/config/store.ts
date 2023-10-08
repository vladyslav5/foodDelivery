import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {cartReducer} from 'entities/Cart'
import {$api} from 'shared/api/api'





export function createReduxStore(
	initialState?:StateSchema,
	asyncReducers?:ReducersMapObject<StateSchema>,
)
{
	const rootReducers:ReducersMapObject<StateSchema> ={
		...asyncReducers,
		user:userReducer,
		cart:cartReducer
	}
	const reduceManager = createReducerManager(rootReducers)
	const store = configureStore({
		reducer: reduceManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools:__IS_DEV__,
		preloadedState:initialState,
		middleware:getDefaultMiddleware => getDefaultMiddleware({
			thunk:{
				extraArgument:{
					api: $api,
				}
			}
		})
	})
	// @ts-ignore
	store.reducerManager = reduceManager
	return store
}

export type AppDispatch= ReturnType< typeof createReduxStore>['dispatch']

