import BoardApi from 'src/classes/services/api/BoardApi'
import { IData } from 'src/classes/models/IData'
import { IInfo } from '../models/IInfo'
import { IHistory } from '../models/IHistory'
import { IFirstblood } from '../models/IFirstblood'

class BoardStoreService {
  public loading: Promise<void>
  public constructor() {
    this.loading = new Promise<void>(resolve => {
      this.loadingResolver = resolve
    })
  }
  public loadingResolver: () => void = () => {}

  public getInfo = async (): Promise<IData<IInfo>> => {
    const info = await BoardApi.fetchInfo()
    this.loadingResolver()
    return {
      data: info.data,
      status: info.status,
    }
  }

  public getHistory = async (): Promise<IData<IHistory>> => {
    const history = await BoardApi.fetchHistory()
    this.loadingResolver()
    return {
      data: history.data,
      status: history.status,
    }
  }

  public getFistblood = async (): Promise<IData<IFirstblood[]>> => {
    const firstblood = await BoardApi.fetchFirstblood()
    this.loadingResolver()
    return {
      data: firstblood.data,
      status: firstblood.status,
    }
  }
}

export default new BoardStoreService()
