import React from 'react'
import styles from 'src/components/shared/Arrow.module.scss'
import classNames from 'classnames'

interface IProps {
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
  color?: string
}

const Arrow = (props: IProps) => {
  const { direction, color } = props
  return (
    <i
      className={classNames(
        styles[direction],
        styles.status,
        color && styles[`status${color}`]
      )}
    />
  )
}

export default Arrow
