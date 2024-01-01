import React, {memo} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {useTranslation} from 'react-i18next'
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {Text, TextAlign, TextSize, TextTheme} from 'shared/ui/Text/Text'
import cls from './LangSwitcher.module.scss'

type LangSwitcherProps = {
    className?: string;
    short?: boolean
};

export const LangSwitcher = memo(({className, short}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation()
	const toggle = () => {
		/* Console.log(i18n.languages) */
		void i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
	}
	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className!])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
			size={short ? ButtonSize.L : ButtonSize.M}
		>
			{
				short
					?
					t('lang')
					:
					<div className={cls.long}>
						<Text theme={TextTheme.SECONDARY} text={t('lang')} align={TextAlign.CENTER} fontSize={TextSize.L}/>
						<span>{t('language')}</span>
					</div>
			}
		</Button>
	)
})
