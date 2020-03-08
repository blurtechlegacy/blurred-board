import { IForm } from 'src/classes/models/IForm'
import {IService} from "./IHistory";

export interface ICommandInfo extends IForm {
  id: number
  name: string
  score: number
  services: IService
}

export interface IInfoRaw {
  teams: {
    [key: number]: ICommandInfo
  }
  services: {
    [key: number]: string
  }
  start: Date
  end: Date
  roundsCount: number
}

export interface IInfo {
  teams: ICommandInfo[]
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
    teams: Object.values(data.teams),
    services: Object.values(data.services),
  }
}
