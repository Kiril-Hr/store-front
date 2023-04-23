import { ITypesType } from '../utils/types'
import { $authHost, $host } from './axios'

type TypeBrandName = {
    name: string
}

export const createType = async (type: TypeBrandName) => {
    try {
        const {data} = await $authHost.post('api/type', type)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const fetchTypes = async () => {
    try {
        const {data} = await $host.get('api/type')
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createBrand = async (brand: TypeBrandName) => {
    try {
        const {data} = await $authHost.post('api/brand', brand)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const fetchBrands = async () => {
    try {
        const {data} = await $host.get('api/brand')
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createDevice = async (device: FormData) => {
    try {
        const {data} = await $authHost.post('api/device', device)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const fetchDevices = async (typeId?: string | null, brandId?: string | null, page?: number, limit = 5) => {
    try {
        const {data} = await $host.get('api/device', {params:{
            typeId, brandId, page, limit
        }})
        return data
    } catch (err) {
        console.log(err)
    }
}

export const fetchDevice = async (id: string) => {
    try {
        const {data} = await $host.get(`api/device/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
}