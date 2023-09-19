import React, {memo} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {useTranslation} from 'react-i18next'
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'

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
			className={classNames(' ', {}, [className!])}
			theme={ButtonTheme.CLEAR}
			// style={{border:'1px solid red'}}
			square={short}
			onClick={toggle}
			size={short ? ButtonSize.L : ButtonSize.M}
		>
			{
				short
					?
					t('lang')
					:
					t('language')
			}
		</Button>
	)
})
