import BoardApi from './api/BoardApi'
import { IData } from '../models/IFetchResult'
import { IBoard } from '../models/IBoard'

class BoardStoreService {
  public loading: Promise<void>
  public constructor() {
    this.loading = new Promise<void>(resolve => {
      this.loadingResolver = resolve
    })
  }
  public loadingResolver: () => void = () => {}

  public getBoard = async (): Promise<IData<IBoard>> => {
    const board = await BoardApi.fetchBoard()
    this.loadingResolver()
    return {
      data: board.data,
      status: board.status,
    }
  }
}

export default new BoardStoreService()
