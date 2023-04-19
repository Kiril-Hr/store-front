export interface IUserStoreType {
    _isAuth: boolean
    _user: object
    setIsAuth: (value: boolean) => void
    setUser: (user: object) => void
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