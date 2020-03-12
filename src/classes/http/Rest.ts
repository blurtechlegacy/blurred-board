import Logger from 'src/classes/utils/Logger'
import settings from 'src/config/settings'

export default {
  async get(url: string): Promise<any> {
    const response = await fetch(`${settings.server}${url}`)
      .then(response => response.json())
      .catch(Logger.error)
    return response || null
  },
}
