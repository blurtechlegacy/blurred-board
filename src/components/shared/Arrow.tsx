import React from 'react'

import styles from 'src/components/shared/Arrow.module.scss'
import { ReactComponent as ArrowIco } from 'src/assets/images/arrow.svg'
import classNames from 'classnames'

interface IProps {
  direction: 'UP' | 'DOWN'
  color: string
  label?: string
}

const Arrow = (props: IProps) => {
  const { direction, color, label } = props
  return (
    <span style={{ color }} className={styles.arrow}>
      <ArrowIco
        style={{ fill: color }}
        className={classNames(styles.arrowIco, styles[`arrowImg_${direction}`])}
      />
      <span className={styles.arrow_label}>{label}</span>
    </span>
  )
}

export default Arrow
