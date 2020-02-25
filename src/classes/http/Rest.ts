import { HttpCancel } from 'src/classes/http/HttpCancel'
import { HttpHeaders } from 'src/classes/http/HttpHeaders'
import { HttpRequest } from 'src/classes/http/HttpRequest'
import Logger from 'src/classes/utils/Logger'
import settings from 'src/config/settings'

type TMethod = 'get' | 'post' | 'put' | 'delete'

export default class Rest {
  public static async get(
    url: string,
    cancelObject?: HttpCancel,
    httpHeader?: HttpHeaders
  ): Promise<any> {
    return Rest.request('get', url, cancelObject, httpHeader)
  }

  protected static async request(
    method: TMethod,
    url: string,
    cancelObject?: HttpCancel,
    httpHeader?: HttpHeaders,
    force?: boolean
  ): Promise<any> {
    let headers: HttpHeaders | undefined = httpHeader

    if (!httpHeader) {
      headers = new HttpHeaders()
      headers.add('Access-Control-Allow-Origin', '*')
      headers.add('Content-Type', 'application/json; charset=UTF-8')
    }

    if (headers) {
      const request = new HttpRequest(headers)
      const response = await request[method](
        `${settings.server}${url}`,
        cancelObject,
        force
      ).catch(Logger.error)
      const responseData = response['data'] || null
      if (responseData && responseData['Errors']) {
        throw new Error(responseData['Errors'])
      }
      return responseData
    }

    return null
  }
}
