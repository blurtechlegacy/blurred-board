import settings from 'src/config/settings'
import Logger from 'src/classes/utils/Logger'
import { rawCastCurrent } from 'src/classes/models/ICurrent'
import { getState, setNextState } from 'src/store'
import { toast } from 'react-toastify'
import FixNotify from 'src/components/shared/Notifications/FixNotify'

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
  ws.onerror = e => {
    Logger.error('Websocket error', e)
    toast(FixNotify, { autoClose: 1000 })
  }
  ws.onclose = () => {
    Logger.error('Websocket connection closed')
    setTimeout(init, 5000)
  }
}
