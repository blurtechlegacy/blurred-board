import * as BoardApi from 'src/classes/services/api/BoardApi'
import { ICommandData } from 'src/classes/models/IInfo'
import { IHistory, IRound, IService } from 'src/classes/models/IHistory'
import { getState, setNextState } from 'src/store'
import { IState } from 'src/store/state'
import { ICurrent } from 'src/classes/models/ICurrent'

export const init = async () => {
  const state = getState()
  const info = await BoardApi.fetchInfo()
  const current = await BoardApi.fetchCurrent()
  setNextState({
    ...state,
    info: info.data,
    statuses: {
      ...state.statuses,
      info: info.status,
      current: current.status,
    },
    current: current.data,
  })
  getBoard()
  setInterval(getBoard, 300000)
}

const commandsMap = (state: IState, current: ICurrent) =>
  state.info.commands
    .map((team: ICommandData) => {
      const cur = current.scoreboard.find((i: ICommandData) => i.id === team.id)
      return { ...team, ...cur }
    })
    .map((team: ICommandData) => {
      const newServices = team.services.map(
        (service: IService, index: number) => {
          return {
            ...service,
            name: state.info.services[index],
          }
        }
      )
      return {
        ...team,
        services: newServices,
      }
    })

// TODO: rewrite this bullshit
const historyMap = (state: IHistory, history: IHistory) =>
  history.map((round: IRound, index) => {
    console.log(round, state)
    if (state.length > 0 && round.round === state[index].round) {
      return { ...round, ...state[index] }
    } else {
      return round
    }
  })

export const getBoard = () => {
  const state = getState()
  const PFirstblood = BoardApi.fetchFirstblood()
  const PHistory = BoardApi.fetchHistory()
  Promise.all([PFirstblood, PHistory]).then(all => {
    const firstblood = all[0]
    const history = all[1]
    const teams = commandsMap(state, state.current)
    setNextState({
      ...state,
      statuses: {
        ...state.statuses,
        info: state.statuses.info,
        firstblood: firstblood.status,
        history: history.status,
      },
      info: {
        ...state.info,
        commands: teams,
      },
      history: historyMap(state.history, history.data),
      firstblood: firstblood.data,
    })
  })
}
