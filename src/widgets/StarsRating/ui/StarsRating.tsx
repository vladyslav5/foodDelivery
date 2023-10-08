import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './StarsRating.module.scss'
import Star from 'shared/assets/icons/star.svg'

interface StarsRatingProps {
    className?: string
}

export const StarsRating = ({className}: StarsRatingProps) => {
	return (
		<div className={classNames(cls.StarsRating, {}, [className!])}>
			<div className={cls.wrapper}>
				<span className={classNames(cls.s1, {}, [cls.star])}>
					<Star className={cls.svg}/>
				</span>
				<span className={classNames(cls.s2, {}, [cls.star])}>
					<Star className={cls.svg}/>
				</span>
				<span className={classNames(cls.s3, {}, [cls.star])}>
					<Star className={cls.svg}/>
				</span>
				<span className={classNames(cls.s4, {}, [cls.star])}>
					<Star className={cls.svg}/>
				</span>
				<span className={classNames(cls.s5, {}, [cls.star])}>
					<Star className={cls.svg}/>
				</span>
			</div>
		</div>
	)
}
