import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			{publicRoutes.map(route => <Route key={route.path} {...route} element={
				<div className={'page-wrapper'}>
					{route.element}
				</div>}/>)}
		</Routes>
	</Suspense>
)

export default AppRouter
