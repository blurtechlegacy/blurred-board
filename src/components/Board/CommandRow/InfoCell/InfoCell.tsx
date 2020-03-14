import React from 'react'
import classNames from 'classnames'
import styles from './InfoCell.module.scss'
import { ICommandData } from 'src/classes/models/IInfo'
import SkeletonText from 'src/components/shared/SkeletonText'
import SkeletonImg from 'src/components/shared/SkeletonImg'

interface IProps {
  commandData?: ICommandData
  commandPlace?: number
  flagPoints?: number
}

const InfoCell = (props: IProps) => {
  const { commandData, commandPlace, flagPoints } = props

  return (
    <div
      className={classNames(styles.cell, styles[commandData ? '' : 'skeleton'])}
    >
      <div className={styles.logo}>
        {commandData ? (
          <img
            src={commandData.logo ? commandData.logo : './logo.jpg'}
            alt={`${commandData.name} from ${commandData.country}`}
          />
        ) : (
          <SkeletonImg />
        )}
      </div>
      <div className={styles.labelsBlock}>
        <div className={styles.commandInfoBlock}>
          <span className={styles.commandPlace}>
            {commandPlace && commandData ? (
              `${commandPlace}`
            ) : (
              <SkeletonText width={16} />
            )}
          </span>
          <p
            title={commandData ? commandData.name : 'loading'}
            className={styles.commandName}
          >
            {commandData ? commandData.name : <SkeletonText width={100} />}
          </p>
        </div>
        <div className={styles.commandStatsBlock}>
          <span>
            {flagPoints ? flagPoints : <SkeletonText width={30} />}
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoCell
