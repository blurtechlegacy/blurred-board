import { IData } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import Rest from 'src/classes/http/Rest'
import { HttpCancel } from 'classes/http/HttpCancel'

class BoardApi {
  public fetchInfo = async (
    cancelObject?: HttpCancel
  ): Promise<IData<IInfo>> => {
    const data = await Rest.get('/api/info', cancelObject)
    console.log(data)
    const castedData = rawCastInfo(data)
    return {
      data: castedData,
      status: true,
    }
  }
}

export default new BoardApi()
