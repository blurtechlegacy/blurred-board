import React from 'react'
import classNames from 'classnames'
import styles from './InfoCell.module.scss'
import { ICommandData } from 'src/classes/models/IInfo'
import SkeletonText from 'src/components/shared/SkeletonText'
import SkeletonImg from 'src/components/shared/SkeletonImg'

type ICommandInfo = Omit<ICommandData, 'services'>

interface IProps {
  commandData?: ICommandInfo
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
          <span>
            {commandPlace && commandData && commandData.bias ? (
              `${commandPlace} (${commandData?.bias})`
            ) : (
              <SkeletonText width={15} />
            )}
            .{commandData ? commandData.name : <SkeletonText width={100} />}
          </span>
        </div>
        <div className={styles.commandStatsBlock}>
          <span>{`Total SLA: ${100}%`}</span>
          <span>
            Flag points: {flagPoints ? flagPoints : <SkeletonText width={20} />}
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoCell
