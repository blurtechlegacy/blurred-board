import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import Timer from 'src/components/shared/Timer'
import { IAppState } from 'src/store/state'
import { connect } from 'react-redux'
import { IInfo, ICommandData } from 'src/classes/models/IInfo'
import { IHistory } from 'src/classes/models/IHistory'
import SkeletonText from 'src/components/shared/SkeletonText'
import { NotificationContainer } from 'src/components/shared/NotificationContainer'

interface IProps {
  info: IInfo
  history: IHistory
  teams: ICommandData[]
}

const Header = (props: IProps) => {
  const { info, history } = props
  const [services, setServices] = React.useState<string[]>()

  React.useEffect(() => {
    setServices(info.services)
  }, [info])

  return (
    <header>
      <div className={styles.logo}>
        <h1 className={styles.boardName}>{settings.name}</h1>
        {
          <span className={styles.rounds}>
            Rounds:{' '}
            {info.roundsCount ? (
              info.roundsCount
            ) : history.length ? (
              history.length
            ) : (
              <SkeletonText width={30} />
            )}
          </span>
        }
        <Timer start={info.start} end={info.end} />
      </div>
      <div className={styles.serviceList}>
        {services?.map((service: string) => (
          <div key={service} className={styles.serviceName}>
            {service}
          </div>
        ))}
      </div>
      <NotificationContainer />
    </header>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  info: state.app.info,
  history: state.app.history,
  teams: state.app.info.commands,
})

const HeaderConnected = connect(mapStateToProps)(Header)

export { HeaderConnected as Header }
