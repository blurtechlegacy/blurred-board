import React from 'react'
import classNames from 'classnames'
import styles from './SkeletonText.module.scss'

interface IProps {
  animated?: boolean
  width?: number
}

export default function SkeletonText(props: IProps) {
  const { width, animated } = props
  return (
    <span style={{ width }} className={styles.skeletonBackground}>
      <span
        className={classNames(
          animated ? styles['animated'] : undefined,
          styles.skeletonForeground
        )}
      />
    </span>
  )
}

SkeletonText.defaultProps = {
  animated: true,
}
