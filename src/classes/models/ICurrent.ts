import { ICommandData } from 'src/classes/models/IInfo'
import { IService } from 'src/classes/models/IHistory'

export interface ICurrent {
  round: number
  scoreboard: ICommandData[]
}

interface ICommandRaw {
  d: number
  n: number
  name: string
  old_score: number
  score: number
  round: number
  team_id: number
  old_services: IService[]
  services: IService[]
}

interface IServiceRaw {
  active: number
  disable_interval: any
  name: string
}

export interface ICurrentRaw {
  round: number
  scoreboard: ICommandRaw[]
  services: IServiceRaw[]
}

const servicesMap = (item: ICommandRaw, services: IServiceRaw[]) =>
  item.services.map((service: IService, index: number) => {
    const old = item.old_services[index]
    return {
      id: service.id,
      name: services[index].name,
      active: services[index].active,
      disableInterval: services[index].disable_interval,
      flags: service.flags,
      oldFlags: old.flags,
      fp: service.fp,
      oldFp: old.fp,
      sflags: service.sflags,
      oldSflags: old.sflags,
      sla: service.sla,
      oldSla: old.sla,
      status: service.status,
      stdout: service.stdout,
    }
  })

const scoreboardMap = (scoreboard: ICommandRaw[], services: IServiceRaw[]) =>
  scoreboard.map((item: ICommandRaw) => {
    return {
      id: item.team_id,
      name: item.name,
      score: item.score,
      oldScore: item.old_score,
      round: item.round,
      place: item.n,
      bias: item.d,
      services: servicesMap(item, services),
    }
  })

export const rawCastCurrent = (data: ICurrentRaw): ICurrent => {
  return {
    round: data.round,
    scoreboard: scoreboardMap(data.scoreboard, Object.values(data.services)),
  }
}
