import BoardApi from 'src/classes/services/api/BoardApi'
import { IFetchResult } from 'src/classes/models/IFetchResult'
import { ICommandData, IInfo } from 'src/classes/models/IInfo'
import { IHistory, IScoreboard, IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { getState, setNextState } from '../../store'

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
    this.getBoard()
    setInterval(this.getBoard, 60000)
  }

  public getBoard = () => {
    const info = getState().info
    const infoStatus = getState().statuses.info
    const PFirstblood = this.getFirstblood()
    const PHistory = this.getHistory()
    Promise.all([PFirstblood, PHistory]).then(all => {
      const firstblood = all[0]
      const history = all[1]
      const current = history.data[history.data.length - 1]
      if (current) {
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
      }
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
