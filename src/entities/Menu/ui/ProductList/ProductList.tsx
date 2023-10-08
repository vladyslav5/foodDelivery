import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProductList.module.scss'
import {ProductCard} from '../ProductCard/ProductCard'
import {Product} from 'entities/Product'

interface ProductListProps {
    className?: string,
    products?:Product[]
}

export const ProductList = (props: ProductListProps) => {
	const {
		products,
		className
	} = props
	return (
		<div className={classNames(cls.ProductList, {}, [className!])}>
			{products?.map((product) => <ProductCard key={product.name} product={product}/>)}
		</div>
	)
}
