import Logger from 'src/classes/utils/Logger'
import settings from 'src/config/settings'
import { toast } from 'react-toastify'

export const get = async (url: string): Promise<any> => {
  const response = await fetch(`${settings.server}${url}`)
    .then(response => response.json())
    .catch(error => {
      Logger.error(error)
      toast.error(`Error requesting to ${url}`)
    })
  return response || null
}
