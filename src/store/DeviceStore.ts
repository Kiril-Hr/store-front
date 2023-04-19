import { makeAutoObservable } from "mobx"
import { ITypesType, IBrandsType, IDevicesType } from "../utils/types"

export interface IDeviceStoreType {
    _types: ITypesType[]
    _brands: IBrandsType[]
    _devices: IDevicesType[]
}

export default class DeviceStore implements IDeviceStoreType {

    _types = [
        {
            id: 1,
            name: 'Smartphones'
        },
        {
            id: 2,
            name: 'Laptops'
        }
    ]
    _brands = [
        {
            id: 1,
            name: 'Samsung'
        },
        {
            id: 2,
            name: 'Apple'
        },
    ]
    _devices = [
        {
            id: 1,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        },
        {
            id: 2,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        },
        {
            id: 3,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        },
        {
            id: 4,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        }
    ]

    constructor () {
        makeAutoObservable(this)
    }


    setTypes(types: IDeviceStoreType['_types']) {
        this._types = types
    }

    setBrands(brands: IDeviceStoreType['_brands']) {
        this._brands = brands
    }

    setDevices(devices: IDeviceStoreType['_devices']) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
    
}