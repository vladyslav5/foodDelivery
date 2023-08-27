import {StoryFn} from '@storybook/react'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {StoreProvider} from 'app/providers/StoreProvider'
import {loginReducer} from 'features/AuthByUserName/model/slice/loginSlice'
import {profileReducer} from 'entities/Profile'
import {ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers:ReducerList ={
	loginForm:loginReducer,
	profile:profileReducer
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>,asyncReducers?:ReducerList) => (Story: StoryFn) => {

	return (
		<StoreProvider
			initialState={initialState as StateSchema}
			asyncReducers={{...defaultAsyncReducers,...asyncReducers}}
		>
			<Story/>
		</StoreProvider>
	)
}


