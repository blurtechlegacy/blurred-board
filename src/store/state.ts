import { IInfo } from 'src/classes/models/IInfo'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { IHistory, IRound } from 'src/classes/models/IHistory'

export const initialState = {
  statuses: {
    info: false,
    firstblood: false,
    history: false,
  },
  info: {} as IInfo,
  firstblood: [] as IFirstblood[],
  history: [] as IHistory,
  current: {} as IRound,
}

export type IState = typeof initialState

export interface IAppState {
  app: IState
}
