import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import Button from 'shared/ui/Button/Button'
import {Slider} from 'shared/ui/Slider/Slider'
import cls from './AboutPage.module.scss'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

const AboutPage = () => {
	const {t} = useTranslation('about')
	const [f, setF] = useState(false)
	console.log(cls.scaleSlider)
	return (
		<div>
			{t('about us')}
			<Button onClick={() => {
				throw new Error('er')
				// eslint-disable-next-line i18next/no-literal-string
			}}>
                bug
			</Button>
			<Slider className={classNames(cls.scaleSlider)} checked={f} setChecked={setF}/>
		</div>
	)
}

export default AboutPage
