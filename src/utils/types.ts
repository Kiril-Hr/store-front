interface IUserStoreActions {
    setIsAuth: (isAuth: boolean) => void
    setUser: (user: IUser | {}) => void
}

export interface IUser {
    email: string
    exp: number
    iat: number
    id: number
    role: string
}

export interface IUserStoreType extends IUserStoreActions {
    _isAuth: boolean
    _user: IUser | {} 
}

interface IDeviceStoreActions {
    setTypes: (types: IDeviceStoreType['_types']) => void
    setBrands: (brands: IDeviceStoreType['_brands']) => void
    setDevices: (devices: IDeviceStoreType['_devices']) => void
    setSelectedType: (type: IDeviceStoreType['_selectedType']) => void
    setSelectedBrand: (brand: IDeviceStoreType['_selectedBrand']) => void
}

export interface IDeviceStoreType extends IDeviceStoreActions {
    _types: ITypesType[]
    _brands: IBrandsType[]
    _devices: IDevicesType[]
    _selectedType: ITypesType | {} 
    _selectedBrand: IBrandsType | {} 
}

export interface ITypesType {
    id: number
    name: string
}

export interface IBrandsType {
    id: number
    name: string
}

export interface IDevicesType {
    id: number
    name: string
    price: number
    rating: number
    img: string
}