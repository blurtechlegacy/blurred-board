import { IInfo } from 'src/classes/models/IInfo'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { IHistory } from 'src/classes/models/IHistory'
import { ICurrent } from '../classes/models/ICurrent'

export const initialState = {
  statuses: {
    info: false,
    firstblood: false,
    history: false,
    current: false,
  },
  info: {} as IInfo,
  firstblood: [] as IFirstblood[],
  history: [] as IHistory,
  current: {} as ICurrent,
}

export type IState = typeof initialState

export interface IAppState {
  app: IState
}
