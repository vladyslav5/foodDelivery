import {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from '../config/store'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {ReducersMapObject} from '@reduxjs/toolkit'


interface StoreProviderProps {
    children?:ReactNode,
	initialState?:StateSchema,
	asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		initialState,
		asyncReducers
	}
        = props


	const store = createReduxStore(
		initialState,
		asyncReducers as ReducersMapObject,
	)
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}
