import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfileHeader.module.scss'
import {Text} from 'shared/ui/Text/Text'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile'
import {useCallback} from 'react'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfileHeaderProps {
    className?: string
}

export const ProfileHeader = ({className}: ProfileHeaderProps) => {
	const {t} = useTranslation('profile')
	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()
	const onEdit = useCallback(()=>{
		dispatch(profileActions.setReadonly(false))
	},[dispatch])

	const onCancelEdit = useCallback(()=>{
		dispatch(profileActions.cancelEdit())
	},[dispatch])

	const onSave = useCallback(()=>{
		dispatch(updateProfileData())
	},[dispatch])

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className!])}>
			<Text title={t('Profile')}/>
			{readonly ?
				(
					<Button
						className={cls.editBtn}
						theme={ButtonTheme.OUTLINE}
						onClick={onEdit}
					>
						{t('Edit')}
					</Button>
				)
				:
				(
					<>
						<Button
							className={cls.cancelBtn}
							theme={ButtonTheme.BACKGROUND_INVERTED}
							onClick={onCancelEdit}
						>
							{t('Cancel')}

						</Button>
						<Button
							className={cls.saveBtn}
							theme={ButtonTheme.OUTLINE}
							onClick={onSave}
						>
							{t('Save')}
						</Button>
					</>
				)
			}
		</div>
	)
}
