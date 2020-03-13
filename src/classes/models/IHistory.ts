import { IStatus } from 'src/classes/models/IStatus'
import { IForm } from 'src/classes/models/IForm'
import { ICommandData } from 'src/classes/models/IInfo'

export interface IService extends IForm {
  id?: number
  sla?: number
  oldSla?: number
  name?: string
  flags: number
  oldFlags?: number
  sflags: number
  oldSflags?: number
  fp: number
  oldFp?: number
  status: IStatus
  stdout?: string
  active?: number
  disableInterval?: any
}

export interface IRound extends IForm {
  round: number
  scoreboard: ICommandData[]
}

export type IHistory = IRound[]
