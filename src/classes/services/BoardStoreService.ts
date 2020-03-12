import * as BoardApi from 'src/classes/services/api/BoardApi'
import { IFetchResult } from 'src/classes/models/IFetchResult'
import { ICommandData, IInfo } from 'src/classes/models/IInfo'
import { IHistory, IScoreboard, IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { getState, setNextState } from 'src/store'

export const init = async () => {
  const state = getState()
  const info = await getInfo()
  setNextState({
    ...state,
    info: info.data,
    statuses: {
      ...state.statuses,
      info: info.status,
    },
  })
  getBoard()
  setInterval(getBoard, 60000)
}

export const getBoard = () => {
  const info = getState().info
  const infoStatus = getState().statuses.info
  const PFirstblood = getFirstblood()
  const PHistory = getHistory()
  Promise.all([PFirstblood, PHistory]).then(all => {
    const firstblood = all[0]
    const history = all[1]
    const current = history.data[history.data.length - 1]
    const teams = info.commands
      .map((team: ICommandData) => {
        const cur = current.scoreboard.find(
          (i: IScoreboard) => i.id === team.id
        )
        return { ...team, ...cur }
      })
      .map((team: ICommandData) => {
        const newServices = team.services.map(
          (service: IService, index: number) => {
            return {
              ...service,
              name: info.services[index],
            }
          }
        )
        return {
          ...team,
          services: newServices,
        }
      })
    setNextState({
      statuses: {
        info: infoStatus,
        firstblood: firstblood.status,
        history: history.status,
      },
      info: {
        ...info,
        commands: teams,
      },
      history: history.data,
      current,
      firstblood: firstblood.data,
    })
  })
}

export const getInfo = async (): Promise<IFetchResult<IInfo>> => {
  const info = await BoardApi.fetchInfo()
  return {
    data: info.data,
    status: info.status,
  }
}

export const getHistory = async (): Promise<IFetchResult<IHistory>> => {
  const history = await BoardApi.fetchHistory()
  return {
    data: history.data,
    status: history.status,
  }
}

export const getFirstblood = async (): Promise<IFetchResult<IFirstblood[]>> => {
  const firstblood = await BoardApi.fetchFirstblood()
  return {
    data: firstblood.data,
    status: firstblood.status,
  }
}
