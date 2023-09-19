import {ReactNode} from 'react'
import {render} from '@testing-library/react'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {defaultAsyncReducers} from 'shared/config/storybook/StoreDecorator'
import {StoreProvider} from 'app/providers/StoreProvider'


export function renderWithStoreProvider(component: ReactNode, options: DeepPartial<StateSchema> = {}) {
	return render(
		<StoreProvider initialState={options as StateSchema} asyncReducers={defaultAsyncReducers}>
			{component}
		</StoreProvider>
	)
}