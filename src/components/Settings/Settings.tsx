import React from 'react'
import styles from 'src/components/Settings/Settings.module.scss'
import { ReactComponent as Gear } from 'src/assets/images/gear.svg'
import { ReactComponent as Notification } from 'src/assets/images/notification.svg'
import { ReactComponent as Sound } from 'src/assets/images/sound.svg'
import { IAppState } from 'src/store/state'
import { connect } from 'react-redux'
import Crossed from 'src/components/Settings/Crossed'
import { getState, setNextState } from 'src/store'

interface IProps {
  notifications: boolean
  sound: boolean
}

const Settings = (props: IProps) => {
  const { notifications, sound } = props
  const state = getState()
  const [show, setShow] = React.useState<boolean>(false)

  return (
    <div className={styles.settings}>
      <Gear
        className={styles.gear}
        onClick={() => setShow(prevState => !prevState)}
      />
      {show && (
        <div className={styles.settingsBar}>
          {notifications ? (
            <Notification
              className={styles.notifications}
              onClick={() => {
                setNextState({
                  ...state,
                  settings: {
                    ...state.settings,
                    notifications: false,
                  },
                })
              }}
            />
          ) : (
            <Crossed type={'notifications'}>
              <Notification className={styles.notifications} />
            </Crossed>
          )}
          {sound ? (
            <Sound
              className={styles.sound}
              onClick={() => {
                setNextState({
                  ...state,
                  settings: {
                    ...state.settings,
                    sound: false,
                  },
                })
              }}
            />
          ) : (
            <Crossed type={'sound'}>
              <Sound className={styles.sound} />
            </Crossed>
          )}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  notifications: state.app.settings.notifications,
  sound: state.app.settings.sound,
})

const SettingsConnected = connect(mapStateToProps)(Settings)

export { SettingsConnected as Settings }
