import React, {useState} from 'react'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import Light from 'shared/assets/icons/Light.svg'
import Dark from 'shared/assets/icons/Dark.svg'
import {SliderButton} from 'shared/ui/SliderButton/SliderButton'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme()
	const isDark = theme === Theme.DARK
	const [checked, setChecked] = useState(isDark)

	return (
		<SliderButton
			className={classNames(' ', {}, [className!])}
			checked={checked}
			onClick={() => {
				setChecked(prevState => !prevState)
				toggleTheme()
			}
			}>
			{
				isDark ? <Dark/> : <Light/>
			}
		</SliderButton>
	)
}
