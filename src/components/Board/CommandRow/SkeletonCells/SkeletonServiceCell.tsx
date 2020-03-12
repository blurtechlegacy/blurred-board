import React from 'react'

import styles from './SkeletonServiceCell.module.scss'
import flag from '../../../../assets/images/flagWhite.svg'
import SkeletonText from '../../../shared/SkeletonText'

export default function SkeletonServiceCell() {
  return (
    <div className={styles.skeletonCell}>
      <div className={styles.topInfo}>
        <span>
          STATUS: <SkeletonText width={65} />
        </span>
        <span>
          SLA: <SkeletonText width={40} />%
        </span>
        <span>
          FP: <SkeletonText width={20} />
        </span>
      </div>
      <div className={styles.bottomInfo}>
        <img className={styles.flags} src={flag} alt={'flagIco'} />
        <span>
          <SkeletonText width={10} />/<SkeletonText width={10} />
        </span>
      </div>
    </div>
  )
}
