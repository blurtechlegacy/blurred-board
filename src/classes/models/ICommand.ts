import { IForm } from './IForm'
import { IService } from './IService'

export interface ICommand extends IForm {
  Id: number
  Name: string
  Image?: string
  SLA: number
  FlagPoints: number
  Flags: number
  Services: IService[]
}
