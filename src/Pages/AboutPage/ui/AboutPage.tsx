import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {SliderButton} from 'shared/ui/SliderButton/SliderButton'
import cls from './AboutPage.module.scss'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

const AboutPage = () => {
	const {t} = useTranslation('about')
	const [f, setF] = useState(false)
	console.log(cls.scaleSlider)
	return (
		<div>
			{t('about us')}
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={() => {
					throw new Error('er')
				// eslint-disable-next-line i18next/no-literal-string
				}}>
                bug
			</Button>
			<SliderButton className={classNames(cls.scaleSlider)} checked={f} onClick={()=>setF(prevState => !prevState)}/>
		</div>
	)
}

export default AboutPage
