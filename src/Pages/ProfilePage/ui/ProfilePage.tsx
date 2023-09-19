import React, {useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useSelector} from 'react-redux'
import {ProfileHeader} from './ProfileHeader/ProfileHeader'


interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
	profile: profileReducer
}
const ProfilePage = ({className}: ProfilePageProps) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		if(__PROJECT__ !== 'storybook')
			dispatch(fetchProfileData())
	}, [dispatch])
	const formData = useSelector(getProfileForm)
	const fetchError = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)
	const readonly = useSelector(getProfileReadonly)
	const validateErrors = useSelector(getProfileValidateErrors)

	const onChangeFirstName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({firstName: value || ''}))
	}, [dispatch])
	const onChangeLastName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({lastName: value || ''}))
	}, [dispatch])
	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({username: value || ''}))
	}, [dispatch])
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ProfilePage, {}, [className!])}>
				{
					!fetchError
					&&
					<ProfileHeader/>
				}
				<ProfileCard
					readonly={readonly}
					isLoading={isLoading}
					validateErrors={validateErrors}
					fetchError={fetchError}
					data={formData}
					onChangeFirstName={onChangeFirstName}
					onChangeLastName={onChangeLastName}
					onChangeUsername={onChangeUsername}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
