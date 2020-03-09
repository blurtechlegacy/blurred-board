import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import Logger from 'src/classes/utils/Logger'

class HttpRequest {
  private readonly client: AxiosInstance

  constructor() {
    this.client = axios.create()
  }

  public async get(url: string) {
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      params: {},
      data: undefined,
      responseType: undefined,
    }
    try {
      return await this.client(options)
    } catch (e) {
      Logger.warn(e)
      return {}
    }
  }
}

export { HttpRequest }
