import { IForm } from './IForm'
import { IService } from './IService'

export interface ICommand extends IForm {
  Id: number
  Name: string
  Image?: string
  TotalSLA: number
  FlagPoints: number
  TotalFlags: number
  Services: IService[]
}
