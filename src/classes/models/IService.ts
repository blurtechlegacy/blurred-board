import { IForm } from './IForm'

export interface IService extends IForm {
  Id: number
  Name: string
  Status: 'CORRUPT' | 'OK' | 'DOWN' | 'MUMBLE'
}
