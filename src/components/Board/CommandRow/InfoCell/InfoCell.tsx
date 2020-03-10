import React from 'react'

import styles from './InfoCell.module.scss'
import { ICommandData } from '../../../../classes/models/IInfo'

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
      <div className={styles.command_info_block}>
        <span className={styles.position}>{commandPlace}</span>
        <span className={styles.name}>{commandInfo.name}</span>
      </div>
      <div className={styles.command_stats_block}>
        <span>
          {commandInfo.TotalSLA && `Total SLA: ${commandInfo.TotalSLA}%`}
        </span>
        <span>{flagPoints && `Flag points: ${flagPoints}`}</span>
      </div>
    </div>
  )
}
