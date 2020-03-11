import { IFetchResult } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import Rest from 'src/classes/http/Rest'
import { IHistory } from 'src/classes/models/IHistory'
import { IFirstblood } from '../../models/IFirstblood'

class BoardApi {
  public fetchInfo = async (): Promise<IFetchResult<IInfo>> => {
    const data = await Rest.get('/info')
    const castedData = rawCastInfo(data)
    return {
      data: (data && castedData) || ({} as IInfo),
      status: !!data,
    }
  }

  public fetchHistory = async (): Promise<IFetchResult<IHistory>> => {
    let data = await Rest.get('/history/scoreboard.json')
    return {
      data: data || ([] as IHistory),
      status: !!data,
    }
  }

  public fetchFirstblood = async (): Promise<IFetchResult<IFirstblood[]>> => {
    let data = await Rest.get('/fb.json')
    return {
      data: data || ([] as IFirstblood[]),
      status: !!data,
    }
  }
}

export default new BoardApi()
