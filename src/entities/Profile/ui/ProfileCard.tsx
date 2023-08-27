import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useSelector} from 'react-redux'
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import {PageLoader} from 'widgets/PageLoader'
import {getProfileIsLoading} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({className}: ProfileCardProps) => {
	const {t} = useTranslation('profile')
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	if (isLoading) {
		return <PageLoader/>
	}
	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Profile')}/>
				<Button
					className={cls.editBtn}
					theme={ButtonTheme.OUTLINE}
				>
					{t('Edit')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input className={cls.input} placeholder={t('username')} value={data?.username}/>
				<Input className={cls.input} type={'file'} placeholder={'avatar'}/>
			</div>
		</div>
	)
}
