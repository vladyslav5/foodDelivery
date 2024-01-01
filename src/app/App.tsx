import React, {Suspense, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {AppRouter} from 'app/providers/router'
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
				<AppRouter/>
			</Suspense>
		</div>
	)
}

export default App
