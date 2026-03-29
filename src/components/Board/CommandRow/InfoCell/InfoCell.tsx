import React from 'react'
import classNames from 'classnames'
import styles from './InfoCell.module.scss'
import { ICommandData } from 'src/classes/models/IInfo'
import SkeletonText from 'src/components/shared/SkeletonText'
import SkeletonImg from 'src/components/shared/SkeletonImg'
import Arrow from 'src/components/shared/Arrow'

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
            src={
              commandData.logo ? commandData.logo : './assets/images/logo.jpg'
            }
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
          .
          <p
            title={commandData ? commandData.name : 'loading'}
            className={styles.commandName}
          >
            {commandData ? commandData.name : <SkeletonText width={100} />}
          </p>
        </div>
        <div className={styles.commandStatsBlock}>
          <span>{flagPoints ? flagPoints : <SkeletonText width={30} />}</span>
          <span>
            {commandData && commandData.totalSLA ? (
              `${commandData.totalSLA}%`
            ) : (
              <SkeletonText width={30} />
            )}
          </span>
        </div>
        <div className={styles.deltas}>
          {commandData?.bias ? (
            <Arrow
              direction={commandData?.bias > 0 ? 'UP' : 'DOWN'}
              color={commandData?.bias > 0 ? '#6f6' : '#dc143c'}
              label={
                commandData?.bias > 0
                  ? `+${commandData?.bias.toString()}`
                  : commandData?.bias.toString()
              }
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default InfoCell
