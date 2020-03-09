import BoardApi from 'src/classes/services/api/BoardApi'
import { IFetchResult } from 'src/classes/models/IFetchResult'
import { ICommandInfo, IInfo } from 'src/classes/models/IInfo'
import { IHistory, IScoreboard, IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { getState, setNextState } from 'src/store/index'

class BoardStoreService {
  public loading: Promise<void>
  public constructor() {
    this.loading = new Promise<void>(resolve => {
      this.loadingResolver = resolve
    })
  }
  public loadingResolver: () => void = () => {}

  public init = async () => {
    const state = getState()
    const info = await this.getInfo()
    setNextState({
      ...state,
      info: info.data,
      statuses: {
        ...state.statuses,
        info: info.status,
      },
    })
    const PFirstblood = this.getFirstblood()
    const PHistory = this.getHistory()
    Promise.all([PFirstblood, PHistory]).then(all => {
      const firstblood = all[0]
      const history = all[1]
      const current = history.data[history.data.length - 1]
      const teams = info.data.teams
        .map((team: ICommandInfo) => {
          const cur = current.scoreboard.find(
            (i: IScoreboard) => i.id === team.id
          )
          return { ...team, ...cur }
        })
        .map((team: ICommandInfo) => {
          const newServices = team.services.map(
            (service: IService, index: number) => {
              return {
                ...service,
                name: info.data.services[index],
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
          info: info.status,
          firstblood: firstblood.status,
          history: history.status,
        },
        info: {
          ...info.data,
          teams,
        },
        history: history.data,
        current: history.data[history.data.length - 1],
        firstblood: firstblood.data,
      })
    })
  }

  public getInfo = async (): Promise<IFetchResult<IInfo>> => {
    const info = await BoardApi.fetchInfo()
    this.loadingResolver()
    return {
      data: info.data,
      status: info.status,
    }
  }

  public getHistory = async (): Promise<IFetchResult<IHistory>> => {
    const history = await BoardApi.fetchHistory()
    this.loadingResolver()
    return {
      data: history.data,
      status: history.status,
    }
  }

  public getFirstblood = async (): Promise<IFetchResult<IFirstblood[]>> => {
    const firstblood = await BoardApi.fetchFirstblood()
    this.loadingResolver()
    return {
      data: firstblood.data,
      status: firstblood.status,
    }
  }
}

export default new BoardStoreService()
