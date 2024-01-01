import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './StarsRating.module.scss'
import Star from 'shared/assets/icons/star.svg'

interface StarsRatingProps {
    className?: string
	rating:number
}

export const StarsRating = ({className,rating}: StarsRatingProps) => {
	return (
		<div className={classNames(cls.StarsRating, {}, [className!])}>
			<div className={cls.wrapper}>
				{
					[...Array(5)].map((elm,i)=><span className={classNames(cls.star, {[cls.startSelected]:rating>=i+1}, [])} key={i}>
						<Star className={cls.svg}/>
					</span>)
				}
			</div>
		</div>
	)
}
