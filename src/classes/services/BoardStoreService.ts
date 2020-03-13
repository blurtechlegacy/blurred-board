import * as BoardApi from 'src/classes/services/api/BoardApi'
import { IFetchResult } from 'src/classes/models/IFetchResult'
import { ICommandData, IInfo } from 'src/classes/models/IInfo'
import { IHistory, IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { getState, setNextState } from 'src/store'
import { ICurrent } from '../models/ICurrent'

export const init = async () => {
  const state = getState()
  const info = await getInfo()
  const current = await getCurrent()
  setNextState({
    ...state,
    info: info.data,
    statuses: {
      ...state.statuses,
      info: info.status,
      current: current.status,
    },
    current: current.data,
  })
  getBoard()
  setInterval(getBoard, 300000)
}

export const getBoard = () => {
  const state = getState()
  const PFirstblood = getFirstblood()
  const PHistory = getHistory()
  Promise.all([PFirstblood, PHistory]).then(all => {
    const firstblood = all[0]
    const history = all[1]
    const current = state.current
    const teams = state.info.commands
      .map((team: ICommandData) => {
        const cur = current.scoreboard.find(
          (i: ICommandData) => i.id === team.id
        )
        return { ...team, ...cur }
      })
      .map((team: ICommandData) => {
        const newServices = team.services.map(
          (service: IService, index: number) => {
            return {
              ...service,
              name: state.info.services[index],
            }
          }
        )
        return {
          ...team,
          services: newServices,
        }
      })
    setNextState({
      ...state,
      statuses: {
        ...state.statuses,
        info: state.statuses.info,
        firstblood: firstblood.status,
        history: history.status,
      },
      info: {
        ...state.info,
        commands: teams,
      },
      history: history.data,
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

export const getCurrent = async (): Promise<IFetchResult<ICurrent>> => {
  const current = await BoardApi.fetchCurrent()
  return {
    data: current.data,
    status: current.status,
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
