import React from 'react'

import { ICommandData } from 'src/classes/models/IInfo'
import { IAppState } from 'src/store/state'
import { connect } from 'react-redux'

import CommandRow from './CommandRow/CommandRow'
import { IFirstblood } from '../../classes/models/IFirstblood'

import styles from './Board.module.scss'

interface IProps {
  firstblood: IFirstblood[]
  commands: ICommandData[]
}

function isCommandFirstblood(
  commandName: string,
  firstbloods: IFirstblood[]
): IFirstblood | undefined {
  return firstbloods.find((fb: IFirstblood) => fb.team === commandName)
}

const Board = (props: IProps) => {
  const { firstblood, commands } = props
  return (
    <main id={'board'} className={styles.board}>
      {commands?.map((commandData: ICommandData, index: number) => {
        return (
          <CommandRow
            key={commandData.id}
            commandPlace={index + 1}
            firstblood={isCommandFirstblood(commandData.name, firstblood)}
            commandData={commandData}
          />
        )
      })}
    </main>
  )
}

const mapStateToProps = (state: IAppState): IProps => ({
  firstblood: state.app.firstblood,
  commands: state.app.info.commands,
})
const BoardConnected = connect(mapStateToProps)(Board)

export { BoardConnected as Board }
