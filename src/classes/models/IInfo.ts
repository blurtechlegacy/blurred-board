import { IForm } from 'src/classes/models/IForm'
import { IService } from './IHistory'

export interface ICommandData extends IForm {
  id: number
  name: string
  score: number
  totalSLA?: number
  oldScore?: number
  logo?: string
  country?: string
  services: IService[]
  place?: number
  bias?: number
  round?: number
}

export interface IInfoRaw {
  teams: {
    [key: number]: ICommandData
  }
  services: {
    [key: number]: string
  }
  start: Date
  end: Date
  roundsCount: number
}

export interface IInfo {
  commands: ICommandData[]
  services: string[]
  start: Date
  end: Date
  roundsCount: number
}

export const rawCastInfo = (data: IInfoRaw): IInfo => {
  return {
    start: data.start,
    end: data.end,
    roundsCount: data.roundsCount,
    commands: Object.values(data.teams),
    services: Object.values(data.services),
  }
}
