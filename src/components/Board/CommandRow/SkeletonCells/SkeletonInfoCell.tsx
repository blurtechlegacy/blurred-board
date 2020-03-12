import React from 'react'

import styles from './SkeletonInfoCell.module.scss'

import SkeletonImg from 'src/components/shared/SkeletonImg'
import SkeletonText from 'src/components/shared/SkeletonText'

export default function SkeletonInfoCell() {
  return (
    <div className={styles.skeletonCell}>
      <div className={styles.logo}>
        <SkeletonImg />
      </div>
      <div className={styles.labelsBlock}>
        <div className={styles.commandInfoBlock}>
          <span>
            <SkeletonText width={10} />.<SkeletonText width={100} />
          </span>
        </div>
        <div className={styles.commandStatsBlock}>
          <span>
            Total SLA: <SkeletonText width={20} />%
          </span>
          <span>
            Flag points: <SkeletonText width={20} />
          </span>
        </div>
      </div>
    </div>
  )
}
