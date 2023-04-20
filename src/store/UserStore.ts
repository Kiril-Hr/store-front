import { makeAutoObservable } from "mobx"
import { IUserStoreType } from '../utils/types'

export default class UserStore implements IUserStoreType {

  _isAuth = false
  _user = {}

  constructor () {
    makeAutoObservable(this)
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool
  }

  setUser(user: IUserStoreType['_user']) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

}