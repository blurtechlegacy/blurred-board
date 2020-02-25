import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import Logger from 'src/classes/utils/Logger'
import { HttpCancel } from 'classes/http/HttpCancel'

class HttpRequest {
  private headers: IObjectAny
  private readonly client: AxiosInstance

  constructor(header: Object) {
    this.headers = header
    this.client = axios.create()
  }

  public async get(url: string, cancelObject?: HttpCancel) {
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      headers: this.headers,
      params: {},
      data: undefined,
      cancelToken: new axios.CancelToken(c => {
        if (cancelObject) {
          cancelObject.setCancelFunction(c)
        }
      }),
      responseType: undefined,
    }
    try {
      return await this.client(options)
    } catch (e) {
      if (cancelObject) {
        cancelObject.setCancelFunction(() => {})
      }
      Logger.warn(e)
      return {}
    }
  }
}

export { HttpRequest }
