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
      <div className={styles.labels_block}>
        <div className={styles.command_info_block}>
          <span>{`${commandPlace}.${commandInfo.name}`}</span>
        </div>
        <div className={styles.command_stats_block}>
          <span>{`Total SLA: ${100}%`}</span>
          <span>{`Flag points: ${flagPoints}`}</span>
        </div>
      </div>
    </div>
  )
}
