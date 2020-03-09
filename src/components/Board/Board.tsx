import React from 'react'
import { IService } from 'src/classes/models/IHistory'
import ServiceCell from 'src/components/Board/ServiceCell/ServiceCell'
import styles from './Board.module.scss'
import { IStatus } from 'src/classes/models/IStatus'
import nanoid from 'nanoid'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { ICommandInfo } from 'src/classes/models/IInfo'
import { IBoard } from 'src/components/Main'

interface IProps {
  store: IBoard
}

const setColorClass = (status: any) => {
  return `status_class_${status}`
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<ICommandInfo[]>()

  React.useEffect(() => {
    setCommands(store.info.teams)
  }, [store])

  return (
    <main>
      {commands?.map((command: ICommandInfo, index: number) => (
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
              <i className={styles.up} />
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
              firstblood={
                store.firstblood &&
                store.firstblood.find(
                  (fb: IFirstblood) =>
                    fb.team === command.name && service.name === fb.service
                )
              }
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

export default Board
