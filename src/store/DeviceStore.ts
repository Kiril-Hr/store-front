import { makeAutoObservable } from "mobx"
import { IBrandsType, IDeviceStoreType, IDevicesType, ITypesType } from "../utils/types"

export default class DeviceStore implements IDeviceStoreType {

    _types:  ITypesType[] = []
    _brands: IBrandsType[] = []
    _devices: IDevicesType[] = []

    _limit = 10
    _page = 1
    _totalCount = 0

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
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand: IDeviceStoreType['_selectedBrand']) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page: number) {
        this._page = page
    }

    setTotalCount(count: number) {
        this._totalCount = count
    }

    setLimit(limit: number) {
        this._limit = limit
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

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}