import React from 'react'
import { IBoard } from '../../classes/models/IBoard'
import { ICommand } from '../../classes/models/ICommand'
import { IService } from '../../classes/models/IService'
import styles from './Board.module.scss'

interface IProps {
  store: IBoard
}
const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<ICommand[]>()

  React.useEffect(() => {
    setCommands(store.Commands)
  }, [store])

  return (
    <main>
      {commands?.map((command: ICommand) => (
        <div className={styles.command}>
          {command.Name}:{' '}
          {command.Services?.map((service: IService) => (
            <div className={styles.service}>{service.Status}</div>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Board
