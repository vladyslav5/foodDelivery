import React, {Suspense, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {useDispatch} from 'react-redux'
import {userAction} from 'entities/User'



const App = () => {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(userAction.initAuthData())
	},[dispatch])
	return (
		<div className={classNames('app')}>
			<Suspense fallback=''>
				<Navbar/>
				<div className={'content-page'}>
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}

export default App
