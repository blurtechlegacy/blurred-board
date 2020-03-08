import React from 'react'
import { IBoard } from 'classes/models/IBoard'
import { ICommand } from 'classes/models/ICommand'
import { IService } from 'classes/models/IService'

import ServiceCell from './ServiceCell/ServiceCell'

import styles from './Board.module.scss'

interface IProps {
  store: IBoard
}

const setColorClass = (status: any) => {
  return (`status_class_${status}`)
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<ICommand[]>()

  React.useEffect(() => {
    setCommands(store.Commands)
  }, [store])

  return (
    <main>
      {commands?.map((command: ICommand, key) => (
        <div key={key} className={styles.command}>
          <div className={styles.commandData}>
            <div className={styles.commandName}>
              {command.Name}:{' '}
            </div>
            <br/>
            Total SLA: {command.TotalSLA}%
            <br/>
            Flag Points: {command.FlagPoints}
          </div>
          {command.Services?.map((service: IService, key) => (
            <ServiceCell key={key} className={styles[setColorClass(service.Status)]} service={service}/>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Board
