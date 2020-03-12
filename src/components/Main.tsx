import React from 'react'
import * as BoardStoreService from 'src/classes/services/BoardStoreService'
import App from 'src/components/App'
import { IAppState } from '../store/state'
import { connect } from 'react-redux'
import Loader from './shared/Loader'

interface IProps {
  info: boolean
}

const Main = (props: IProps) => {
  const { info } = props
  React.useEffect(() => {
    BoardStoreService.init()
  }, [])

  return info ? <App /> : <Loader />
}

const mapStateToProps = (state: IAppState): IProps => ({
  info: state.app.statuses.info,
})
const MainConnected = connect(mapStateToProps)(Main)

export { MainConnected as Main }
