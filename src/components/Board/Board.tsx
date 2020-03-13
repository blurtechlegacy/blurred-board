import React from 'react'
import { connect } from 'react-redux'
import { ICommandData } from 'src/classes/models/IInfo'
import { IAppState } from 'src/store/state'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import CommandRow from 'src/components/Board/CommandRow/CommandRow'
import styles from './Board.module.scss'

interface IProps {
  firstblood: IFirstblood[]
  commands: ICommandData[]
  servicesAmount: number
}

const Board = (props: IProps) => {
  const { firstblood, commands, servicesAmount } = props

  const isFirstblood = (commandName: string): IFirstblood | undefined => {
    return firstblood.find((fb: IFirstblood) => fb.team === commandName)
  }

  return (
    <main className={styles.board}>
      {commands.map((commandData: ICommandData, index: number) => (
        <CommandRow
          key={commandData ? commandData.id : index}
          commandPlace={index + 1}
          firstblood={commandData ? isFirstblood(commandData.name) : undefined}
          servicesAmount={servicesAmount}
          commandData={commandData}
        />
      ))}
    </main>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  firstblood: state.app.firstblood,
  commands: state.app.info.commands ? state.app.info.commands : [...Array(3)],
  servicesAmount: state.app.info.services ? state.app.info.services.length : 4,
})

const BoardConnected = connect(mapStateToProps)(Board)

export { BoardConnected as Board }
