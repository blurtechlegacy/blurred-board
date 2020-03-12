import { IFetchResult } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import Rest from 'src/classes/http/Rest'
import { IHistory } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'

export default {
  async fetchInfo(): Promise<IFetchResult<IInfo>> {
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
  },

  async fetchHistory(): Promise<IFetchResult<IHistory>> {
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
  },

  async fetchFirstblood(): Promise<IFetchResult<IFirstblood[]>> {
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
  },
}
