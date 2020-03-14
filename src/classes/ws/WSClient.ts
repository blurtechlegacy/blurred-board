import settings from 'src/config/settings'
import Logger from 'src/classes/utils/Logger'
import { rawCastCurrent } from 'src/classes/models/ICurrent'
import { getState, setNextState } from '../../store'
import { toast } from 'react-toastify'

export const init = () => {
  const state = getState()
  const ws = new WebSocket(settings.wsServer)
  ws.onopen = () => {
    Logger.info('Websocket connection established')
    toast.info('Websocket connection established')
  }
  ws.onmessage = message => {
    const data = rawCastCurrent(JSON.parse(message.data))
    setNextState({
      ...state,
      current: data,
      info: {
        ...state.info,
        roundsCount: data.round,
        commands: data.scoreboard,
      },
      statuses: {
        ...state.statuses,
        current: !!data,
      },
    })
  }
  ws.onclose = () => {
    Logger.error('Websocket connection closed')
    toast.error('Websocket connection closed')
  }
}
