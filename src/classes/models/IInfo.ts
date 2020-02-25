import { IForm } from 'src/classes/models/IForm'

export interface ICommandInfo extends IForm {
  id: number
  logo: string
  name: string
  host: string
  network: string
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
  console.log({
    start: data.start,
    end: data.end,
    roundsCount: data.roundsCount,
    teams: Object.values(data.teams),
    services: Object.values(data.services),
  })
  return {
    start: data.start,
    end: data.end,
    roundsCount: data.roundsCount,
    teams: Object.values(data.teams),
    services: Object.values(data.services),
  }
}
