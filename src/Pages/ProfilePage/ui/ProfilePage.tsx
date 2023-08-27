import React, {useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
    className?: string
}
const reducers:ReducerList ={
	profile:profileReducer
}
const ProfilePage = ({className}: ProfilePageProps) => {
	const dispatch = useAppDispatch()
	useEffect(()=>{
		dispatch(fetchProfileData())
	},[dispatch])
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ProfilePage, {}, [className!])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
