export const initialState = {
  scoreBoard: 'you gay',
}

export type IState = typeof initialState

export interface IAppState {
  app: IState
}
