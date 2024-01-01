import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes, wholePageRoutes} from 'shared/config/routeConfig/routeConfig'
import {PageLoader} from 'widgets/PageLoader'
import {Sidebar} from 'widgets/Sidebar'
import {Navbar} from 'widgets/Navbar'

const AppRouter = () => (
	<Suspense fallback={<PageLoader/>}>
		<Routes>
			{publicRoutes.map(route => <Route key={route.path} {...route} element={
				<React.Fragment>
					<Navbar/>
					<div className={'content-page'}>
						<Sidebar/>
						<div className={'page-wrapper'}>
							{route.element}
						</div>
					</div>
				</React.Fragment>
			}/>)}
			{
				wholePageRoutes.map(route => <Route key={route.path} {...route} element={route.element}/>)
			}
		</Routes>
	</Suspense>
)

export default AppRouter
