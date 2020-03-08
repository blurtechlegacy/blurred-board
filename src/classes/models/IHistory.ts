import { IStatus } from 'src/classes/models/IStatus'
import { IForm } from 'src/classes/models/IForm'

export interface IService extends IForm {
  flag: number
  sflags: number
  fp: number
  status: IStatus
}

export interface IScoreboardRaw {
  [key: number]: {
    id: number
    score: number
    services: {
      [key: number]: IService
    }
  }
}

export interface IScoreboard {
  id: number
  score: number
  services: IService[]
}

export interface IRound extends IForm {
  round: number
  scoreboard: IScoreboard[]
}

export type IHistory = IRound[]
