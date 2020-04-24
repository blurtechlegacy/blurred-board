import { ICommandData } from 'src/classes/models/IInfo'
import { IService } from 'src/classes/models/IHistory'
/*import { getState } from '../../store'
import { IStatus } from './IStatus'*/

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

const calculateTotalSLA = (services: IService[]) => {
  let acc = 0
  for (const service of services) {
    if (service && service.sla) acc = acc + service.sla
  }
  return Math.ceil(acc / services.length)
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

/*interface IGraphics {
  id: number
  services: {
    id: number
    fpHistory: number[]
    flagsHistory: number[]
    statusHistory: IStatus[]
    sflagsHistory: number[]
    fpSum: number
    flagsSum: number
    sflagsSum: number
  }[]
}*/

/*const calculateGraphicsData = (): IGraphics[] => {
  const history = getState().history
  const teams: Array<any> = []
  history.forEach(round =>
    round.scoreboard.map(team => {
      if (teams[team.id - 1]) {
        team.services.map((service: IService, index: number) => {
          let tmp
          tmp = teams[team.id - 1].services[index]
          tmp.statusHistory.push(service.status)
          tmp.fpHistory.push(service.fp)
          tmp.flagsHistory.push(service.flags)
          tmp.sflagsHistory.push(service.sflags)
          tmp.fpSum += service.fp
          tmp.flagsSum += service.flags
          tmp.sflagsSum += service.sflags
          return service
        })
      } else {
        teams[team.id - 1] = {
          id: team.id,
          services: team.services.map((service, index) => {
            return {
              id: index,
              statusHistory: [service.status],
              fpHistory: [service.fp],
              flagsHistory: [service.flags],
              sflagsHistory: [service.sflags],
              fpSum: service.fp,
              flagsSum: service.flags,
              sflagsSum: service.sflags,
            }
          }),
        }
      }
      return round
    })
  )
  return teams
}*/

const scoreboardMap = (
  scoreboard: ICommandRaw[],
  services: IServiceRaw[]
): ICommandData[] =>
  scoreboard.map((item: ICommandRaw) => {
    return {
      id: item.team_id,
      name: item.name,
      score: item.score,
      oldScore: item.old_score,
      round: item.round,
      place: item.n,
      bias: item.d,
      totalSLA: calculateTotalSLA(item.services),
      services: servicesMap(item, services),
    }
  })

export const rawCastCurrent = (data: ICurrentRaw): ICurrent => {
  return {
    round: data.round,
    scoreboard: scoreboardMap(data.scoreboard, Object.values(data.services)),
    /* scoreboardMap(
      data.scoreboard,
      Object.values(data.services)
    ).map((team: ICommandData) => {
      return {
        ...team,
        services: team.services.map(service => {
          return {
            ...service,
            ...calculateGraphicsData()
              .find((item: IGraphics) => item.id === team.id)
              ?.services.find(i => i.id === service.id),
          }
        }),
      }
    }),*/
  }
}
