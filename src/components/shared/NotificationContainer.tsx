import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IAppState } from 'src/store/state'
import { connect } from 'react-redux'
import './Notification.css'

interface IProps {
  notifications: boolean
}

const NotificationContainer = (props: IProps) => {
  const { notifications } = props
  return (
    <div>
      {notifications && <ToastContainer draggable={false} autoClose={2000} />}
    </div>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  notifications: state.app.settings.notifications,
})

const NotificationContainerConnected = connect(mapStateToProps)(
  NotificationContainer
)

export { NotificationContainerConnected as NotificationContainer }
