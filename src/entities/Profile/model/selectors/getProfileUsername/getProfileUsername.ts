import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileUsername = (state:StateSchema)=>state?.profile?.data?.username || ''