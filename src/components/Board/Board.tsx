import React from 'react'

import { connect } from 'react-redux'
import { ICommandData } from 'src/classes/models/IInfo'
import { IAppState } from 'src/store/state'
import { IFirstblood } from 'src/classes/models/IFirstblood'

import CommandRow from './CommandRow/CommandRow'

import styles from './Board.module.scss'

interface IProps {
  firstblood: IFirstblood[]
  commands: ICommandData[]
  servicesAmount: number
}

function isCommandFirstblood(
  commandName: string,
  firstbloods: IFirstblood[]
): IFirstblood | undefined {
  return firstbloods.find((fb: IFirstblood) => fb.team === commandName)
}

const Board = (props: IProps) => {
  const { firstblood, commands, servicesAmount } = props

  const renderRows = () => {
    const resultRows = []
    if (commands) {
      commands.map((commandData: ICommandData, index: number) =>
        resultRows.push(
          <CommandRow
            key={commandData.id}
            commandPlace={index + 1}
            firstblood={isCommandFirstblood(commandData.name, firstblood)}
            servicesAmount={servicesAmount}
            commandData={commandData}
          />
        )
      )
    } else {
      for (let i = 0; i < 5; i++) {
        resultRows.push(
          <CommandRow
            key={i}
            servicesAmount={servicesAmount}
            commandPlace={i + 1}
          />
        )
      }
    }

    return resultRows
  }

  return (
    <main id={'board'} className={styles.board}>
      {renderRows()}
    </main>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  firstblood: state.app.firstblood,
  commands: state.app.info.commands,
  servicesAmount: state.app.info.services ? state.app.info.services.length : 5,
})
const BoardConnected = connect(mapStateToProps)(Board)

export { BoardConnected as Board }
