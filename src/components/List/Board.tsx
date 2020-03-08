import React from 'react'
import styles from './Board.module.scss'
import { IStatus } from 'src/classes/models/IStatus'

interface IProps {
  store: any
}

const setColorClass = (status: any) => {
  return 'status_class_' + status
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState()

  React.useEffect(() => {
    setCommands(store.info.teams)
  }, [store])

  return (
    <main>
      {commands?.map((command: any) => (
        <div className={styles.command}>
          <div className={styles.commandData}>
            <div className={styles.commandName}>{command.name}: </div>
            <br />
            {command.score}
          </div>
          {command.services?.map((service: any) => (
            <div className={styles[setColorClass(IStatus[service.status])]}>
              {IStatus[service.status]}
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Board
