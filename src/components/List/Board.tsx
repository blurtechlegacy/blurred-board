import React from 'react'
import styles from './Board.module.scss'

interface IProps {
  store: any
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
          {command.Name}:{' '}
          {command.Services?.map((service: any) => (
            <div className={styles.service}>{service.Status}</div>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Board
