import React from 'react'
import { ICommandData } from '../../classes/models/IInfo'

import TeamRow from './CommandRow/CommandRow'
import styles from './Board.module.scss'

interface IProps {
  store: any
}

const Board = (props: IProps) => {
  const { store } = props
  const [commands, setCommands] = React.useState<ICommandData[]>()

  React.useEffect(() => {
    setCommands(store.info.teams)
  }, [store])

  return (
    <main className={styles.board}>
      {commands?.map((commandData: ICommandData) => {
        return <TeamRow key={commandData.id} commandData={commandData}/>
      })}
    </main>)
}

export default Board
