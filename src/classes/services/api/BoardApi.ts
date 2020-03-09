import { IData } from 'src/classes/models/IData'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import Rest from 'src/classes/http/Rest'
import { IHistory } from 'src/classes/models/IHistory'
import { IFirstblood } from '../../models/IFirstblood'

class BoardApi {
  public fetchInfo = async (): Promise<IData<IInfo>> => {
    const data = await Rest.get('/api/info')
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

  public fetchHistory = async (): Promise<IData<IHistory>> => {
    const data = await Rest.get('/history/scoreboard.json')
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

  public fetchFirstblood = async (): Promise<IData<IFirstblood[]>> => {
    const data = await Rest.get('/fb.json')
    if (data) {
      return {
        data: data,
        status: true,
      }
    } else {
      return {
        data: [] as IFirstblood[],
        status: false,
      }
    }
  }
}

export default new BoardApi()
