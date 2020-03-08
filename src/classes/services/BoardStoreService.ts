import BoardApi from 'src/classes/services/api/BoardApi'
import { IData } from 'src/classes/models/IFetchResult'

class BoardStoreService {
  public loading: Promise<void>
  public constructor() {
    this.loading = new Promise<void>(resolve => {
      this.loadingResolver = resolve
    })
  }
  public loadingResolver: () => void = () => {}

  public getInfo = async (): Promise<IData<any>> => {
    const board = await BoardApi.fetchInfo()
    this.loadingResolver()
    return {
      data: board.data,
      status: board.status,
    }
  }
}

export default new BoardStoreService()
