import React from 'react'
import { IService } from 'src/classes/models/IHistory'
import ServiceCell from 'src/components/Board/ServiceCell/ServiceCell'
import styles from './Board.module.scss'
import { IStatus } from 'src/classes/models/IStatus'
import nanoid from 'nanoid'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { ICommandInfo } from 'src/classes/models/IInfo'
import { connect } from 'react-redux'
import { IAppState } from 'src/store/state'

interface IProps {
  firstblood: IFirstblood[]
  teams: ICommandInfo[]
}

const setColorClass = (status: any) => {
  return `status_class_${status}`
}

const Board = (props: IProps) => {
  const { firstblood, teams } = props

  return (
    <main>
      {teams?.map((command: ICommandInfo, index: number) => (
        <div key={nanoid(8)} className={styles.command}>
          <div className={styles.commandData}>
            <div className={styles.position}>{index + 1}</div>
            <img
              className={styles.logo}
              src={command.logo ? command.logo : './logo.jpg'}
              alt={`${command.name} from ${command.country}`}
            />
            <div className={styles.commandName}>
              <div>{command.name}</div>
              <div>{command.TotalSLA && `Total SLA: ${command.TotalSLA}%`}</div>
              <div>
                {command.services
                  ?.map((s: any) => s.fp)
                  .reduce((p: any, c: any) => p + c) &&
                  `Flag Points: ${command.services
                    ?.map((s: any) => s.fp)
                    .reduce((p: any, c: any) => p + c)}`}
              </div>
            </div>
          </div>
          {command.services?.map((service: IService) => (
            <ServiceCell
              firstblood={firstblood.find(
                (fb: IFirstblood) =>
                  fb.team === command.name && service.name === fb.service
              )}
              key={nanoid(8)}
              className={styles[setColorClass(IStatus[service.status])]}
              service={service}
            />
          ))}
        </div>
      ))}
    </main>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  firstblood: state.app.firstblood,
  teams: state.app.info.teams,
})
const BoardConnected = connect(mapStateToProps)(Board)

export { BoardConnected as Board }
