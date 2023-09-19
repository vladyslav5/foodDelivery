import {classNames, Mods} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useTranslation} from 'react-i18next'
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text'
import {Loader} from 'shared/ui/Loader/Loader'
import {Profile, ValidateProfileError} from 'entities/Profile'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {ProfileAvatar} from 'widgets/ProfileAvatar'
import AvatarImg from 'shared/assets/AvatarImg.jpg'


interface ProfileCardProps {
    className?: string
    validateErrors?: ValidateProfileError[]
    fetchError?: string
    isLoading?: boolean
    data?: Profile,
    readonly?: boolean
    onChangeLastName: (value?: string) => void
    onChangeFirstName: (value?: string) => void
    onChangeUsername: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		isLoading,
		fetchError,
		validateErrors,
		readonly,
		onChangeLastName,
		onChangeFirstName,
		onChangeUsername,
		data
	} = props
	const {t} = useTranslation('profile')

	if (isLoading) {
		return <div className={classNames(cls.ProfileCard, {}, [className, cls.Loader])}>
			<Loader/>
		</div>
	}
	if (fetchError) {
		return <div className={classNames(cls.ProfileCard, {}, [className, cls.Error])}>
			<Text
				theme={TextTheme.ERROR}
				className={cls.error}
				title={t('There was an Error')}
				text={t('Try to refresh the page')}
				align={TextAlign.CENTER}
			/>
		</div>
	}
	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Server Error'),
		[ValidateProfileError.INCORRENCT_USER_DATA]: t('Incorrect user data'),
		[ValidateProfileError.NOT_DATA]: t('not data'),
		[ValidateProfileError.INCORRENCT_USER_AVATAR_IMAGE]: t('Incorrect user image')

	}
	const mods: Mods = {
		[cls.editing]: !readonly
	}
	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.errors}>{
				validateErrors?.length && validateErrors.map(
					(e) =>
						<Text
							key={e}
							className={cls.error}
							theme={TextTheme.ERROR}

							text={validateErrorTranslates[e]}
						/>)}
			</div>

			<div className={classNames(cls.data, {}, [className!])}>
				{
					data?.avatar
						?
						<ProfileAvatar alt={''} readonly={readonly} src={data?.avatar}/>
						:
						<ProfileAvatar alt={''} readonly={readonly} src={AvatarImg}/>
				}
				<Text className={cls.label} text={t('Username')}/>
				<Input
					readonly={readonly}
					className={cls.input}
					theme={InputTheme.PRIMARY}
					value={data?.username}
					placeholder={t('John')}
					onChange={onChangeUsername}
				/>
				<Text className={cls.label} text={t('First name')}/>
				<Input
					readonly={readonly}
					className={cls.input}
					theme={InputTheme.PRIMARY}
					value={data?.firstName}
					placeholder={t('John')}
					onChange={onChangeFirstName}
				/>
				<Text className={cls.label} text={t('Last name')}/>
				<Input
					readonly={readonly}
					className={cls.input}
					theme={InputTheme.PRIMARY}
					value={data?.lastName}
					placeholder={t('Doe')}
					onChange={onChangeLastName}
				/>
			</div>
		</div>
	)
}
