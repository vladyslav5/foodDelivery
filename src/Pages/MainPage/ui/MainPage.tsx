import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './MainPage.module.scss'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {MenuCard} from 'entities/Menu'


const MainPage = () => {
	const {t} = useTranslation('main')
	const [value, setValue] = useState('')
	const onChange = (val: string) => {
		setValue(val)
	}

	return (
		<div className={classNames(cls.MainPage, {}, [])}>
			{t('Main page')}
			<Input theme={InputTheme.PRIMARY} value={value} onChange={onChange} />
			<MenuCard/>
		</div>

	)
}

export default MainPage
