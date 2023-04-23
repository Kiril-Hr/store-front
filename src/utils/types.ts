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
    setPage: (page: IDeviceStoreType['_page']) => void
    setTotalCount: (count: IDeviceStoreType['_totalCount']) => void
    setLimit: (limit: IDeviceStoreType['_limit']) => void
}

export interface IDeviceStoreType extends IDeviceStoreActions {
    _types: ITypesType[]
    types: ITypesType[]
    _brands: IBrandsType[]
    brands: IBrandsType[]
    _devices: IDevicesType[]
    devices: IDevicesType[]
    _selectedType: ITypesType | {} 
    selectedType: ITypesType | {} 
    _selectedBrand: IBrandsType | {}
    selectedBrand: IBrandsType | {}
    _limit: number
    limit: number
    _totalCount: number
    totalCount: number
    _page: number
    page: number
}

export interface ITypesType {
    id: string
    name: string
}

export interface IBrandsType {
    id: string
    name: string
}

export interface ITypeInfo {
    number: string
    title: string
    description: string
} 

export interface IDevicesType {
    id: string
    name: string
    price: number
    rating: number
    img: string
    info: ITypeInfo[]
}