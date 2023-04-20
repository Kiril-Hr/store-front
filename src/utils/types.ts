interface IUserStoreActions {
    setIsAuth: (isAuth: boolean) => void
    setUser: (user: object) => void
}

export interface IUserStoreType extends IUserStoreActions {
    _isAuth: boolean
    _user: object
}

interface IDeviceStoreACtions {
    setTypes: (types: IDeviceStoreType['_types']) => void
    setBrands: (brands: IDeviceStoreType['_brands']) => void
    setDevices: (devices: IDeviceStoreType['_devices']) => void
    setSelectedType: (type: IDeviceStoreType['_selectedType']) => void
    setSelectedBrand: (brand: IDeviceStoreType['_selectedBrand']) => void
}

export interface IDeviceStoreType extends IDeviceStoreACtions {
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