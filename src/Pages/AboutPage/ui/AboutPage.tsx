import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {SliderButton} from 'shared/ui/SliderButton/SliderButton'
import cls from './AboutPage.module.scss'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {OrderProduct} from 'features/OrderProduct'
import {Modal} from 'shared/ui/Modal/Modal'

const AboutPage = () => {
	const {t} = useTranslation('about')
	const [f, setF] = useState(false)
	return (
		<div>
			<SliderButton className={classNames(cls.scaleSlider)} checked={f}
				onClick={() => setF(prevState => !prevState)}/>
		</div>
	)
}

export default AboutPage
