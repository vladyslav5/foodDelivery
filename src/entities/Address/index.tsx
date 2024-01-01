import {AddressesLazy} from './ui/Addresses.lazy'
import {type AddressSchema, type Address} from './model/type/address'
import {addressReducer} from './model/slice/addressSlice'
import {AddAddressModal} from './ui/AddAddressModal/AddAddressModal'
import {AddressSelect} from '../../features/OrderProduct/ui/AddressSelect/AddressSelect'


export {
	Address,
	AddAddressModal,
	AddressSelect,
	AddressesLazy as Addresses,
	AddressSchema,
	addressReducer
}