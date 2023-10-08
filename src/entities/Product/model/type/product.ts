export interface Product{
    id:ProductId
    rating:number
    name:string
    price:number
    icon:string
    categoryId: number
}

export type ProductId = number | string