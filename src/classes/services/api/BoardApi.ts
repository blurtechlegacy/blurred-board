import { IData } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import Rest from 'src/classes/http/Rest'
import { HttpCancel } from 'src/classes/http/HttpCancel'
import { IHistory } from 'src/classes/models/IHistory'

class BoardApi {
  public fetchInfo = async (
    cancelObject?: HttpCancel
  ): Promise<IData<IInfo>> => {
    const data = await Rest.get('/api/info', cancelObject)
    if (data) {
      const castedData = rawCastInfo(data)
      return {
        data: castedData,
        status: true,
      }
    } else {
      return {
        data: {} as IInfo,
        status: false,
      }
    }
  }
  public fetchHistory = async (
    cancelObject?: HttpCancel
  ): Promise<IData<IHistory>> => {
    const data = await Rest.get('/history/scoreboard.json', cancelObject)
    if (data) {
      return {
        data: data,
        status: true,
      }
    } else {
      return {
        data: [] as IHistory,
        status: false,
      }
    }
  }
}

export default new BoardApi()
