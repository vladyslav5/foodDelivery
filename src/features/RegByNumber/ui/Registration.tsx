import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Registration.module.scss'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getRegError} from '../model/selectors/getRegError/getRegError'
import {getRegIsLoading} from '../model/selectors/getRegIsLoading/getRegIsLoading'
import {getRegPassword} from '../model/selectors/getRegPassword/getRegPassword'
import {registrationSliceActions, registrationSliceReducer} from '../model/slice/registrationSlice'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {registrationUser} from '../model/services/registrationUser'
import {getRegUsername} from '../model/selectors/getRegUsername/getRegUsername'
import {User} from 'entities/User'
import {useNavigate} from 'react-router-dom'
import {ChangeEvent} from 'react'


const reducers: ReducerList = {
	registrationForm: registrationSliceReducer
}

interface RegByNumberProps {
    className?: string
}

export const Registration = ({className}: RegByNumberProps) => {
	const {t} = useTranslation('registration')
	const error = useSelector(getRegError)
	const isLoading = useSelector(getRegIsLoading)
	const username = useSelector(getRegUsername)
	const password = useSelector(getRegPassword)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const changeUsername = (value:string)=>{
		dispatch(registrationSliceActions.setUsername(value))
	}
	const changePassword = (value:string)=>{
		dispatch(registrationSliceActions.setPassword(value))
	}
	const onSignUpHandler = async ()=>{
		const res = await dispatch(registrationUser({username,password} as User))
		if(res.meta.requestStatus==='fulfilled'){
			navigate(-1)
		}
	}
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.RegByNumber, {}, [className!])}>
				<Text title={t('Registration')}/>
				<Input
					theme={InputTheme.PRIMARY}
					type={'text'}
					placeholder={t('username')}
					value={username}
					onChange={changeUsername}
				/>
				<Input
					theme={InputTheme.PRIMARY}
					type={'password'}
					placeholder={t('password')}
					value={password}
					onChange={changePassword}
				/>
				<LoadingButton text={t('sign up')} isLoading={isLoading} onClick={onSignUpHandler}/>
			</div>
			{
				error && <Text
					title={'Error'}
					theme={TextTheme.ERROR}
					className={cls.error}
					text={error}
				/>
			}
		</DynamicModuleLoader>
	)
}
