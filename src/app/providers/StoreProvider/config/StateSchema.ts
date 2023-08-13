import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUserName'
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'


export interface StateSchema{
    user:UserSchema
    loginForm?:LoginSchema
}
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager?:ReducerManager
}

export type StateSchemaKey = keyof StateSchema