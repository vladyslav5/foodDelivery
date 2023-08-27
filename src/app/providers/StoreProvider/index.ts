import {StoreProvider} from './ui/StoreProvider'
import {createReduxStore,AppDispatch} from './config/store'
import {ReduxStoreWithManager, ThunkExtraArg} from './config/StateSchema'
export {
	StoreProvider,
	createReduxStore,
}
export type{
	AppDispatch,
	ReduxStoreWithManager,
	ThunkExtraArg
}
