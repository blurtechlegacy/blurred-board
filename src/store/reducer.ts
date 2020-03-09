import { AnyAction, combineReducers } from 'redux'
import { initialState, IState } from './state'

export const APP_NEXT_STATE = '@APP_NEXT_STATE'

const appReducer = (state: IState = initialState, action: AnyAction) =>
  action.type === APP_NEXT_STATE ? action.state : state

export const rootReducer = combineReducers({
  app: appReducer,
})
