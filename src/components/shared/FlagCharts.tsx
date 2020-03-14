import React from 'react'

import styles from './FlagCharts.module.scss'

interface IProps {
  totalFlags?: number
  flagsAmount?: number
  sflagsAmount?: number
}

const FlagCharts = (props: IProps) => {
  const { totalFlags, flagsAmount, sflagsAmount } = props

  const flagPart = Math.floor((flagsAmount / totalFlags) * 100)
  const sflagPart = Math.floor((sflagsAmount / totalFlags) * 100)

  return (
    <svg className={styles.flagCharts}>
      <rect fill={'green'} width={flagPart} height={10} />
      <rect fill={'red'} x={flagPart} width={sflagPart} height={10} />
    </svg>
  )
}

export default FlagCharts
