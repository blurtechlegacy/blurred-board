import { HttpRequest } from 'src/classes/http/HttpRequest'
import Logger from 'src/classes/utils/Logger'
import settings from 'src/config/settings'

export default class Rest {
  public static async get(url: string): Promise<any> {
    const request = new HttpRequest()
    console.log(settings.server, process.env.SERVER)
    const response = await request
      .get(`${settings.server}${url}`)
      .catch(Logger.error)
    const responseData = response['data'] || null
    if (responseData && responseData['Errors']) {
      throw new Error(responseData['Errors'])
    }
    return responseData
  }
}
