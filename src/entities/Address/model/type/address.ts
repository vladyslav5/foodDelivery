export interface AddressSchema{
    addresses:Address[],
    isLoading:boolean
    isModalLoading:boolean
    error?:string
}

export interface Address{
    id:number
    name:string,
    phoneNumber:string,
    city:string,
    address:string,
    pinCode:string

}
