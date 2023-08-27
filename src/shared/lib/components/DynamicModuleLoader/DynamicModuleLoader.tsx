import {ReactNode, useEffect} from 'react'
import {useStore} from 'react-redux'
import {ReduxStoreWithManager} from 'app/providers/StoreProvider'
import {Reducer} from '@reduxjs/toolkit'
import {StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}
type ReducersListEntry = [StateSchemaKey,Reducer]
interface DynamicModuleLoaderProps {
    children: ReactNode,
    reducers: ReducerList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const {
		children,
		reducers,
		removeAfterUnmount = false
	} = props
	const store = useStore() as ReduxStoreWithManager
	// const dispatch = useDispatch()
	useEffect(() => {
		Object.entries(reducers).forEach(([name,reducer])=>{
			store?.reducerManager?.add(name as StateSchemaKey, reducer)
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name,])=>{
					store?.reducerManager?.remove(name as StateSchemaKey)
				})
			}
		}

		// eslint-disable-next-line
    }, [])
	return (
		<>
			{children}
		</>
	)
}
