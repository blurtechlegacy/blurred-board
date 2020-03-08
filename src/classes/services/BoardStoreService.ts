import BoardApi from 'src/classes/services/api/BoardApi'
import { IData } from 'src/classes/models/IFetchResult'
import { IInfo } from '../models/IInfo'
import { IHistory } from '../models/IHistory'

class BoardStoreService {
  public loading: Promise<void>
  public constructor() {
    this.loading = new Promise<void>(resolve => {
      this.loadingResolver = resolve
    })
  }
  public loadingResolver: () => void = () => {}

  public getInfo = async (): Promise<IData<IInfo>> => {
    const board = await BoardApi.fetchInfo()
    this.loadingResolver()
    return {
      data: board.data,
      status: board.status,
    }
  }

  public getHistory = async (): Promise<IData<IHistory>> => {
    const board = await BoardApi.fetchHistory()
    this.loadingResolver()
    return {
      data: board.data,
      status: board.status,
    }
  }
}

export default new BoardStoreService()
