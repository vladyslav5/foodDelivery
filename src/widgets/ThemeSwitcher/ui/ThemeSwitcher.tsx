import React, {memo, useState} from 'react'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import Light from 'shared/assets/icons/Light.svg'
import Dark from 'shared/assets/icons/Dark.svg'
import {SliderButton} from 'shared/ui/SliderButton/SliderButton'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme()
	const isDark = theme === Theme.DARK
	const [checked, setChecked] = useState(isDark)
	const onSliderHandler = ()=>{
		setChecked(prevState => !prevState)
		toggleTheme()
	}
	return (
		<SliderButton
			className={classNames(' ', {}, [className!])}
			checked={checked}
			onClick={onSliderHandler}
		>
			{
				isDark ? <Dark/> : <Light/>
			}
		</SliderButton>
	)
})
