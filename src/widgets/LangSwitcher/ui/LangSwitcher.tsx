import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {useTranslation} from 'react-i18next'
import Button, {ThemeButton} from 'shared/ui/Button/Button'

type LangSwitcherProps = {
	className?: string;
};

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation()
	const toggle = () => {
		/* Console.log(i18n.languages) */
		void i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
	}

	return (
		<Button className={classNames(' ', {}, [className!])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('language')}
		</Button>
	)
}
