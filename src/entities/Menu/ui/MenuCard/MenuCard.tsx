import React, {Suspense} from 'react'
import {MenuLazy} from '../Menu/Menu.lazy'
import {PageLoader} from 'widgets/PageLoader'


export const MenuCard = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<MenuLazy/>
		</Suspense>
	)
}
