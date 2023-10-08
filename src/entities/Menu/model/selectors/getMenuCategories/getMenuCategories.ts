import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'

export const getMenuCategories = (state:StateSchema)=>state.menu?.categories || []