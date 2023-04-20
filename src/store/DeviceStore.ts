import { makeAutoObservable } from "mobx"
import { IDeviceStoreType } from "../utils/types"

export default class DeviceStore implements IDeviceStoreType {

    _types = [
        {
            id: 1,
            name: 'Smartphones'
        },
        {
            id: 2,
            name: 'Laptops'
        },
        {
            id: 3,
            name: 'TV'
        },
        {
            id: 4,
            name: 'Freezer'
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
        {
            id: 3,
            name: 'Xiaomi'
        },
        {
            id: 4,
            name: 'Huawei'
        },
        {
            id: 5,
            name: 'Philips'
        },
        {
            id: 6,
            name: 'Lenovo'
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
        },
        {
            id: 5,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        },
        {
            id: 6,
            name: 'Iphone 12pro',
            price: 2500,
            rating: 5,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000'
        },
    ]
    _selectedType = {}

    _selectedBrand = {} 

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

    setSelectedType(type: IDeviceStoreType['_selectedType']) {
        this._selectedType = type
    }

    setSelectedBrand(brand: IDeviceStoreType['_selectedBrand']) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }
    
    get selectedBrand() {
        return this._selectedBrand
    }
}