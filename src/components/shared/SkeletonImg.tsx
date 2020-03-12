import React from 'react'
import classNames from 'classnames'
import styles from './SkeletonImg.module.scss'

interface IProps {
  animated?: boolean
}

export default function SkeletonImg(props: IProps) {
  const { animated } = props
  return (
    <div className={styles.skeletonBackground}>
      <div
        className={classNames(
          animated ? styles['animated'] : undefined,
          styles.skeletonForeground
        )}
      />
    </div>
  )
}

SkeletonImg.defaultProps = {
  animated: true,
}
