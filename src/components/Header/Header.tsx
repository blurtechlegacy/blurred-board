import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import nanoid from 'nanoid'
import Timer from '../shared/Timer'
import { IAppState } from 'src/store/state'
import { connect } from 'react-redux'
import { IInfo, ICommandInfo } from 'src/classes/models/IInfo'
import { IHistory } from 'src/classes/models/IHistory'
import { ExportToExcel } from '../shared/ExportToExcel'

interface IProps {
  info: IInfo
  history: IHistory
  teams: ICommandInfo[]
}

const Header = (props: IProps) => {
  const { info, history } = props
  const [services, setServices] = React.useState<string[]>()

  React.useEffect(() => {
    setServices(info.services)
  }, [info])

  return (
    <header>
      <div>
        <h1 className={styles.boardName}>{settings.name}</h1>
        {history.length > 0 && <span> Rounds: {history.length}</span>}
        <Timer start={info.start} end={info.end} />
        <ExportToExcel
          dataset={props.teams}
          fields={[
            'id',
            'country',
            'logo',
            'name',
            'down',
            'up',
            'timeout',
            'Kaspiskiy_Lag',
          ]}
        />
      </div>
      <div className={styles.serviceList}>
        {services?.map((service: string) => (
          <div key={nanoid(8)} className={styles.serviceName}>
            {service}
          </div>
        ))}
      </div>
    </header>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  info: state.app.info,
  history: state.app.history,
  teams: state.app.info.teams,
})

const HeaderConnected = connect(mapStateToProps)(Header)

export { HeaderConnected as Header }
