import React from 'react'
import { ICommand } from 'src/classes/models/ICommand'
import { IService } from 'src/classes/models/IService'

import ServiceCell from './ServiceCell/ServiceCell'

import styles from './Board.module.scss'
import { IStatus } from '../../classes/models/IStatus'
import nanoid from 'nanoid'

interface IProps {
  store: any
}

const setColorClass = (status: any) => {
  return `status_class_${status}`
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<ICommand[]>()

  React.useEffect(() => {
    setCommands(store.info.teams)
  }, [store])

  return (
    <main>
      {commands?.map((command: ICommand) => (
        <div key={nanoid(8)} className={styles.command}>
          <div className={styles.commandData}>
            <div className={styles.commandName}>{command.name}: </div>
            <br />
            Total SLA: {command.TotalSLA}%
            <br />
            Flag Points:{' '}
            {command.services
              ?.map((s: any) => {
                console.log('map', s.flags)
                return s.fp
              })
              .reduce((p: any, c: any) => {
                console.log('reduce', p, c, p + c)
                return p + c
              })}
          </div>
          {command.services?.map((service: IService) => (
            <ServiceCell
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
