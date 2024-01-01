import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './MainPage.module.scss'
import {MenuCard} from 'entities/Menu'
import Banner from 'shared/assets/Banner.svg'

const MainPage = () => {
	const {t} = useTranslation('main')
	return (
		<div className={classNames(cls.MainPage, {}, [])}>
			<div className={cls.banner}>
				<div>
					<h2>{t('Order now and get free delivery')}</h2>
					<Banner className={cls.icon}/>
				</div>
			</div>
			<MenuCard/>
		</div>

	)
}

export default MainPage
