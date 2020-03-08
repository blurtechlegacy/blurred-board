import React from 'react'
import styles from './Board.module.scss'

interface IProps {
  store: any
}

const setColorClass = (status: any) => {
  return 'status_class_' + status
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<any[]>()

  React.useEffect(() => {
    setCommands(store.Commands)
  }, [store])

  return (
    <main>
      {commands?.map((command: any) => (
        <div className={styles.command}>
          <div className={styles.commandData}>
            <div className={styles.commandName}>{command.Name}: </div>
            <br />
            {command.SLA}
          </div>
          {command.Services?.map((service: any) => (
            <div className={styles[setColorClass(service.Status)]}>
              {service.Status}
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Board
