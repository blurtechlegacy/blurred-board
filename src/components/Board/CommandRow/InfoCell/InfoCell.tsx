import React from 'react'
import styles from './InfoCell.module.scss'
import { ICommandData } from 'src/classes/models/IInfo'

type ICommandInfo = Omit<ICommandData, 'services'>

interface IProps {
  commandInfo: ICommandInfo
  commandPlace: number
  flagPoints: number
}

export default function InfoCell(props: IProps) {
  const { commandInfo, commandPlace, flagPoints } = props
  return (
    <div className={styles.cell}>
      <div className={styles.logo}>
        <img
          src={commandInfo.logo ? commandInfo.logo : './logo.jpg'}
          alt={`${commandInfo.name} from ${commandInfo.country}`}
        />
      </div>
      <div className={styles.labelsBlock}>
        <div className={styles.commandInfoBlock}>
          <span>{`${commandPlace}.${commandInfo.name}`}</span>
        </div>
        <div className={styles.commandStatsBlock}>
          <span>{`Total SLA: ${100}%`}</span>
          <span>{`Flag points: ${flagPoints}`}</span>
        </div>
      </div>
    </div>
  )
}
