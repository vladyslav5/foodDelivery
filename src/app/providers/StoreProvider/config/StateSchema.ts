import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUserName'
import {ProfileSchema} from 'entities/Profile'
import {AxiosInstance} from 'axios'
import {MenuSchema} from 'entities/Menu'
import {CartSchema} from 'entities/Cart'
import {AddressSchema} from 'entities/Address'
import {OrderProductSchema} from 'features/OrderProduct'
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {OrderSchema} from 'entities/Order'
import {registrationSchema} from 'features/RegByNumber'


export interface StateSchema{
    user:UserSchema
    cart:CartSchema
    loginForm?:LoginSchema
    profile?:ProfileSchema
    menu?:MenuSchema,
    address?:AddressSchema,
    orderProduct?:OrderProductSchema
    order?:OrderSchema,
    registrationForm?:registrationSchema
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

export interface ThunkExtraArg{
    api:AxiosInstance
}

export interface ThunkConfig<T>{
    rejectValue:T
    extra:ThunkExtraArg
    state:StateSchema
}