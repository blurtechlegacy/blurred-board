import { IForm } from './IForm'
import { ICommand } from './ICommand'

export interface IBoard extends IForm {
  LastUpdate: Date
  Commands: ICommand[]
}
