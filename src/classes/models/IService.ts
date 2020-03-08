import { IForm } from './IForm'

export interface IService extends IForm {
  Id: number
  Name: string
  SLA: number
  Flags: number
  Status: 'CORRUPT' | 'OK' | 'DOWN' | 'MUMBLE'
}
