import React from 'react'
import { ICommandData } from '../../../classes/models/IInfo'

import styles from './InfoCell.module.scss'

type ICommandInfo = Omit<ICommandData, 'services'>

interface IProps {
  commandInfo: ICommandInfo
}

export default function InfoCell(props: IProps) {
  const commandInfo = props.commandInfo

  return (
    <div className={styles.command_infoCell}>
        <span className={styles.info_name}>{commandInfo.name}:</span>
        <span className={styles.info_totalSLA}>Total SLA: {commandInfo.TotalSLA}%</span>
        <span className={styles.info_flagPoints}>Flag Points: {commandInfo.flagPoints}</span>
    </div>
  )
}
